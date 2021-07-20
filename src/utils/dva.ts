import { create } from 'dva-core';
import models from '@/models';

let app;
let store;
let dispatch;

function createApp(opt) {
  app = create(opt);

  app.use({
    onError(error) {
      console.log(error);
    },
  });

  opt.models.forEach((model) => app.model(model));
  app.start();

  store = app._store;
  app.getStore = () => store;

  dispatch = store.dispatch;

  app.dispatch = dispatch;

  return app;
}

const dva = createApp({
  initialState: {},
  models,
});

const _store = dva.getStore();

export default _store;
