import React, { FC } from 'react';
import _store from '@/utils/dva';

import { cloneErrorList, deleteActiveItem } from '@/utils/util';
import { Widget } from '@/pages/index.d';

import SingleTxtView from './txtView/SingleTxtView';
import MultipleTxtView from './txtView/MultipleTxtView';
import TitleView from './txtView/TitleView';

import NumberView from './numView/NumberView';
import AmountView from './numView/AmountView';

import RadioView from './optionView/RadioView';
import CheckboxView from './optionView/CheckboxView';
import AttrSingleSelectView from './optionView/AttrSingleSelectView';
import AttrMultipleSelectView from './optionView/AttrMultipleSelectView';

import DatePickerView from './dateView/DatePickerView';
import TimePickerView from './dateView/TimePickerView';

import IdNoView from './specialNumView/IdNoView';
import PhoneView from './specialNumView/PhoneView';

import SingleDepartmentView from './organizationView/SingleDepartmentView';
import MultipleDepartmentView from './organizationView/MultipleDepartmentView';
import SingleMemberView from './organizationView/SingleMemberView';
import MultipleMemberView from './organizationView/MultipleMemberView';
import SingleCompanyView from './organizationView/SingleCompanyView';
import MultipleCompanyView from './organizationView/MultipleCompanyView';
import OrganizeRangeView from './organizationView/OrganizeRangeView';

import UploadView from './otherView/UploadView';
import AppendixView from './otherView/AppendixView';
import AssociateView from './otherView/AssociateView';
import RegionView from './otherView/RegionView';
import LocationView from './otherView/LocationView';
import PositionView from './otherView/PositionView';
import AutographView from './otherView/AutographView';
import CommentView from './otherView/CommentView';

import AddressView from './groupView/AddressView';

interface ViewProps {
  viewInfo: Widget;
  widgetIdx: number;
  isActive: boolean;
}

const ViewComponent: FC<ViewProps> = (props) => {
  const { dispatch } = _store;
  const { viewInfo, widgetIdx, isActive } = props;
  const { label, options } = viewInfo;
  const errorArr = cloneErrorList();

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
    deleteActiveItem(widgetIdx, viewInfo?.formKey);
  };

  // 选中时 border、表单报错时 border
  const widgetWrapClass = !!isActive
    ? 'widgetWrapActive'
    : !!errorArr.includes(viewInfo?.formKey)
    ? 'widgetWrapError'
    : null;

  return (
    <div className={`widgetWrap ${widgetWrapClass}`} onClick={handleActive}>
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
          case 'baseTitle':
            return <TitleView title={label} />;

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
          case 'baseAttrMultipleSelect':
            return <AttrMultipleSelectView title={label} options={options} />;

          case 'baseDatePicker':
            return <DatePickerView title={label} options={options} />;
          case 'baseTimePicker':
            return <TimePickerView title={label} options={options} />;

          case 'baseIdNo':
            return <IdNoView title={label} options={options} />;
          case 'basePhone':
            return <PhoneView title={label} options={options} />;

          case 'baseSingleDepartment':
            return <SingleDepartmentView title={label} options={options} />;
          case 'baseMultipleDepartment':
            return <MultipleDepartmentView title={label} options={options} />;
          case 'baseSingleMember':
            return <SingleMemberView title={label} options={options} />;
          case 'baseMultipleMember':
            return <MultipleMemberView title={label} options={options} />;
          case 'baseSingleCompany':
            return <SingleCompanyView title={label} options={options} />;
          case 'baseMultipleCompany':
            return <MultipleCompanyView title={label} options={options} />;
          case 'baseOrganizeRange':
            return <OrganizeRangeView title={label} options={options} />;

          case 'baseUpload':
            return <UploadView title={label} options={options} />;
          case 'baseAppendix':
            return <AppendixView title={label} options={options} />;
          case 'baseAssociate':
            return <AssociateView title={label} options={options} />;
          case 'baseRegion':
            return <RegionView title={label} options={options} />;
          case 'baseLocation':
            return <LocationView title={label} options={options} />;
          case 'basePosition':
            return <PositionView title={label} options={options} />;
          case 'baseAutograph':
            return <AutographView title={label} options={options} />;
          case 'baseComment':
            return <CommentView title={label} options={options} />;

          case 'baseAddress':
            return <AddressView itemInfo={viewInfo} />;
          default:
            return null;
        }
      })()}
    </div>
  );
};

export default React.memo(ViewComponent);
