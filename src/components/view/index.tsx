import React, { FC } from 'react';
import _store from '@/utils/dva';

import { deleteActiveItem } from '@/utils/util';
import { Widget } from '@/pages/index.d';

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
            return <CommonView title={label} required={isRequired} />;
          case 'baseTextarea':
            return <CommonView title={label} required={isRequired} />;
          case 'baseRadio':
            return <CommonView title={label} required={isRequired} />;
          case 'baseCheckbox':
            return <CommonView title={label} required={isRequired} />;
          case 'baseSelect':
            return <CommonView title={label} required={isRequired} />;
          case 'baseDatePicker':
            return <CommonView title={label} required={isRequired} />;
          case 'baseSwitch':
            return <CommonView title={label} required={isRequired} />;
          case 'baseUpload':
            return <CommonView title={label} required={isRequired} />;
          case 'nations':
            return <GroupView itemInfo={viewInfo} />;
          default:
            return null;
        }
      })()}
    </div>
  );
};

export default React.memo(ViewComponent);
