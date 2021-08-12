import React, { FC } from 'react';
import { Provider } from 'react-redux';
import _store from '@/utils/dva';

import { SnakeFormDesignProps } from '@/pages/index.d';

import FormDesignPage from './FormDesign';

const SnakeFormDesign: FC<SnakeFormDesignProps> = (props) => {
  const {
    dataSource,
    treeData = [],
    height,
    title,
    getWidgetsList = () => {},
    getErrorsList = () => {},
    getRemoveWidgetId,
  } = props;

  return (
    <Provider store={_store}>
      <FormDesignPage
        height={height}
        title={title}
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
