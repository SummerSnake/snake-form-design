/**
 * @Author: SummerSnake
 * @Description: 右侧配置面板
 */
import React, { FC, useState, useEffect } from 'react';

import { cloneMidList } from '@/utils/util';
import { Widget } from '@/pages/index.d';

import {
  TitleConfig,
  SingleTxtConfig,
  MultipleTxtConfig,
  NumberConfig,
  AmountConfig,
  RadioConfig,
  CheckboxConfig,
  AttrSingleSelectConfig,
  AttrMultipleSelectConfig,
  DatePickerConfig,
  TimePickerConfig,
  IdNoConfig,
  PhoneConfig,
  SingleDepartmentConfig,
  MultipleDepartmentConfig,
  SingleMemberConfig,
  MultipleMemberConfig,
  OrganizeRangeConfig,
  UploadConfig,
  CommentConfig,
} from '@/components/config';

interface RightProps {
  middleList: Widget[];
  activeIdx: number;
  isDroped: string;
}

const RightComponent: FC<RightProps> = (props) => {
  const { middleList = [], activeIdx, isDroped } = props;
  const [midList, setMidList] = useState<Widget[]>(middleList);

  // 更新右侧配置面板
  useEffect(() => {
    const midArr = cloneMidList();
    setMidList(midArr);
  }, [activeIdx, isDroped]);

  return (
    <div className="rightWrap">
      {(() => {
        if (Array.isArray(midList) && midList[activeIdx])
          switch (midList[activeIdx].id) {
            case 'baseTitle':
              return <TitleConfig activeIndex={activeIdx} />;
            case 'baseInput':
              return <SingleTxtConfig activeIndex={activeIdx} />;
            case 'baseTextarea':
              return <MultipleTxtConfig activeIndex={activeIdx} />;

            case 'baseNumber':
              return <NumberConfig activeIndex={activeIdx} />;
            case 'baseAmount':
              return <AmountConfig activeIndex={activeIdx} />;

            case 'baseRadio':
              return <RadioConfig activeIndex={activeIdx} />;
            case 'baseCheckbox':
              return <CheckboxConfig activeIndex={activeIdx} />;
            case 'baseAttrSingleSelect':
              return <AttrSingleSelectConfig activeIndex={activeIdx} />;
            case 'baseAttrMultipleSelect':
              return <AttrMultipleSelectConfig activeIndex={activeIdx} />;

            case 'baseDatePicker':
              return <DatePickerConfig activeIndex={activeIdx} />;
            case 'baseTimePicker':
              return <TimePickerConfig activeIndex={activeIdx} />;

            case 'baseIdNo':
              return <IdNoConfig activeIndex={activeIdx} />;
            case 'basePhone':
              return <PhoneConfig activeIndex={activeIdx} />;

            case 'baseSingleDepartment':
              return <SingleDepartmentConfig activeIndex={activeIdx} />;
            case 'baseMultipleDepartment':
              return <MultipleDepartmentConfig activeIndex={activeIdx} />;
            case 'baseSingleMember':
              return <SingleMemberConfig activeIndex={activeIdx} />;
            case 'baseMultipleMember':
              return <MultipleMemberConfig activeIndex={activeIdx} />;
            case 'baseOrganizeRange':
              return <OrganizeRangeConfig activeIndex={activeIdx} />;

            case 'baseUpload':
              return <UploadConfig activeIndex={activeIdx} />;
            case 'baseComment':
              return <CommentConfig activeIndex={activeIdx} />;
            default:
              return null;
          }
      })()}
    </div>
  );
};

export default React.memo(RightComponent);
