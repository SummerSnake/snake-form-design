import React, { FC } from 'react';
import Icons from '@/utils/icon';
import { WidgetOptions } from '@/pages/index.d';
import './index.less';

interface CheckboxViewProps {
  title: string;
  options: WidgetOptions;
}

const CheckboxViewComponent: FC<CheckboxViewProps> = (props) => {
  const { title, options } = props;

  return (
    <div className="checkboxWrap">
      <div className="checkboxTitle">
        <span>{title}</span>
        <i
          className="requiredStar"
          style={{ visibility: options?.isRequired ? 'visible' : 'hidden' }}
        >
          *
        </i>
      </div>

      <div className="checkboxPlaceholder">{options?.placeholder}</div>

      <span className="checkboxArrow">{Icons.rightArrowIcon({ color: '#666' })}</span>
    </div>
  );
};

export default React.memo(CheckboxViewComponent);
