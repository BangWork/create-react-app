import { registerPlugin } from '@ones-ai/opf-core';

registerPlugin({
  async bootstrap() {
    log('插件启动');
  },
  async mount() {
    log('插件挂载');
  },
  async unmount() {
    log('插件卸载');
  }
});

function log(message) {
  console.log(
    `%c ${message}`,
    'font-weight: bold; color: green; font-size: 12px;'
  );
}
