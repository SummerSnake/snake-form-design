import React from 'react';
import ReactDOM from 'react-dom';
import SnakeFormDesign from '@/pages/index';

// 放置在需要热加载的模块，入口即可
if (module && module['hot']) {
  module['hot'].accept();
}

ReactDOM.render(<SnakeFormDesign />, document.getElementById('root'));
