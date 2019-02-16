const {
  isMonoPackageExist
} = require('../util')

module.exports = [
  {
    type: 'input',
    name: 'srcPackage',
    message: 'Name of the source package?',
    validate: isMonoPackageExist
  },
  {
    type: 'input',
    name: 'incPackage',
    message: 'Name of the incremented package?',
    validate: isMonoPackageExist
  }
]
