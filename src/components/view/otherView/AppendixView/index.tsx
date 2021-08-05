import React, { FC } from 'react';
import { WidgetOptions } from '@/pages/index.d';
import './index.less';

interface AppendixViewProps {
  title: string;
  options: WidgetOptions;
}

const AppendixViewComponent: FC<AppendixViewProps> = (props) => {
  const { title, options } = props;

  return (
    <div className="appendixWrap">
      <div className="appendixTitle">
        <span>{title}</span>
        <i
          className="requiredStar"
          style={{ visibility: options?.isRequired ? 'visible' : 'hidden' }}
        >
          *
        </i>
      </div>

      <div className="appendixPlaceholder">添加附件</div>
    </div>
  );
};

export default React.memo(AppendixViewComponent);
