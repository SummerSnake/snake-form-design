import React, { FC } from 'react';
import Icons from '@utils/icon';
import { WidgetOptions } from '@/pages/index.d';
import './index.less';

interface MultipleCompanyProps {
  title: string;
  options: WidgetOptions;
}

const MultipleCompanyComponent: FC<MultipleCompanyProps> = (props) => {
  const { title, options } = props;

  return (
    <div className="multipleCompanyWrap">
      <div className="multipleCompanyTitle">
        <span>{title}</span>
        <i
          className="requiredStar"
          style={{ visibility: options?.isRequired ? 'visible' : 'hidden' }}
        >
          *
        </i>
      </div>

      <div className="multipleCompanyPlaceholder">
        {Icons.plusIcon({ fontSize: 15, color: '#108ee9' })}
      </div>
    </div>
  );
};

export default React.memo(MultipleCompanyComponent);
