import React, { FC } from 'react';
import { RightOutlined } from '@ant-design/icons';
import { WidgetOptions } from '@/pages/index.d';
import './index.less';

interface TimepickerViewProps {
  title: string;
  options: WidgetOptions;
}

const TimepickerViewComponent: FC<TimepickerViewProps> = (props) => {
  const { title, options } = props;

  return (
    <div className="timePickerWrap">
      <div className="timePickerTitle">
        <span>{title}</span>
        <i
          className="requiredStar"
          style={{ visibility: options?.isRequired ? 'visible' : 'hidden' }}
        >
          *
        </i>
      </div>

      <div className="timePickerPlaceholder">{options?.placeholder}</div>

      <RightOutlined className="timePickerArrow" />
    </div>
  );
};

export default React.memo(TimepickerViewComponent);
