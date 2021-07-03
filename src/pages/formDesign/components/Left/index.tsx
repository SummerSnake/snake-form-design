/**
 * @Author: SummerSnake
 * @Description: 左侧控件面板
 */
import React, { FC } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import { WidgetGroup } from '@/pages/formDesign/index.d';
import Widget from './Widget';

interface LeftProps {
  widgetsList: WidgetGroup[];
}

const LeftComponent: FC<LeftProps> = (props) => {
  const { widgetsList = [] } = props;

  return (
    <Droppable droppableId="left" isDropDisabled={true}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          data-is-dragging-over={snapshot.isDraggingOver}
        >
          <div className="leftWrap">
            {Array.isArray(widgetsList) &&
              widgetsList.map((widget) => (
                <React.Fragment key={widget.id}>
                  <h3 className="leftTitle">{widget.title}</h3>

                  <div className="widgetsListWrap">
                    {widget.items.map((item, index) => (
                      <Widget key={item.id} widgetData={item} idx={index} />
                    ))}
                  </div>
                </React.Fragment>
              ))}

            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default React.memo(LeftComponent);
