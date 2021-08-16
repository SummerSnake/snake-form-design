import React, { FC } from 'react';
import Icons from '@utils/icon';
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

      <span className="attrMultipleSelectArrow">{Icons.rightArrowIcon({ color: '#666' })}</span>
    </div>
  );
};

export default React.memo(AttrMultipleSelectViewComponent);
