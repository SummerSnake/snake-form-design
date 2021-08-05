import React, { FC } from 'react';
import Icons from '@/utils/icon';
import { WidgetOptions } from '@/pages/index.d';
import './index.less';

interface MultipleMemberProps {
  title: string;
  options: WidgetOptions;
}

const MultipleMemberComponent: FC<MultipleMemberProps> = (props) => {
  const { title, options } = props;

  return (
    <div className="multipleMemberWrap">
      <div className="multipleMemberTitle">
        <span>{title}</span>
        <i
          className="requiredStar"
          style={{ visibility: options?.isRequired ? 'visible' : 'hidden' }}
        >
          *
        </i>
      </div>

      <div className="multipleMemberPlaceholder">
        {Icons.plusIcon({ fontSize: 15, color: '#108ee9' })}
      </div>
    </div>
  );
};

export default React.memo(MultipleMemberComponent);
