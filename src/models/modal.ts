import { Reducer } from 'umi';
import widgetsData from '../pages/formDesign/data/widgetsData';
import { Widget, Widgets } from '@/pages/formDesign/index.d';

export interface FormDesignModelState {
  widgets: Widgets;
  widgetGroups: Widgets;
  midList: Widget[];
  activeIdx: number;
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
        widgets: { id: 'widgets', title: '控件', items: [] },
        widgetGroups: { id: 'widgetGroups', title: '控件组', items: [] },
        midList: [],
        activeIdx: -1,
      };
    },
  },
};

export default FormDesignModal;
