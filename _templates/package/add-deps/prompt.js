const {
  isMonoPackageExist
} = require('../util')

module.exports = [
  {
    message: 'Name of the source package?',
    name: 'srcPackage',
    type: 'input',
    validate: isMonoPackageExist
  },
  {
    message: 'Name of the incremented package?',
    name: 'incPackage',
    type: 'input',
    validate: isMonoPackageExist
  }
]
