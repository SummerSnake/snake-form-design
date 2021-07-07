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
}

const MiddleComponent: FC<MiddleProps> = (props) => {
  const { middleList = [] } = props;

  const [, droper] = useDrop({
    accept: 'snake-form-design',
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
