import React, { FC } from 'react';
import { Provider } from 'react-redux';
import _store from '@/utils/dva';

import { SnakeFormDesignProps } from '@/pages/index.d';

import FormDesignPage from './FormDesign';

const SnakeFormDesign: FC<SnakeFormDesignProps> = (props) => {
  const { height, dataSource, treeData, getWidgetsList } = props;

  return (
    <Provider store={_store}>
      <FormDesignPage
        height={height}
        dataSource={dataSource}
        treeData={treeData}
        getWidgetsList={getWidgetsList}
      />
    </Provider>
  );
};

export default SnakeFormDesign;
