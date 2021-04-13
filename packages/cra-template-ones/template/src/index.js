import { registerPlugin, OPFCore, OPFRouter } from '@ones-ai/opf-core';
import App from './App';

registerPlugin({
  async bootstrap() {
    log('插件启动');
  },
  async mount() {
    log('插件挂载');

    addI18nResources();

    addRoute();
  },
  async unmount() {
    log('插件卸载');
  }
});

function addRoute() {
  OPFCore.router.addRoute({
    path: '/my-plugin',
    slot: OPFRouter.Slots.ROOT,
    component: App
  });
}

/**
 * 添加 i18n 资源
 */
function addI18nResources() {
  OPFCore.i18n.addResources({
    // 当前系统的默认语言是 zh-cn，并非标准的 zh_CN
    'zh-cn': {
      'workspace.home': '我的概览',
      'workspace.dashboard': '我的仪表盘',
      'workspace.filter': '我的筛选器',
      'workspace.manhour': '我的工时'
    }
  });
}

function log(message) {
  console.log(
    `%c ${message}`,
    'font-weight: bold; color: green; font-size: 12px;'
  );
}
