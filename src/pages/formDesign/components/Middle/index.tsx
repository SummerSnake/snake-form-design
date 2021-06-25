/**
 * @Author: SummerSnake
 * @Description: 中间布局面板
 */
import React, { FC } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import { Widget } from '@/pages/formDesign/index.d';
import MiddleItem from './MiddleItem';

interface MiddleProps {
  middleList: Widget[];
}

const MiddleComponent: FC<MiddleProps> = (props) => {
  const { middleList = [] } = props;

  return (
    <div className="middleWrap">
      <div className="middleContent">
        <p className="middleTitle">信息采集表</p>

        <Droppable droppableId="middle">
          {(provided, snapshot) => (
            <div
              className="layoutPanel"
              ref={provided.innerRef}
              data-is-dragging-over={snapshot.isDraggingOver}
              {...provided.droppableProps}
            >
              {middleList.map((item, index) => (
                <MiddleItem key={item.id} itemData={item} idx={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
};

export default React.memo(MiddleComponent);
