/**
 * @Author: SummerSnake
 * @Description: 中间布局面板
 */
import React, { FC } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import { WidgetGroup } from '@/pages/formDesign/index.d';
import MiddleItem from './MiddleItem';

interface MiddleProps {
  widgetsList: WidgetGroup[];
}

const MiddleComponent: FC<MiddleProps> = (props) => {
  const { widgetsList = [] } = props;

  return (
    <div className="middleWrap">
      <div className="middleContent">
        <p className="middleTitle">信息采集表</p>

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
    </div>
  );
};

export default React.memo(MiddleComponent);
