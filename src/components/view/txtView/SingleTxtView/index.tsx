import React, { FC } from 'react';
import { WidgetOptions } from '@/pages/index.d';
import './index.less';

interface SingleTxtViewProps {
  title: string;
  options: WidgetOptions;
}

const SingleTxtViewComponent: FC<SingleTxtViewProps> = (props) => {
  const { title, options } = props;

  return (
    <div className="singleTxtWrap">
      <div className="singleTxtTitle">
        <span>{title}</span>
        <i
          className="requiredStar"
          style={{ visibility: options?.isRequired ? 'visible' : 'hidden' }}
        >
          *
        </i>
      </div>

      <div className="singleTxtPlaceholder">{options?.placeholder}</div>
    </div>
  );
};

export default React.memo(SingleTxtViewComponent);
