const pkgDir = require('pkg-dir')
const path = require('path')
const { stat } = require('fs')
const { promisify } = require('util')

async function findMonoPackageRoot() {
  try {
    const root = await pkgDir(__dirname)
    const packages = path.resolve(root, 'packages')
    const stats = await promisify(stat)(packages)
    return stats.isDirectory() ? packages : undefined
  } catch (err) {
  }
  return undefined
}

async function isMonoPackageExist(name) {
  if (name.length < 1) return false

  try {
    const packages = await findMonoPackageRoot()
    if (packages) {
      const package = path.resolve(packages, name)
      const file = await promisify(stat)(package)
      if (file.isDirectory()) {
        const packageJson = await promisify(stat)(path.resolve(package, 'package.json'))
        return packageJson.isFile()
      }
    }
  } catch (err) {
  }
  return false
}

module.exports = {
  findMonoPackageRoot,
  isMonoPackageExist
}
