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
  const { itemData = { randomCode: '', label: '' }, idx = 0 } = props;

  return (
    <Draggable draggableId={itemData.randomCode} index={idx}>
      {(provided, snapshot) => (
        <div
          className="widgetWrap"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          data-is-dragging={snapshot.isDragging}
          style={provided.draggableProps.style}
        >
          <div className="widgetDom">{itemData.label}</div>
        </div>
      )}
    </Draggable>
  );
};

export default MiddleItemComponent;
