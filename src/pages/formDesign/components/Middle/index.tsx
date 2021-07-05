/**
 * @Author: SummerSnake
 * @Description: 中间布局面板
 */
import React, { FC } from 'react';
import { useDrop, DropTargetMonitor } from 'react-dnd';

import { Widget } from '@/pages/formDesign/index.d';
import MiddleItem from './MiddleItem';

interface MiddleProps {
  middleList: Widget[];
}

const MiddleComponent: FC<MiddleProps> = (props) => {
  const { middleList = [] } = props;

  // 第一个参数是 collect 方法返回的对象，第二个参数是一个 ref 值，赋值给 drop 元素
  const [collectProps, droper] = useDrop({
    accept: 'snake-form-design',
    // collect 函数，返回的对象会成为 useDrop 的第一个参数，可以在组件中直接进行使用
    collect: (minoter: DropTargetMonitor) => ({
      isOver: minoter.isOver(),
    }),
  });

  return (
    <div className="middleWrap">
      <p className="middleTitle">信息采集表</p>

      <div ref={droper} className="middleContent">
        {middleList.map((item, index) => (
          <MiddleItem key={item.randomCode} itemData={item} idx={index} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(MiddleComponent);
