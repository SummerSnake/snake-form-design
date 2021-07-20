import React, { FC } from 'react';
import { Provider } from 'react-redux';
import _store from '@/utils/dva';

import FormDesignPage from './FormDesign';

const SnakeFormDesign: FC = () => {
  return (
    <Provider store={_store}>
      <FormDesignPage />
    </Provider>
  );
};

export default SnakeFormDesign;
