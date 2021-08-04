import React, { FC } from 'react';
import { WidgetOptions } from '@/pages/index.d';
import './index.less';

interface IdNoViewProps {
  title: string;
  options: WidgetOptions;
}

const IdNoViewComponent: FC<IdNoViewProps> = (props) => {
  const { title, options } = props;

  return (
    <div className="idNoWrap">
      <div className="idNoTitle">
        <span>{title}</span>
        <i
          className="requiredStar"
          style={{ visibility: options?.isRequired ? 'visible' : 'hidden' }}
        >
          *
        </i>
      </div>

      <div className="idNoPlaceholder">{options?.placeholder}</div>
    </div>
  );
};

export default React.memo(IdNoViewComponent);
