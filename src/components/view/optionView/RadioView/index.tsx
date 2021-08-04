import React, { FC } from 'react';
import Icons from '@/utils/icon';
import { WidgetOptions } from '@/pages/index.d';
import './index.less';

interface RadioViewProps {
  title: string;
  options: WidgetOptions;
}

const RadioViewComponent: FC<RadioViewProps> = (props) => {
  const { title, options } = props;

  return (
    <div className="radioWrap">
      <div className="radioTitle">
        <span>{title}</span>
        <i
          className="requiredStar"
          style={{ visibility: options?.isRequired ? 'visible' : 'hidden' }}
        >
          *
        </i>
      </div>

      <div className="radioPlaceholder">{options?.placeholder}</div>

      <span className="radioArrow">{Icons.rightArrowIcon({ color: '#666' })}</span>
    </div>
  );
};

export default React.memo(RadioViewComponent);
