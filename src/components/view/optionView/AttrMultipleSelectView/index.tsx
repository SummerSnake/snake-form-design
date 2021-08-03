import React, { FC } from 'react';
import { RightOutlined } from '@ant-design/icons';
import { WidgetOptions } from '@/pages/index.d';
import './index.less';

interface AttrMultipleSelectViewProps {
  title: string;
  options: WidgetOptions;
}

const AttrMultipleSelectViewComponent: FC<AttrMultipleSelectViewProps> = (props) => {
  const { title, options } = props;

  return (
    <div className="attrMultipleSelectWrap">
      <div className="attrMultipleSelectTitle">
        <span>{title}</span>
        <i
          className="requiredStar"
          style={{ visibility: options?.isRequired ? 'visible' : 'hidden' }}
        >
          *
        </i>
      </div>

      <div className="attrMultipleSelectPlaceholder">{options?.placeholder}</div>

      <RightOutlined className="attrMultipleSelectArrow" />
    </div>
  );
};

export default React.memo(AttrMultipleSelectViewComponent);
