import { Reducer } from 'redux';

import { FormDesignModelState } from '@/pages/index.d';
import widgetsData from './widgetsData';

export interface FormDesignModalType {
  namespace: 'formDesign';
  state: FormDesignModelState;
  reducers: {
    save: Reducer<FormDesignModelState>;
    reset: Reducer<FormDesignModelState>;
  };
}

const FormDesignModal: FormDesignModalType = {
  namespace: 'formDesign',
  state: {
    widgetsList: widgetsData.widgetsList,
    widgetsGroupList: widgetsData.widgetsGroupList,
    midList: [],
    errorsList: [],
    activeIdx: -1,
    isDroped: '',
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    reset() {
      return {
        widgetsList: widgetsData.widgetsList,
        widgetsGroupList: widgetsData.widgetsGroupList,
        midList: [],
        errorsList: [],
        activeIdx: -1,
        isDroped: '',
      };
    },
  },
};

export default FormDesignModal;
