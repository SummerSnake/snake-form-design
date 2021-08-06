import React, { FC } from 'react';
import { WidgetOptions } from '@/pages/index.d';
import './index.less';

interface LocationViewProps {
  title: string;
  options: WidgetOptions;
}

const LocationViewComponent: FC<LocationViewProps> = (props) => {
  const { title, options } = props;

  return (
    <div className="locationWrap">
      <div className="locationTitle">
        <span>{title}</span>
        <i
          className="requiredStar"
          style={{ visibility: options?.isRequired ? 'visible' : 'hidden' }}
        >
          *
        </i>
      </div>
    </div>
  );
};

export default React.memo(LocationViewComponent);
