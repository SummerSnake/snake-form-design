/**
 * @Author: SummerSnake
 * @Description: 中间布局面板
 */
import React, { FC, useState } from 'react';
import { useDrop } from 'react-dnd';

import { Widget } from '@/pages/index.d';
import MiddleItem from './MiddleItem';

interface MiddleProps {
  middleList: Widget[];
  activeIdx: number;
  title: string;
}

const MiddleComponent: FC<MiddleProps> = (props) => {
  const { middleList = [], activeIdx = 0, title } = props;

  const [isModalShow, setIsModalShow] = useState<number>(0); // 禁用 Modal 开关   0.关闭  1.打开

  /**
   * @desc 接收拖拽组件
   */
  const [, droper] = useDrop({
    accept: 'snake-form-design',
  });

  return (
    <div className="middleWrap">
      <p className="middleTitle">
        <span>{title || '未命名'}</span>
      </p>

      <div ref={droper} className="middleContent">
        {middleList.map((item, index) => (
          <MiddleItem key={item.formKey} itemData={item} idx={index} activeIndex={activeIdx} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(MiddleComponent);
