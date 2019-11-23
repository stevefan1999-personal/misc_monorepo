const { isMonoPackageExist } = require('../util')

module.exports = {
  prompt: ({ prompter, args }) =>
    prompter
      .prompt({
        message: 'Name of the package?',
        name: 'packageName', 
        type: 'input',
        async validate (x) { 
          return x.length > 0
        }
      })
}