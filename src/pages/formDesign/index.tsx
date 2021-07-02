import React, { FC } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import {
  FormDesignModelState,
  ConnectProps,
  Loading,
  connect,
  useDispatch,
} from 'umi';
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

const FormDesignPage: FC<FormDesignProps> = (props) => {
  const dispatch = useDispatch();

  const { formDesign = { widgets: [], midList: [] } } = props;
  let { widgets = [], midList = [] } = formDesign;

  /**
   * @desc 拖拽事件
   * @param { object } result
   */
  const onDragEnd = (result: DropResult) => {
    const { draggableId, source, destination } = result;
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
      case 'left':
        const newWidget: Widget = copy(widgets, draggableId);
        const midListClone = JSON.parse(JSON.stringify(midList));
        midListClone.splice(destination.index, 0, newWidget);

        dispatch({
          type: 'formDesign/save',
          payload: {
            midList: [...midListClone],
          },
        });
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
