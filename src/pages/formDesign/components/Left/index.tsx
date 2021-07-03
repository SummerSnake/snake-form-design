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
    <div className="leftWrap">
      {Array.isArray(widgetsList) &&
        widgetsList.map((widget) => (
          <React.Fragment key={widget.id}>
            <h3 className="leftTitle">{widget.title}</h3>

            <Droppable droppableId="left" isDropDisabled={true}>
              {(provided, snapshot) => (
                <div
                  className="widgetsListWrap"
                  ref={provided.innerRef}
                  data-is-dragging-over={snapshot.isDraggingOver}
                >
                  {widget.items.map((item, index) => (
                    <Widget key={item.id} widgetData={item} idx={index} />
                  ))}

                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </React.Fragment>
        ))}
    </div>
  );
};

export default React.memo(LeftComponent);
