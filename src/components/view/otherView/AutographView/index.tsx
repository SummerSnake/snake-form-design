import React, { FC } from 'react';
import { WidgetOptions } from '@/pages/index.d';
import './index.less';

interface AutographViewProps {
  title: string;
  options: WidgetOptions;
}

const AutographViewComponent: FC<AutographViewProps> = (props) => {
  const { title, options } = props;

  return (
    <div className="autographWrap">
      <div className="autographTitle">
        <span>{title}</span>
        <i
          className="requiredStar"
          style={{ visibility: options?.isRequired ? 'visible' : 'hidden' }}
        >
          *
        </i>
      </div>

      <div className="autographPlaceholder">{options?.placeholder}</div>
    </div>
  );
};

export default React.memo(AutographViewComponent);
