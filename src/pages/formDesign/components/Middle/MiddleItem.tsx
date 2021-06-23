/**
 * @Author: SummerSnake
 * @Description: 中间布局子组件
 */
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

function MiddleItem(props) {
  const { data = {}, idx = 0 } = props;

  return (
    <Draggable draggableId={data.id} index={idx} direction="vertical">
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {(() => {
            switch (data.dataType) {
              case 0:
                return <div>1</div>;
              case 1:
                return '淘宝';
              case 2:
                return '美团';
              case 3:
                return '爱奇艺';
              case 4:
                return '腾讯';
              default:
                return null;
            }
          })()}
        </div>
      )}
    </Draggable>
  );
}

export default MiddleItem;
