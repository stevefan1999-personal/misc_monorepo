if (!process.env.npm_execpath.includes('pnpm')) {
  console.error('You must use pnpm to install dependencies:')
  console.error('  $ pnpm install')
  console.error('To install pnpm, please install it from npm globally')
  console.error('  $ npm install -g pnpm')
  process.exit(1)
}