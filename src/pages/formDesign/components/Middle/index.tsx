/**
 * @Author: SummerSnake
 * @Description: 中间布局面板
 */
import React, { FC } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import { WidgetGroup } from '@/pages/formDesign/index.d';
import MiddleItem from './MiddleItem';

interface MiddleProps {
  seedsList: WidgetGroup[];
}

const MiddleComponent: FC<MiddleProps> = (props) => {
  const { seedsList = [] } = props;

  return (
    <div className="middleWrap">
      <Droppable droppableId="middle">
        {(provided, snapshot) => (
          <div
            className="layoutPanel"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default React.memo(MiddleComponent);
