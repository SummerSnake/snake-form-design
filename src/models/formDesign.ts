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
    widgets: widgetsData.widgets,
    widgetGroups: widgetsData.widgetGroups,
    midList: [],
    activeIdx: -1,
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
        widgets: widgetsData.widgets,
        widgetGroups: widgetsData.widgetGroups,
        midList: [],
        activeIdx: -1,
      };
    },
  },
};

export default FormDesignModal;
