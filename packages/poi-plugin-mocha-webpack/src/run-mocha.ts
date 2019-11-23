import glob from 'fast-glob'
import createMochaWebpack from 'mochapack'
import path from 'path'

function exit (lazy: boolean, code: number): void {
  if (lazy) {
    process.on('exit', () => {
      process.exit(code)
    })
  } else {
    process.exit(code)
  }
}

export default async (api: any, testFiles: any, options: any): Promise<void> => {
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
    const ret = await (options.watch ? mochaWebpack.watch() : mochaWebpack.run())
    exit(options.exit, ret)
  } catch (e) {
    if (e) {
      console.error(e.stack)
    }
    exit(options.exit, 1)
  }
}
