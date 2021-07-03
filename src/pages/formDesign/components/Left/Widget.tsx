/**
 * @Author: SummerSnake
 * @Description: 单个控件
 */
import React, { FC, ReactElement } from 'react';
import { SketchOutlined, SlackOutlined } from '@ant-design/icons';
import { Draggable } from 'react-beautiful-dnd';

import { Widget } from '@/pages/formDesign/index.d';

interface ICONSTYPE {
  [key: string]: ReactElement;
}

interface WidgetProps {
  widgetData: Widget;
  idx: number;
}

const Icons = {
  sketch: <SketchOutlined />,
  slack: <SlackOutlined />,
};

const WidgetComponent: FC<WidgetProps> = (props) => {
  const { widgetData, idx } = props;

  return (
    <Draggable draggableId={widgetData.id} index={idx}>
      {(provided, snapshot) => (
        <React.Fragment>
          <div
            className="widgetWrap"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            data-is-dragging={snapshot.isDragging}
            style={provided.draggableProps.style}
          >
            <span>{widgetData.label}</span>
            <span className="widgetIcon">
              {(Icons as ICONSTYPE)[widgetData.icon]}
            </span>
          </div>

          {snapshot.isDragging && (
            <div className="widgetWrap">
              <span>{widgetData.label}</span>
              <span className="widgetIcon">
                {(Icons as ICONSTYPE)[widgetData.icon]}
              </span>
            </div>
          )}
        </React.Fragment>
      )}
    </Draggable>
  );
};

export default React.memo(WidgetComponent);
