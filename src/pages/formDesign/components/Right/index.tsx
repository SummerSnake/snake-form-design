/**
 * @Author: SummerSnake
 * @Description: 右侧配置面板
 */
import React, { FC } from 'react';

import { Widget } from '@/pages/formDesign/index.d';

import { InputConfig, TextareaConfig, SelectConfig } from '@/components/config';

interface RightProps {
  middleList: Widget[];
  activeIdx: number;
}

const RightComponent: FC<RightProps> = (props) => {
  const { middleList = [], activeIdx } = props;

  return (
    <div className="rightWrap">
      {(() => {
        if (Array.isArray(middleList) && middleList[activeIdx])
          switch (middleList[activeIdx].id) {
            case 'baseInput':
              return <InputConfig activeIndex={activeIdx} />;
            case 'baseTextarea':
              return <TextareaConfig activeIndex={activeIdx} />;
            case 'baseRadio':
              return '文本框';
            case 'baseSelect':
              return <SelectConfig activeIndex={activeIdx} />;
            default:
              return null;
          }
      })()}
    </div>
  );
};

export default React.memo(RightComponent);
