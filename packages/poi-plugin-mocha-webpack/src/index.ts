import path from 'path'
import runMocha from './run-mocha'

export const name = 'mocha'

export const cli = (api: any): any => {
  api.cli
    .command('test:mocha [...testFiles]', 'Run unit tests with Mocha')
    .usage('test:mocha [...testFiles] [options]')
    .option('--coverage', 'report code coverage')
    .option('--recursive', 'include sub directories')
    .option('--exit', 'exit cleanly')
    .option('-w, --watch', 'watch files')
    .option('-A, --async-only', 'force all tests to take a callback (async) or return a promise')
    .option('-b, --bail', 'exit immediately on failure')
    .option('-c, --colors', 'force enabling of colors')
    .option('-q, --quiet', 'do not show informational messages')
    .option('-G, --growl', 'enable growl notification support')
    .option('-i, --interactive', 'interactive mode')
    .option('--delay', 'wait for async suite definition')
    .option('--full-trace', 'display the full stack trace')
    .option('-s, --slow <slow>', 'indicate slow in milliseconds')
    .option('-t, --timeout <timeout>', 'timeout in milliseconds')
    .option('-R, --reporter <reporter>', 'specify the reporter to use')
    .option('-O, --reporter-options <opts>', 'specify the reporter-specific options')
    .option('-r, --require [...require]', 'require scripts', {
      default: [],
      type: [String]
    })
    .option('--ui <ui>', 'UI')
    .action((testFiles, options) => {
      for (const mod of options.require) {
        require(path.resolve(mod))
      }
      
      api.hook('createWebpackChain', config => {
        if (options.coverage) {
          /* for general usage */
          config.module
            .rule('istanbul-instrumenter')
            .test(/\.[jt]sx?$/)
            .exclude.add(/node_modules|\.test\.[jt]sx?$/)
            .end()
            .use('istanbul-instrumenter-loader')
            .loader(require.resolve('istanbul-instrumenter-loader'))
            .options({
              esModules: true
            }).end()
            .enforce('post')
        }
      })
      
      return runMocha(
        api,
        testFiles.length === 0 ? ['**/*.{test,spec}.{js,ts}'] : testFiles,
        options
      )
    })
}
