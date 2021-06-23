import React, { FC } from 'react';
import Lodash from 'lodash';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { FormDesignModelState, ConnectProps, Loading, connect } from 'umi';

import { Widget } from './index.d';
import Left from './components/Left';
import './index.less';

interface FormDesignProps extends ConnectProps {
  formDesign: FormDesignModelState;
  loading: boolean;
}

const FormDesignPage: FC<FormDesignProps> = (props, dispatch) => {
  const { formDesign = { widgets: [] } } = props;
  let { widgets = [] } = formDesign;

  /**
   * @desc 随机 id
   */
  const getKey = () => {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };

  /**
   * @desc 拖拽事件
   * @param { object } result
   */
  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    console.warn(
      'destination, source, draggableId',
      destination,
      source,
      draggableId,
    );

    // let start: Widget = {
    //   id: '',
    //   label: '',
    //   type: '',
    //   options: {},
    //   randomCode: '',
    // };

    // if (source.droppableId.indexOf('widgets') !== -1) {
    //   start = Lodash.cloneDeep(widgets[0].items[source.index]);
    // }
    // if (source.droppableId.indexOf('content') !== -1) {
    //   start = Lodash.cloneDeep(widgets[0].items[source.index]);
    // }

    // if (!destination) {
    //   // 表单原先为空
    //   start.id = `content-${getKey()}---${widgets.length}`;
    //   start.randomCode = `code_${getKey()}${getKey()}`;
    //   widgets.splice(0, 0, start);
    // } else {
    //   if (destination.droppableId.indexOf('widgets') !== -1) return; // 任何地方拖放到菜单，不处理

    //   const finish = Lodash.cloneDeep(widgets[destination.index]); // 结束地必是表单面板
    //   const startIndex = source.index;
    //   const finishIndex = destination.index;
    //   console.warn('finishIndex', finishIndex);

    //   if (finish && start.id === finish.id) return; // 无拖动

    //   if (source.droppableId.indexOf('content') !== -1) {
    //     // 起点在表单面板
    //     console.warn('start', start);
    //     widgets.splice(startIndex, 1);
    //     widgets.splice(finishIndex, 0, start);
    //   } else if (source.droppableId.indexOf('widgets') !== -1) {
    //     // 起点在菜单
    //     start.id = `content-${getKey()}---${widgets.length}`;
    //     start.code = `code_${getKey()}${getKey()}`;
    //     delete start.icon;
    //     widgets.splice(finishIndex, 0, start);
    //   }
    // }
    // console.warn('最新content', widgets);
    // dispatch({
    //   type: 'formDesign/save',
    //   payload: {
    //     widgets,
    //     activeId: start.id,
    //   },
    // });
  };

  return (
    <div className="formDesignWrap">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="form-design-panel">
          <Left widgetsList={widgets} />
          {/* <Middle /> */}
          {/* <Right callback={updateConfig} /> */}
        </div>
      </DragDropContext>
    </div>
  );
};

export default connect(
  ({
    formDesign,
    loading,
  }: {
    formDesign: FormDesignModelState;
    loading: Loading;
  }) => ({
    formDesign,
    loading: loading.models.formDesign,
  }),
)(FormDesignPage);
