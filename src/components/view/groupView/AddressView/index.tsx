import React, { FC, ReactElement } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Widget, WidgetOptions } from '@/pages/index.d';

import RegionView from '../../otherView/RegionView';
import MultipleTxtView from '../../txtView/MultipleTxtView';

const viewMap = {
  baseRegion: (label: string, options: WidgetOptions) => (
    <RegionView title={label} options={options} />
  ),
  baseTextarea: (label: string, options: WidgetOptions) => (
    <MultipleTxtView title={label} options={options} />
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
          <div className="groupViewItem" key={uuidv4()}>
            {(viewMap as ViewMapType)[item.id](item.label, item.options)}
          </div>
        ))}
    </>
  );
};

export default React.memo(AddressViewComponent);
