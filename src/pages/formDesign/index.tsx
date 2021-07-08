import React, { FC } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { FormDesignModelState, ConnectProps, Loading, connect } from 'umi';

import Left from './components/Left';
import Middle from './components/Middle';
import Right from './components/Right';
import './index.less';

interface FormDesignProps extends ConnectProps {
  formDesign: FormDesignModelState;
  loading: boolean;
}

const FormDesignPage: FC<FormDesignProps> = (props) => {
  const { formDesign = { widgets: [], midList: [], activeIdx: 0 } } = props;
  const { widgets = [], midList = [], activeIdx = 0 } = formDesign;

  return (
    <div className="formDesignWrap">
      <DndProvider backend={HTML5Backend}>
        <div className="form-design-panel">
          <Left widgetsList={widgets} />
          <Middle middleList={midList} activeIdx={activeIdx} />
          <Right widgetsList={widgets} />
        </div>
      </DndProvider>
    </div>
  );
};

export default connect(
  ({ formDesign, loading }: { formDesign: FormDesignModelState; loading: Loading }) => ({
    formDesign,
    loading: loading.models.formDesign,
  }),
)(FormDesignPage);
