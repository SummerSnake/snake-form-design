import React, { FC, ReactElement } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Widget, WidgetOptions } from '@/pages/index.d';

import SingleTxtView from '../txtView/SingleTxtView';

const viewMap = {
  baseInput: (label: string, options: WidgetOptions) => (
    <SingleTxtView title={label} options={options} />
  ),
  baseTextarea: (label: string, options: WidgetOptions) => (
    <SingleTxtView title={label} options={options} />
  ),
  baseRadio: (label: string, options: WidgetOptions) => (
    <SingleTxtView title={label} options={options} />
  ),
  baseCheckbox: (label: string, options: WidgetOptions) => (
    <SingleTxtView title={label} options={options} />
  ),
  baseDatePicker: (label: string, options: WidgetOptions) => (
    <SingleTxtView title={label} options={options} />
  ),
  baseUpload: (label: string, options: WidgetOptions) => (
    <SingleTxtView title={label} options={options} />
  ),
};

interface ViewMapType {
  [key: string]: (label: string, options: WidgetOptions) => ReactElement;
}
interface GroupViewProps {
  itemInfo: Widget;
}

const GroupViewComponent: FC<GroupViewProps> = (props) => {
  const { itemInfo } = props;
  const { widgetsList } = itemInfo;

  return (
    <>
      {Array.isArray(widgetsList) &&
        widgetsList.map((item: Widget) => (
          <div className="groupViewItem" key={uuidv4()}>
            {(viewMap as ViewMapType)[item.id](item.label, item.options)}
          </div>
        ))}
    </>
  );
};

export default React.memo(GroupViewComponent);
