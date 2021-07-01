import React, { FC } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { FormDesignModelState, ConnectProps, Loading, connect } from 'umi';
import { reorder, copy } from '@/utils/util';

import { Widget } from './index.d';
import Left from './components/Left';
import Middle from './components/Middle';
import Right from './components/Right';
import './index.less';

interface FormDesignProps extends ConnectProps {
  formDesign: FormDesignModelState;
  loading: boolean;
}

const FormDesignPage: FC<FormDesignProps> = (props, dispatch) => {
  const { formDesign = { widgets: [], midList: [] } } = props;
  let { widgets = [], midList = [] } = formDesign;

  /**
   * @desc 拖拽事件
   * @param { object } result
   */
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    debugger;
    // dropped outside the list
    if (!destination) {
      return;
    }

    switch (source.droppableId) {
      // case destination.droppableId:
      //   dispatch({
      //     type: 'formDesign/save',
      //     payload: {
      //       [destination.droppableId]: reorder(
      //         widgets[source.droppableId],
      //         source.index,
      //         destination.index,
      //       ),
      //     },
      //   });
      //   break;
      case 'middle':
        const newWidget = copy(widgets, midList, source, destination);
        // dispatch({
        //   type: 'formDesign/save',
        //   payload: {
        //     [destination.droppableId]: ,
        //   },
        // });
        break;
      // default:
      //   this.setState(
      //     move(
      //       this.state[source.droppableId],
      //       this.state[destination.droppableId],
      //       source,
      //       destination,
      //     ),
      //   );
      //   break;
    }
  };

  return (
    <div className="formDesignWrap">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="form-design-panel">
          <Left widgetsList={widgets} />
          <Middle middleList={midList} />
          <Right widgetsList={widgets} />
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
