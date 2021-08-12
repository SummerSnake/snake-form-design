import React, { FC, ReactElement } from 'react';

import { Widget, WidgetOptions } from '@/pages/index.d';

import DatePickerView from '../../dateView/DatePickerView';
import SingleTxtView from '../../txtView/SingleTxtView';

const viewMap = {
  baseDatePicker: (label: string, options: WidgetOptions) => (
    <DatePickerView title={label} options={options} />
  ),
  baseInput: (label: string, options: WidgetOptions) => (
    <SingleTxtView title={label} options={options} />
  ),
};

interface ViewMapType {
  [key: string]: (label: string, options: WidgetOptions) => ReactElement;
}
interface AddressViewProps {
  itemInfo: Widget;
}

const AddressViewComponent: FC<AddressViewProps> = (props) => {
  const { itemInfo } = props;
  const { formList } = itemInfo;

  return (
    <>
      {Array.isArray(formList) &&
        formList.map((item: Widget) => (
          <div className="groupViewItem" key={item?.formKey}>
            {(viewMap as ViewMapType)[item.id](item.label, item.options)}
          </div>
        ))}
    </>
  );
};

export default React.memo(AddressViewComponent);
