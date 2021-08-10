import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { cloneErrorsList, cloneMidList } from '@/utils/util';
import { FormDesignModelState, DataSourceType, TreeDataType, Widget } from '@/pages/index.d';

import '@/styles/iconfont.less';

import Left from './components/Left';
import Middle from './components/Middle';
import Right from './components/Right';
import './index.less';

interface FormDesignProps {
  formDesign: FormDesignModelState;
  dispatch: Function;
  dataSource: DataSourceType;
  treeData: TreeDataType[];
  getWidgetsList: (widgetsList: Widget[]) => void;
  getErrorsList: (errorsList: string[]) => void;
  height?: string;
}

const FormDesignPage: FC<FormDesignProps> = (props) => {
  const { formDesign, dispatch, dataSource, treeData, height, getWidgetsList, getErrorsList } =
    props;
  const {
    widgetsList,
    widgetsGroupList,
    midList = [],
    errorsList = [],
    activeIdx = 0,
    isDroped = '',
  } = formDesign;

  /**
   * @desc 放置成功 返回控件列表
   */
  useEffect(() => {
    if (isDroped) {
      const widgetsList = cloneMidList();
      getWidgetsList(widgetsList);
    }
  }, [isDroped]);

  /**
   * @desc 错误信息列表更新 返回错误信息列表
   */
  useEffect(() => {
    if (errorsList) {
      const errorsList = cloneErrorsList();
      getErrorsList(errorsList);
    }
  }, [errorsList]);

  /**
   * @desc 设置左侧控件列表数据
   */
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
          <Middle middleList={midList} activeIdx={activeIdx} />
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
