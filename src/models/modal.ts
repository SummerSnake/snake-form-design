import { Reducer } from 'umi';
import widgetsData from '../pages/formDesign/data/widgetsData';
import { Widget, WidgetGroup } from '@/pages/formDesign/index.d';

export interface FormDesignModelState {
  widgets: WidgetGroup[];
  midList: Widget[];
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
    midList: [],
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
        midList: [],
      };
    },
  },
};

export default FormDesignModal;
