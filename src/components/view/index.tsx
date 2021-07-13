import React, { FC } from 'react';

import { ViewDataType } from '@/pages/formDesign/index.d';

import CommonView from './CommonView';

interface ViewProps {
  viewInfo: ViewDataType;
}

const ViewComponent: FC<ViewProps> = (props) => {
  const { viewInfo } = props;

  return (
    <>
      {(() => {
        switch (viewInfo.id) {
          case 'baseInput':
            return <CommonView itemInfo={viewInfo} />;
          case 'baseTextarea':
            return <CommonView itemInfo={viewInfo} />;
          case 'baseRadio':
            return <CommonView itemInfo={viewInfo} />;
          case 'baseCheckbox':
            return <CommonView itemInfo={viewInfo} />;
          case 'baseSelect':
            return <CommonView itemInfo={viewInfo} />;
          case 'baseDatePicker':
            return <CommonView itemInfo={viewInfo} />;
          case 'baseSwitch':
            return <CommonView itemInfo={viewInfo} />;
          case 'baseUpload':
            return <CommonView itemInfo={viewInfo} />;
          default:
            return null;
        }
      })()}
    </>
  );
};

export default React.memo(ViewComponent);
