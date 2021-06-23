import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/FormDesign/index' }],
  fastRefresh: {},
  dva: {
    hmr: true,
  },
});
