import React, { FC } from 'react';
import Icons from '@utils/icon';
import { WidgetOptions } from '@/pages/index.d';
import './index.less';

interface SingleCompanyProps {
  title: string;
  options: WidgetOptions;
}

const SingleCompanyComponent: FC<SingleCompanyProps> = (props) => {
  const { title, options } = props;

  return (
    <div className="singleCompanyWrap">
      <div className="singleCompanyTitle">
        <span>{title}</span>
        <i
          className="requiredStar"
          style={{ visibility: options?.isRequired ? 'visible' : 'hidden' }}
        >
          *
        </i>
      </div>

      <div className="singleCompanyPlaceholder">
        {Icons.plusIcon({ fontSize: 15, color: '#108ee9' })}
      </div>
    </div>
  );
};

export default React.memo(SingleCompanyComponent);
