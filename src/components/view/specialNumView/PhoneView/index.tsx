import React, { FC } from 'react';
import { WidgetOptions } from '@/pages/index.d';
import './index.less';

interface PhoneViewProps {
  title: string;
  options: WidgetOptions;
}

const PhoneViewComponent: FC<PhoneViewProps> = (props) => {
  const { title, options } = props;

  return (
    <div className="phoneWrap">
      <div className="phoneTitle">
        <span>{title}</span>
        <i
          className="requiredStar"
          style={{ visibility: options?.isRequired ? 'visible' : 'hidden' }}
        >
          *
        </i>
      </div>

      <div className="phonePlaceholder">{options?.placeholder}</div>
    </div>
  );
};

export default React.memo(PhoneViewComponent);
