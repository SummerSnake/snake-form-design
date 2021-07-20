/**
 * @Author: SummerSnake
 * @Description: 右侧配置面板
 */
import React, { FC, useState, useEffect } from 'react';

import { cloneMidList } from '@/utils/util';
import { Widget } from '@/pages/index.d';

import {
  InputConfig,
  TextareaConfig,
  RadioConfig,
  CheckboxConfig,
  SelectConfig,
  DatePickerConfig,
  SwitchConfig,
  UploadConfig,
} from '@/components/config';

interface RightProps {
  middleList: Widget[];
  activeIdx: number;
}

const RightComponent: FC<RightProps> = (props) => {
  const { middleList = [], activeIdx } = props;
  const [midList, setMidList] = useState<Widget[]>(middleList);

  // 更新右侧配置面板
  useEffect(() => {
    const midArr = cloneMidList();
    setMidList(midArr);
  }, [activeIdx]);

  return (
    <div className="rightWrap">
      {(() => {
        if (Array.isArray(midList) && midList[activeIdx])
          switch (midList[activeIdx].id) {
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
            case 'baseSwitch':
              return <SwitchConfig activeIndex={activeIdx} />;
            case 'baseUpload':
              return <UploadConfig activeIndex={activeIdx} />;
            default:
              return null;
          }
      })()}
    </div>
  );
};

export default React.memo(RightComponent);