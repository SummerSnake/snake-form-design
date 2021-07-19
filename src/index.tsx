import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import _store from '@/utils/dva';
import SnakeFormDesign from '@/pages/index';

// 放置在需要热加载的模块，入口即可
if (module && module['hot']) {
  module['hot'].accept();
}

ReactDOM.render(
  <Provider store={_store}>
    <SnakeFormDesign />
  </Provider>,
  document.getElementById('root')
);
