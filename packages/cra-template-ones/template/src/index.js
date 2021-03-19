import { registerPlugin } from '@ones-ai/opf-core';

registerPlugin({
  async bootstrap() {
    console.log('bootstrap');
  },
  async mount() {
    console.log('mount');
  },
  async unmount() {
    console.log('unmount');
  }
});
