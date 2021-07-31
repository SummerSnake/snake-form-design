import React, { FC } from 'react';
import { WidgetOptions } from '@/pages/index.d';
import './index.less';

interface MultipleTxtViewProps {
  title: string;
  options: WidgetOptions;
}

const MultipleTxtViewComponent: FC<MultipleTxtViewProps> = (props) => {
  const { title, options } = props;

  return (
    <div className="multipleTxtWrap">
      <div className="multipleTxtTitle">
        <span>{title}</span>
        <i
          className="requiredStar"
          style={{ visibility: options?.isRequired ? 'visible' : 'hidden' }}
        >
          *
        </i>
      </div>

      <div className="multipleTxtPlaceholder">{options?.placeholder}</div>
    </div>
  );
};

export default React.memo(MultipleTxtViewComponent);
