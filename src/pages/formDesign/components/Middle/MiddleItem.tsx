/**
 * @Author: SummerSnake
 * @Description: 中间布局子组件
 */
import React, { FC } from 'react';
import { useDrag } from 'react-dnd';

import { Widget } from '@/pages/formDesign/index.d';

interface MiddleItemProps {
  itemData: Widget;
  idx: number;
}
const MiddleItemComponent: FC<MiddleItemProps> = (props) => {
  const { itemData = { randomCode: '', label: '' }, idx = 0 } = props;

  const [{ isDragging }, drager] = useDrag(
    () => ({
      type: 'snake-form-design',
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [],
  );

  return (
    <div ref={drager} className="widgetWrap">
      <div className="widgetDom">{itemData.label}</div>
    </div>
  );
};

export default MiddleItemComponent;
