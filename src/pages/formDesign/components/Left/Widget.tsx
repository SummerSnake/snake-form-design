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

interface SeedProps {
  widgetData: Widget;
  idx: number;
}

const Icons = {
  sketch: <SketchOutlined />,
  slack: <SlackOutlined />,
};

const SeedComponent: FC<SeedProps> = (props) => {
  const { widgetData, idx = 0 } = props;

  return (
    <Draggable draggableId={widgetData.id} index={idx}>
      {(provided, snapshot) => (
        <div
          className="widgetWrap"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <span>{widgetData.label}</span>
          <span className="widgetIcon">
            {(Icons as ICONSTYPE)[widgetData.icon]}
          </span>
        </div>
      )}
    </Draggable>
  );
};

export default React.memo(SeedComponent);
