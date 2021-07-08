/**
 * @Author: SummerSnake
 * @Description: 中间布局列表控件
 */
import React, { FC, useRef } from 'react';
import { useDrag, useDrop, DragSourceMonitor, DropTargetMonitor, XYCoord } from 'react-dnd';
import { updatePlaceholder, deletePlaceholder, reOrder } from '@/utils/util';
import { Widget } from '@/pages/formDesign/index.d';

interface MiddleItemProps {
  itemData: Widget;
  idx: number;
}
const MiddleItemComponent: FC<MiddleItemProps> = (props) => {
  const { itemData, idx = 0 } = props;

  const widgetRef = useRef<HTMLDivElement>(null);

  // 拖拽
  const [{ isDragging }, drager] = useDrag(() => ({
    type: 'snake-form-design',
    item: { itemData, idx },
    end(item: MiddleItemProps, monitor: DragSourceMonitor) {
      if (monitor.didDrop()) {
        // 放置成功
        const { itemData } = item;

        // 排序
        if (itemData?.randomCode) {
          reOrder(itemData);
        }
      } else {
        // 放置失败(放置到接收区域以外)
        deletePlaceholder();
      }
    },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  // 接收拖拽组件
  const [, droper] = useDrop({
    accept: 'snake-form-design',
    hover(item: MiddleItemProps, monitor: DropTargetMonitor) {
      if (!widgetRef.current) {
        return false;
      }
      const dragIndex = item.idx;
      const hoverIndex = idx;

      // 拖拽元素下标与鼠标悬浮元素下标一致时，不进行操作
      if (dragIndex === hoverIndex) {
        return false;
      }

      // 确定屏幕上矩形范围
      const hoverBoundingRect = widgetRef.current!.getBoundingClientRect();

      // 获取中点垂直坐标
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // 确定鼠标位置
      const clientOffset = monitor.getClientOffset();

      // 获取距顶部距离
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      /**
       * 只在鼠标越过一半物品高度时执行移动。
       *
       * 当向下拖动时，仅当光标低于50%时才移动。
       * 当向上拖动时，仅当光标在50%以上时才移动。
       *
       * 可以防止鼠标位于元素一半高度时元素抖动的状况
       */

      // 向下拖动
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return false;
      }

      // 向上拖动
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return false;
      }

      // 创建或移动 placeholder
      updatePlaceholder(hoverIndex || 0);

      /**
       * 如果拖拽的组件为 Left，则 dragIndex 为 undefined，此时不对 item 的 index 进行修改
       * 如果拖拽的组件为 Middle，则将 hoverIndex 赋值给 item 的 index 属性
       */
      if (typeof item.idx !== 'undefined') {
        item.idx = hoverIndex;
      }
    },
  });

  /**
   * 使用 drag 和 drop 对 ref 进行包裹，则组件既可以进行拖拽也可以接收拖拽组件
   */
  drager(droper(widgetRef));

  return (
    <div ref={widgetRef} className="widgetWrap">
      {itemData.randomCode !== '-1' && <div className="widgetDom">{itemData.label}</div>}

      {itemData.randomCode === '-1' && <div className="placeholderDom">{itemData.label}</div>}
    </div>
  );
};

export default React.memo(MiddleItemComponent);
