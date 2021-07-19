import React, { FC, ReactElement } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Widget } from '@/pages/index.d';

import CommonView from '../CommonView';

const viewMap = {
  baseInput: (label: string, isRequired: number) => (
    <CommonView title={label} required={isRequired} />
  ),
  baseTextarea: (label: string, isRequired: number) => (
    <CommonView title={label} required={isRequired} />
  ),
  baseRadio: (label: string, isRequired: number) => (
    <CommonView title={label} required={isRequired} />
  ),
  baseCheckbox: (label: string, isRequired: number) => (
    <CommonView title={label} required={isRequired} />
  ),
  baseSelect: (label: string, isRequired: number) => (
    <CommonView title={label} required={isRequired} />
  ),
  baseDatePicker: (label: string, isRequired: number) => (
    <CommonView title={label} required={isRequired} />
  ),
  baseSwitch: (label: string, isRequired: number) => (
    <CommonView title={label} required={isRequired} />
  ),
  baseUpload: (label: string, isRequired: number) => (
    <CommonView title={label} required={isRequired} />
  ),
};

interface ViewMapType {
  [key: string]: (label: string, isRequired: number) => ReactElement;
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
            {(viewMap as ViewMapType)[item.id](item.label, item.options?.isRequired || 0)}
          </div>
        ))}
    </>
  );
};

export default React.memo(GroupViewComponent);
