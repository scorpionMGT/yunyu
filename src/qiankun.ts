import { registerMicroApps, start } from 'qiankun'

export const qiankunFunc = () => {
  registerMicroApps([
    {
      name: 'reactApp',
      entry: '//localhost:3000',
      container: '#container',
      activeRule: '/app-react',
    },
    {
      name: 'vueAppç',
      entry: '//localhost:8080',
      container: '#container',
      activeRule: '/app-vue',
    },
    {
      name: 'angularApp',
      entry: '//localhost:4200',
      container: '#container',
      activeRule: '/app-angular',
    },
  ])
  // 启动 qiankun
  start()
}
