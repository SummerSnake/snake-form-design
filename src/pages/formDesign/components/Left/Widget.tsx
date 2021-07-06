/**
 * @Author: SummerSnake
 * @Description: 单个控件
 */
import React, { FC, ReactElement } from 'react';
import { SketchOutlined, SlackOutlined } from '@ant-design/icons';
import { useDrag, DragSourceMonitor } from 'react-dnd';
import { handleDrop } from '@/utils/util';

import { Widget } from '@/pages/formDesign/index.d';

interface ICONSTYPE {
  [key: string]: ReactElement;
}

interface WidgetProps {
  widgetData: Widget;
}

const Icons = {
  sketch: <SketchOutlined />,
  slack: <SlackOutlined />,
};

const WidgetComponent: FC<WidgetProps> = (props) => {
  const { widgetData } = props;

  const [{ opacity }, drager] = useDrag(() => ({
    type: 'snake-form-design',
    item: { ...widgetData },
    end(item: Widget, monitor: DragSourceMonitor) {
      if (monitor.didDrop()) {
        handleDrop(monitor.getItem());
      }
    },
    collect: (monitor: DragSourceMonitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  }));

  return (
    <div ref={drager} className="widgetWrap">
      <span>{widgetData.label}</span>
      <span className="widgetIcon">{(Icons as ICONSTYPE)[widgetData.icon]}</span>
    </div>
  );
};

export default React.memo(WidgetComponent);
