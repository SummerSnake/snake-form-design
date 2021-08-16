import React, { FC } from 'react';
import Icons from '@utils/icon';
import { WidgetOptions } from '@/pages/index.d';
import './index.less';

interface MultipleDepartmentProps {
  title: string;
  options: WidgetOptions;
}

const MultipleDepartmentComponent: FC<MultipleDepartmentProps> = (props) => {
  const { title, options } = props;

  return (
    <div className="multipleDepartmentWrap">
      <div className="multipleDepartmentTitle">
        <span>{title}</span>
        <i
          className="requiredStar"
          style={{ visibility: options?.isRequired ? 'visible' : 'hidden' }}
        >
          *
        </i>
      </div>

      <div className="multipleDepartmentPlaceholder">
        {Icons.plusIcon({ fontSize: 15, color: '#108ee9' })}
      </div>
    </div>
  );
};

export default React.memo(MultipleDepartmentComponent);
