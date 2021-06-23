import { Reducer } from 'umi';
import widgetsData from '../pages/formDesign/data/widgetsData';
import { WidgetGroup } from '@/pages/formDesign/index.d';

export interface FormDesignModelState {
  widgets: WidgetGroup[];
}

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
        widgets: [],
      };
    },
  },
};

export default FormDesignModal;
