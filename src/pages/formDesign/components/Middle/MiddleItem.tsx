/**
 * @Author: SummerSnake
 * @Description: 中间布局子组件
 */
import React, { FC } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { Widget } from '@/pages/formDesign/index.d';

interface MiddleItemProps {
  itemData: Widget;
  idx: number;
}
const MiddleItemComponent: FC<MiddleItemProps> = (props) => {
  const { itemData = { id: '', label: '' }, idx = 0 } = props;

  return (
    <Draggable draggableId={itemData.id} index={idx}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <React.Fragment>
            <div
              className="widgetWrap"
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              data-is-dragging={snapshot.isDragging}
              style={provided.draggableProps.style}
            >
              <span>{itemData.label}</span>
            </div>
          </React.Fragment>
        </div>
      )}
    </Draggable>
  );
};

export default MiddleItemComponent;
