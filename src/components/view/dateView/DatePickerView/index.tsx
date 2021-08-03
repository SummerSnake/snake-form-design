import React, { FC } from 'react';
import { RightOutlined } from '@ant-design/icons';
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

      <RightOutlined className="datePickerArrow" />
    </div>
  );
};

export default React.memo(DatePickerViewComponent);
