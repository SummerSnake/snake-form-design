/**
 * @Author: SummerSnake
 * @Description: 中间布局面板
 */
import React, { FC, useState } from 'react';
import { message } from 'antd';
import { useDrop } from 'react-dnd';

import { cloneErrorList } from '@/utils/util';
import { Widget } from '@/pages/index.d';
import Preview from '@/components/preview';
import MiddleItem from './MiddleItem';

interface MiddleProps {
  middleList: Widget[];
  activeIdx: number;
  callback?: () => void;
}

const MiddleComponent: FC<MiddleProps> = (props) => {
  const { middleList = [], activeIdx = 0, callback } = props;

  const [isModalShow, setIsModalShow] = useState<number>(0); // 预览 Modal 开关   0.关闭  1.打开

  /**
   * @desc 接收拖拽组件
   */
  const [, droper] = useDrop({
    accept: 'snake-form-design',
  });

  return (
    <div className="middleWrap">
      <p className="middleTitle">
        <span>信息采集表</span>
        <span
          className="previewBtn"
          onClick={() => {
            const errorArr = cloneErrorList();
            const len = errorArr.length;

            if (len > 0) {
              message.error(`${len}条错误`);
              return false;
            }

            setIsModalShow(1);
            callback && callback();
          }}
        >
          预览
        </span>
      </p>

      <div ref={droper} className="middleContent">
        {middleList.map((item, index) => (
          <MiddleItem key={item.randomCode} itemData={item} idx={index} activeIndex={activeIdx} />
        ))}
      </div>

      <Preview isShow={!!isModalShow} midList={middleList} handleCancel={() => setIsModalShow(0)} />
    </div>
  );
};

export default React.memo(MiddleComponent);
