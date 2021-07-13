import React, { FC } from 'react';
import { getDvaApp } from 'umi';

import { deleteActiveItem } from '@/utils/util';
import { ViewDataType } from '@/pages/formDesign/index.d';

interface CommonViewProps {
  itemInfo: ViewDataType;
}

const CommonViewComponent: FC<CommonViewProps> = (props) => {
  const { dispatch } = getDvaApp()._store;
  const { itemInfo } = props;
  const { widgetIdx, isActive } = itemInfo;

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
    <div className={`widgetDom ${!!isActive && 'widgetDomActive'}`} onClick={handleActive}>
      <div
        className="deleteBtnWrap"
        style={{ visibility: isActive ? 'visible' : 'hidden' }}
        onClick={handleDeleteWidget}
      >
        <span className="deleteBtnDom">×</span>
      </div>

      <span>{itemInfo.label}</span>
      <i
        className="requiredStar"
        style={{ visibility: !!itemInfo?.options?.isRequired ? 'visible' : 'hidden' }}
      >
        *
      </i>
    </div>
  );
};

export default React.memo(CommonViewComponent);
