import React, { FC } from 'react';
import { RightOutlined } from '@ant-design/icons';
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

      <RightOutlined className="radioArrow" />
    </div>
  );
};

export default React.memo(RadioViewComponent);
