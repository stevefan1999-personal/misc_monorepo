const { isMonoPackageExist } = require('../util')

module.exports = {
  prompt: ({ prompter, args }) =>
    prompter
      .prompt({
        type: 'input',
        name: 'packageName', 
        message: 'Name of the package?',
        async validate(x) { 
          return x.length > 0
        }
      })
}