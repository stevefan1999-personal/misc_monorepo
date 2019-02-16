const path = require('path')

const managerTemplate = path.join(__dirname, 'manager.ejs')
const iframeTemplate = path.join(__dirname, 'iframe.ejs')
const useMarkdown = false

exports.name = 'storybook'

exports.apply = api => {
  api.config.pages = {
    'index': {
      template: managerTemplate,
      chunks: ['manager', 'vendors~manager', 'vendors~iframe~manager'],
      entry: []
    },
    'iframe': {
      template: iframeTemplate,
      chunks: ['iframe', 'vendors~iframe', 'vendors~iframe~manager'],
      entry: []
    }
  }
  api.hook('createWebpackChain', config => {
    const entry = api.config.entry
    config.entryPoints.clear()

    const addonsIndex = api.command === 'develop' ? 2 : 1
    config.entry('iframe')
      .merge(entry.slice(0, addonsIndex))
      .add('#webpack-hot-client')
    if (entry[addonsIndex]) {
      config.entry('manager')
        .merge([path.resolve(entry[addonsIndex])])
    }

    config
      .entry('manager')
      .add('@storybook/core/dist/client/manager')
      .add('#webpack-hot-client')
    if (useMarkdown !== false) {
      const markdownRule = config.module.rule('markdown').test(/\.md$/)
      markdownRule.use('html-loader').loader('html-loader')
      markdownRule.use('markdown-loader').loader('markdown-loader')
    }
  })
}


