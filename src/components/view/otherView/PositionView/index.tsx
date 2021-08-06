import React, { FC } from 'react';
import { WidgetOptions } from '@/pages/index.d';
import './index.less';

interface PositionViewProps {
  title: string;
  options: WidgetOptions;
}

const PositionViewComponent: FC<PositionViewProps> = (props) => {
  const { title, options } = props;

  return (
    <div className="positionWrap">
      <div className="positionTitle">
        <div className="titleLeft">
          <span>{title}</span>
          <i
            className="requiredStar"
            style={{ visibility: options?.isRequired ? 'visible' : 'hidden' }}
          >
            *
          </i>
        </div>

        <div className="titleRight">更改定位</div>
      </div>
    </div>
  );
};

export default React.memo(PositionViewComponent);
