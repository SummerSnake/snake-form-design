/**
 * @Author: SummerSnake
 * @Description: 单个控件
 */
import React, { FC } from 'react';
import { useDrag, DragSourceMonitor } from 'react-dnd';

import Icons from '@/utils/icon';
import { handleDrop, deletePlaceholder } from '@/utils/util';
import { Widget } from '@/pages/index.d';

interface WidgetProps {
  widgetData: Widget;
}

const WidgetComponent: FC<WidgetProps> = (props) => {
  const { widgetData } = props;

  const [{ opacity }, drager] = useDrag(() => ({
    type: 'snake-form-design',
    item: { ...widgetData },
    end(item: Widget, monitor: DragSourceMonitor) {
      // 放置成功
      if (monitor.didDrop()) {
        handleDrop(monitor.getItem());
      } else {
        // 放置失败(放置到接收区域以外)
        deletePlaceholder();
      }
    },
    collect: (monitor: DragSourceMonitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  }));

  return (
    <div ref={drager} className="widgetWrap" style={{ opacity }}>
      <span>{widgetData.label}</span>
      {Icons[widgetData.icon] && <span className="widgetIcon">{Icons[widgetData.icon]()}</span>}
    </div>
  );
};

export default React.memo(WidgetComponent);
