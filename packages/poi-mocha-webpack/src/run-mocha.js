const path = require('path')
const glob = require('fast-glob')
const createMochaWebpack = require('mochapack')

function exit (lazy, code) {
  if (lazy) {
    process.on('exit', () => {
      process.exit(code)
    })
  } else {
    process.exit(code)
  }
}

module.exports = async (api, testFiles, options) => {
  const webpackChain = api.createWebpackChain()

  const webpackConfig = webpackChain.entryPoints
    .clear()
    .end()
    .toConfig()

  const cwd = api.resolveCwd()
  const files = await glob(
    [
      '!**/node_modules/**',
      `!${path.join(path.relative(process.cwd(), api.config.output.dir), '**')}`,
      ...testFiles
    ],
    {
      cwd
    }
  )

  const mochaWebpack =
          createMochaWebpack()
            .cwd(cwd)
            .webpackConfig(webpackConfig)

  for (const opt of [
    'bail',
    'ui',
    'interactive',
    'async-only',
    'colors',
    'quiet',
    'growl',
    'delay',
    'retries',
    'timeout',
    'full-stack-trace',
    'ignore-leaks'
  ]) {
    if (options[opt]) {
      mochaWebpack[opt](options[opt])
    }
  }

  if (options.reporter) {
    mochaWebpack.reporter(options.reporter, options.reporterOptions)
  }
  files.forEach(_ => mochaWebpack.addEntry(_))

  try {
    let ret = await (options.watch ? mochaWebpack.watch() : mochaWebpack.run())
    exit(options.exit, ret)
  } catch (e) {
    if (e) {
      console.error(e.stack)
    }
    exit(options.exit, 1)
  }
}
