const { isMonoPackageExist } = require('../util')

module.exports = [{
  type: 'input',
  name: 'packageName',
  message: 'Name of the package?',
  validate: async x => x.length > 0 && !(await isMonoPackageExist(x))
}]
