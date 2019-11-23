import path from 'path'

const managerTemplate = path.join(__dirname, '../assets/manager.ejs')
const iframeTemplate = path.join(__dirname, '../assets/iframe.ejs')
const useMarkdown = false

export const name = 'storybook'

export const apply = (api: any): any => {
  api.config.pages = {
    iframe: {
      chunks: ['iframe', 'vendors~iframe', 'vendors~iframe~manager'],
      entry: [],
      template: iframeTemplate
    },
    index: {
      chunks: ['manager', 'vendors~manager', 'vendors~iframe~manager'],
      entry: [],
      template: managerTemplate
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
    if (useMarkdown) {
      const markdownRule = config.module.rule('markdown').test(/\.md$/)
      markdownRule.use('html-loader').loader('html-loader')
      markdownRule.use('markdown-loader').loader('markdown-loader')
    }
  })
}


