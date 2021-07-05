import React, { FC } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
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
  // const onDragEnd = (result: DropResult) => {
  //   const { draggableId, source, destination } = result;

  //   // dropped outside the list
  //   if (!destination) {
  //     return false;
  //   }

  //   const midListClone = JSON.parse(JSON.stringify(midList));

  //   switch (source.droppableId) {
  //     case destination.droppableId:
  //       const newMidList = reorder(
  //         midListClone,
  //         source.index,
  //         destination.index,
  //       );

  //       dispatch({
  //         type: 'formDesign/save',
  //         payload: {
  //           midList: [...newMidList],
  //         },
  //       });
  //       break;

  //     case 'left':
  //       const newWidget: Widget = copy(widgets, draggableId);
  //       midListClone.splice(destination.index, 0, newWidget);

  //       dispatch({
  //         type: 'formDesign/save',
  //         payload: {
  //           midList: [...midListClone],
  //         },
  //       });
  //       break;

  //     default:
  //       break;
  //   }
  // };

  return (
    <div className="formDesignWrap">
      <DndProvider backend={HTML5Backend}>
        <div className="form-design-panel">
          <Left widgetsList={widgets} />
          <Middle middleList={midList} />
          <Right widgetsList={widgets} />
        </div>
      </DndProvider>
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
