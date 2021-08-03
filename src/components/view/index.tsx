import React, { FC } from 'react';
import _store from '@/utils/dva';

import { deleteActiveItem } from '@/utils/util';
import { Widget } from '@/pages/index.d';

import TitleView from './txtView/TitleView';
import SingleTxtView from './txtView/SingleTxtView';
import MultipleTxtView from './txtView/MultipleTxtView';

import NumberView from './numView/NumberView';
import AmountView from './numView/AmountView';

import RadioView from './optionView/RadioView';
import CheckboxView from './optionView/CheckboxView';
import AttrSingleSelectView from './optionView/AttrSingleSelectView';

import DatePickerView from './dateView/DatePickerView';
import TimePickerView from './dateView/TimePickerView';

import UploadView from './otherView/UploadView';

import GroupView from './groupView';

interface ViewProps {
  viewInfo: Widget;
  widgetIdx: number;
  isActive: boolean;
}

const ViewComponent: FC<ViewProps> = (props) => {
  const { dispatch } = _store;
  const { viewInfo, widgetIdx, isActive } = props;
  const { label, options } = viewInfo;
  const { isRequired = 0 } = options;

  /**
   * @desc 修改当前选择项下标
   */
  const handleActive = () => {
    dispatch({
      type: 'formDesign/save',
      payload: {
        activeIdx: widgetIdx,
      },
    });
  };

  /**
   * @desc 删除当前选择项
   */
  const handleDeleteWidget = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    deleteActiveItem(widgetIdx);
  };

  return (
    <div className={`widgetWrap ${!!isActive && 'widgetWrapActive'}`} onClick={handleActive}>
      <div
        className="deleteBtnWrap"
        style={{ visibility: isActive ? 'visible' : 'hidden' }}
        onClick={handleDeleteWidget}
      >
        <span className="deleteBtnDom">×</span>
      </div>

      {(() => {
        switch (viewInfo.id) {
          case 'baseTitle':
            return <TitleView title={label} />;
          case 'baseInput':
            return <SingleTxtView title={label} options={options} />;
          case 'baseTextarea':
            return <MultipleTxtView title={label} options={options} />;

          case 'baseNumber':
            return <NumberView title={label} options={options} />;
          case 'baseAmount':
            return <AmountView title={label} options={options} />;

          case 'baseRadio':
            return <RadioView title={label} options={options} />;
          case 'baseCheckbox':
            return <CheckboxView title={label} options={options} />;
          case 'baseAttrSingleSelect':
            return <AttrSingleSelectView title={label} options={options} />;

          case 'baseDatePicker':
            return <DatePickerView title={label} options={options} />;
          case 'baseTimePicker':
            return <TimePickerView title={label} options={options} />;

          case 'baseUpload':
            return <UploadView title={label} required={isRequired} />;

          case 'expense':
            return <GroupView itemInfo={viewInfo} />;
          default:
            return null;
        }
      })()}
    </div>
  );
};

export default React.memo(ViewComponent);
