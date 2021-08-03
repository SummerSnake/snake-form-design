import React, { FC } from 'react';
import { WidgetOptions } from '@/pages/index.d';
import './index.less';

interface NumberViewProps {
  title: string;
  options: WidgetOptions;
}

const NumberViewComponent: FC<NumberViewProps> = (props) => {
  const { title, options } = props;

  return (
    <div className="numberWrap">
      <div className="numberTitle">
        <span>{title}</span>

        <i
          className="requiredStar"
          style={{ visibility: options?.isRequired ? 'visible' : 'hidden' }}
        >
          *
        </i>
      </div>

      <div className="numberPlaceholder">{options?.placeholder}</div>
    </div>
  );
};

export default React.memo(NumberViewComponent);
