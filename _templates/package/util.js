const pkgDir = require('pkg-dir')
const path = require('path')
const fs = require('fs')

async function findMonoPackageRoot () {
  try {
    const root = await pkgDir(__dirname)
    const packages = path.resolve(root, 'packages')
    const stats = await fs.promises.stat(packages)
    return stats.isDirectory() ? packages : undefined
  } catch (err) {
  }
  return undefined
}

async function isMonoPackageExist (name) {
  if (name.length < 1) {
    return false
  }

  try {
    const packages = await findMonoPackageRoot()
    if (packages) {
      const packagePath = path.resolve(packages, name)
      const file = await fs.promises.stat(packagePath)
      if (file.isDirectory()) {
        const packageJsonPath = path.resolve(packagePath, 'package.json')
        const packageJson = await fs.promises.stat(packageJsonPath)
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
