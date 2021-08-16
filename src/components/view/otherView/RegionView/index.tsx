import React, { FC } from 'react';
import Icons from '@utils/icon';
import { WidgetOptions } from '@/pages/index.d';
import './index.less';

interface RegionViewProps {
  title: string;
  options: WidgetOptions;
}

const RegionViewComponent: FC<RegionViewProps> = (props) => {
  const { title, options } = props;

  return (
    <div className="regionWrap">
      <div className="regionTitle">
        <span>{title}</span>
        <i
          className="requiredStar"
          style={{ visibility: options?.isRequired ? 'visible' : 'hidden' }}
        >
          *
        </i>
      </div>

      <div className="regionPlaceholder">{options?.placeholder}</div>

      <span className="regionArrow">{Icons.rightArrowIcon({ color: '#666' })}</span>
    </div>
  );
};

export default React.memo(RegionViewComponent);
