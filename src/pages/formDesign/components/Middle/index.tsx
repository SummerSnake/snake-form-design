/**
 * @Author: SummerSnake
 * @Description: 中间布局面板
 */
import React, { FC } from 'react';
import { useDrop } from 'react-dnd';

import { Widget } from '@/pages/formDesign/index.d';
import MiddleItem from './MiddleItem';

interface MiddleProps {
  middleList: Widget[];
  activeIdx: number;
}

const MiddleComponent: FC<MiddleProps> = (props) => {
  const { middleList = [], activeIdx = 0 } = props;

  /**
   * @desc 接收拖拽组件
   */
  const [, droper] = useDrop({
    accept: 'snake-form-design',
  });

  return (
    <div className="middleWrap">
      <p className="middleTitle">信息采集表</p>

      <div ref={droper} className="middleContent">
        {middleList.map((item, index) => (
          <MiddleItem key={item.randomCode} itemData={item} idx={index} activeIndex={activeIdx} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(MiddleComponent);
