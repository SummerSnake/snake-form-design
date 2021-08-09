import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { FormDesignModelState, DataSourceType, TreeDataType, Widget } from '@/pages/index.d';

import '@/styles/iconfont.less';

import Left from './components/Left';
import Middle from './components/Middle';
import Right from './components/Right';
import './index.less';

interface FormDesignProps {
  formDesign: FormDesignModelState;
  dispatch: Function;
  getWidgetsList: (widgetsList: Widget[]) => void;
  dataSource: DataSourceType;
  treeData: TreeDataType[];
  height?: string;
}

const FormDesignPage: FC<FormDesignProps> = (props) => {
  const { formDesign, dispatch, dataSource, treeData, height, getWidgetsList } = props;
  const { widgetsList, widgetsGroupList, midList = [], activeIdx = 0, isDroped = '' } = formDesign;

  useEffect(() => {
    if (dataSource) {
      dispatch({
        type: 'formDesign/save',
        payload: {
          widgets: dataSource?.widgetsList,
          widgetGroups: dataSource?.widgetsGroupList,
        },
      });
    }
  }, []);

  return (
    <div className="formDesignWrap">
      <DndProvider backend={HTML5Backend}>
        <div className="formDesignPanel" style={{ height }}>
          <Left widgetsData={widgetsList} widgetGroupsData={widgetsGroupList} />
          <Middle
            middleList={midList}
            activeIdx={activeIdx}
            callback={() => getWidgetsList(midList)}
          />
          <Right
            treeData={treeData}
            middleList={midList}
            activeIdx={activeIdx}
            isDroped={isDroped}
          />
        </div>
      </DndProvider>
    </div>
  );
};

export default connect(({ formDesign }: { formDesign: FormDesignModelState }) => ({
  formDesign,
}))(FormDesignPage);
