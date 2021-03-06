import React, { FC } from 'react';
import Icons from '@utils/icon';
import { WidgetOptions } from '@/pages/index.d';
import './index.less';

interface AttrSingleSelectViewProps {
  title: string;
  options: WidgetOptions;
}

const AttrSingleSelectViewComponent: FC<AttrSingleSelectViewProps> = (props) => {
  const { title, options } = props;

  return (
    <div className="attrSingleSelectWrap">
      <div className="attrSingleSelectTitle">
        <span>{title}</span>
        <i
          className="requiredStar"
          style={{ visibility: options?.isRequired ? 'visible' : 'hidden' }}
        >
          *
        </i>
      </div>

      <div className="attrSingleSelectPlaceholder">{options?.placeholder}</div>

      <span className="attrSingleSelectArrow">{Icons.rightArrowIcon({ color: '#666' })}</span>
    </div>
  );
};

export default React.memo(AttrSingleSelectViewComponent);
