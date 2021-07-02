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
    <Droppable droppableId="middle" key="middle">
      {(provided, snapshot) => (
        <div
          className="middleWrap"
          ref={provided.innerRef}
          data-is-dragging-over={snapshot.isDraggingOver}
          {...provided.droppableProps}
        >
          <div className="middleContent">
            <p className="middleTitle">信息采集表</p>

            <div>
              {middleList.map((item, index) => (
                <MiddleItem itemData={item} idx={index} />
              ))}
              {provided.placeholder}
            </div>
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default React.memo(MiddleComponent);
