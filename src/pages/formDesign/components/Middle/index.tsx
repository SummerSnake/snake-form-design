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
      <p className="middleTitle">信息采集表</p>

      <Droppable droppableId="middle" key="middle">
        {(provided, snapshot) => (
          <div
            className="middleContent"
            ref={provided.innerRef}
            data-is-dragging-over={snapshot.isDraggingOver}
            {...provided.droppableProps}
          >
            <div>
              {middleList.map((item, index) => (
                <MiddleItem itemData={item} idx={index} />
              ))}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default React.memo(MiddleComponent);
