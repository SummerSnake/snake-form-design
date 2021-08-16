import React, { FC } from 'react';
import Icons from '@utils/icon';
import { WidgetOptions } from '@/pages/index.d';
import './index.less';

interface OrganizeRangeProps {
  title: string;
  options: WidgetOptions;
}

const OrganizeRangeComponent: FC<OrganizeRangeProps> = (props) => {
  const { title, options } = props;

  return (
    <div className="organizeRangeWrap">
      <div className="organizeRangeTitle">
        <span>{title}</span>
        <i
          className="requiredStar"
          style={{ visibility: options?.isRequired ? 'visible' : 'hidden' }}
        >
          *
        </i>
      </div>

      <div className="organizeRangePlaceholder">
        {Icons.plusIcon({ fontSize: 15, color: '#108ee9' })}
      </div>
    </div>
  );
};

export default React.memo(OrganizeRangeComponent);
