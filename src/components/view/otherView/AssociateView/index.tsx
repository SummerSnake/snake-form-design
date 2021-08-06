import React, { FC } from 'react';
import { WidgetOptions } from '@/pages/index.d';
import './index.less';

interface AssociateViewProps {
  title: string;
  options: WidgetOptions;
}

const AssociateViewComponent: FC<AssociateViewProps> = (props) => {
  const { title, options } = props;

  return (
    <div className="associateWrap">
      <div className="associateTitle">
        <span>{title}</span>
        <i
          className="requiredStar"
          style={{ visibility: options?.isRequired ? 'visible' : 'hidden' }}
        >
          *
        </i>
      </div>

      <div className="associatePlaceholder">添加流程</div>
    </div>
  );
};

export default React.memo(AssociateViewComponent);
