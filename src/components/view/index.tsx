import React, { FC } from 'react';
import _store from '@/utils/dva';

import { deleteActiveItem } from '@/utils/util';
import { Widget } from '@/pages/index.d';

import TitleView from './TitleView';
import SingleTxtView from './SingleTxtView';
import MultipleTxtView from './MultipleTxtView';
import NumberView from './NumberView';
import AmountView from './AmountView';
import DatePickerView from './DatePickerView';
import UploadView from './UploadView';
import CommonView from './CommonView';
import GroupView from './GroupView';

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
          case 'baseInput':
            return <SingleTxtView title={label} options={options} />;
          case 'baseTextarea':
            return <MultipleTxtView title={label} options={options} />;
          case 'baseNumber':
            return <NumberView title={label} options={options} />;
          case 'baseAmount':
            return <AmountView title={label} options={options} />;
          case 'baseRadio':
            return <CommonView title={label} required={isRequired} />;
          case 'baseCheckbox':
            return <CommonView title={label} required={isRequired} />;
          case 'baseSelect':
            return <CommonView title={label} required={isRequired} />;
          case 'baseDatePicker':
            return <DatePickerView title={label} required={isRequired} />;
          case 'baseSwitch':
            return <CommonView title={label} required={isRequired} />;
          case 'baseUpload':
            return <UploadView title={label} required={isRequired} />;
          case 'baseTitle':
            return <TitleView title={label} />;
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
