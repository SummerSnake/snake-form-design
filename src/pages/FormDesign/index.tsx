import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { cloneErrorsList, cloneMidList } from '@utils/util';
import { FormDesignModelState, SnakeFormDesignProps, Widget } from '@/pages/index.d';

import '@/styles/iconfont.less';

import Left from './components/Left';
import Middle from './components/Middle';
import Right from './components/Right';
import './index.less';

interface FormDesignProps extends SnakeFormDesignProps {
  formDesign: FormDesignModelState;
  dispatch: Function;
}

const FormDesignPage: FC<FormDesignProps> = (props) => {
  const {
    formDesign,
    dispatch,
    dataSource,
    treeData,
    formList,
    height,
    title = '',
    getWidgetsList,
    getErrorsList,
    getRemoveWidgetId,
  } = props;

  const {
    widgetsList,
    widgetsGroupList,
    midList = [],
    errorsList = [],
    activeIdx = 0,
    isDroped = '',
  } = formDesign;

  /**
   * @desc midList 更新 返回 midList
   */
  useEffect(() => {
    const placeholderIndex = midList.findIndex((item: Widget) => item.formKey === '-1');

    // 拖拽过程中阻止执行
    if (midList && placeholderIndex === -1) {
      const widgetsList = cloneMidList();
      getWidgetsList(widgetsList);
    }
  }, [midList]);

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
   * @desc 删除控件返回控件 id
   */
  useEffect(() => {
    if (typeof getRemoveWidgetId === 'function') {
      dispatch({
        type: 'formDesign/save',
        payload: {
          getRemoveWidgetId,
        },
      });
    }
  }, [getRemoveWidgetId]);

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
    if (Array.isArray(formList)) {
      dispatch({
        type: 'formDesign/save',
        payload: {
          midList: formList,
        },
      });
    }
  }, []);

  return (
    <div className="formDesignWrap">
      <DndProvider backend={HTML5Backend}>
        <div className="formDesignPanel" style={{ height }}>
          <Left widgetsData={widgetsList} widgetGroupsData={widgetsGroupList} />
          <Middle middleList={midList} activeIdx={activeIdx} title={title} />
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
