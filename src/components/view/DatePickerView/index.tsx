import React, { FC } from 'react';
import { RightOutlined } from '@ant-design/icons';
import './index.less';

interface DatePickerViewProps {
  title: string;
  required: number;
}

const DatePickerViewComponent: FC<DatePickerViewProps> = (props) => {
  const { title, required } = props;

  return (
    <div className="datePickerWrap">
      <div className="datePickerTitle">
        <span>{title}</span>
        <i className="requiredStar" style={{ visibility: required ? 'visible' : 'hidden' }}>
          *
        </i>
      </div>

      <div className="datePickerPlaceholder">请选择</div>

      <RightOutlined className="datePickerArrow" />
    </div>
  );
};

export default React.memo(DatePickerViewComponent);
