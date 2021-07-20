import React, { FC } from 'react';
import { connect } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { FormDesignModelState } from '@/pages/index.d';

import Left from './components/Left';
import Middle from './components/Middle';
import Right from './components/Right';
import './index.less';

interface FormDesignProps {
  formDesign: FormDesignModelState;
  loading: boolean;
}

const FormDesignPage: FC<FormDesignProps> = (props) => {
  const { formDesign } = props;
  const { widgets, widgetGroups, midList = [], activeIdx = 0, isDroped = '' } = formDesign;

  return (
    <div className="formDesignWrap">
      <DndProvider backend={HTML5Backend}>
        <div className="formDesignPanel">
          <Left widgetsData={widgets} widgetGroupsData={widgetGroups} />
          <Middle middleList={midList} activeIdx={activeIdx} />
          <Right middleList={midList} activeIdx={activeIdx} isDroped={isDroped} />
        </div>
      </DndProvider>
    </div>
  );
};

export default connect(
  ({ formDesign, loading }: { formDesign: FormDesignModelState; loading }) => ({
    formDesign,
    loading: loading.models.formDesign,
  })
)(FormDesignPage);
