import React, { FC } from 'react';
import Icons from '@/utils/icon';
import { WidgetOptions } from '@/pages/index.d';
import './index.less';

interface DatePickerViewProps {
  title: string;
  options: WidgetOptions;
}

const DatePickerViewComponent: FC<DatePickerViewProps> = (props) => {
  const { title, options } = props;

  return (
    <div className="datePickerWrap">
      <div className="datePickerTitle">
        <span>{title}</span>
        <i
          className="requiredStar"
          style={{ visibility: options?.isRequired ? 'visible' : 'hidden' }}
        >
          *
        </i>
      </div>

      <div className="datePickerPlaceholder">{options?.placeholder}</div>

      <span className="datePickerArrow">{Icons.rightArrowIcon({ color: '#666' })}</span>
    </div>
  );
};

export default React.memo(DatePickerViewComponent);
