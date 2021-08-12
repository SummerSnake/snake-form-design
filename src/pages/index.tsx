import React, { FC } from 'react';
import { Provider } from 'react-redux';
import _store from '@/utils/dva';

import { SnakeFormDesignProps } from '@/pages/index.d';

import FormDesignPage from './FormDesign';

const SnakeFormDesign: FC<SnakeFormDesignProps> = (props) => {
  const {
    height,
    dataSource,
    treeData = [],
    getWidgetsList = () => {},
    getErrorsList = () => {},
    getRemoveWidgetId,
  } = props;

  return (
    <Provider store={_store}>
      <FormDesignPage
        height={height}
        dataSource={dataSource}
        treeData={treeData}
        getWidgetsList={getWidgetsList}
        getErrorsList={getErrorsList}
        getRemoveWidgetId={getRemoveWidgetId}
      />
    </Provider>
  );
};

export default SnakeFormDesign;
