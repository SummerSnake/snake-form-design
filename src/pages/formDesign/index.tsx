import React, { FC } from 'react';
import uuid from 'uuidv4';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { FormDesignModelState, ConnectProps, Loading, connect } from 'umi';
import { reorder } from '@/utils/util';

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
    const { destination, source } = result;
    // dropped outside the list
    if (!destination) {
      return;
    }

    // switch (source.droppableId) {
    //   case destination.droppableId:
    //     dispatch({
    //       type: 'formDesign/save',
    //       payload: {
    //         [destination.droppableId]: reorder(
    //           widgets[source.droppableId],
    //           source.index,
    //           destination.index,
    //         ),
    //       },
    //     });
    //     break;
    //   case 'ITEMS':
    //     this.setState({
    //       [destination.droppableId]: copy(
    //         ITEMS,
    //         this.state[destination.droppableId],
    //         source,
    //         destination,
    //       ),
    //     });
    //     break;
    //   default:
    //     this.setState(
    //       move(
    //         this.state[source.droppableId],
    //         this.state[destination.droppableId],
    //         source,
    //         destination,
    //       ),
    //     );
    //     break;
    // }
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
