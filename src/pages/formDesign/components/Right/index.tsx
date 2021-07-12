/**
 * @Author: SummerSnake
 * @Description: 右侧配置面板
 */
import React, { FC } from 'react';

import { Widget } from '@/pages/formDesign/index.d';

import {
  InputConfig,
  TextareaConfig,
  RadioConfig,
  CheckboxConfig,
  SelectConfig,
  DatePickerConfig,
} from '@/components/config';

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
              return <RadioConfig activeIndex={activeIdx} />;
            case 'baseCheckbox':
              return <CheckboxConfig activeIndex={activeIdx} />;
            case 'baseSelect':
              return <SelectConfig activeIndex={activeIdx} />;
            case 'baseDatePicker':
              return <DatePickerConfig activeIndex={activeIdx} />;
            default:
              return null;
          }
      })()}
    </div>
  );
};

export default React.memo(RightComponent);
