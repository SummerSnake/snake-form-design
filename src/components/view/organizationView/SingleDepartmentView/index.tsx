import React, { FC } from 'react';
import Icons from '@/utils/icon';
import './index.less';

interface SingleDepartmentProps {
  title: string;
  required: number;
}

const SingleDepartmentComponent: FC<SingleDepartmentProps> = (props) => {
  const { title, required } = props;

  return (
    <div className="singleDepartmentWrap">
      <div className="singleDepartmentTitle">
        <span>{title}</span>
        <i className="requiredStar" style={{ visibility: required ? 'visible' : 'hidden' }}>
          *
        </i>
      </div>

      <div className="singleDepartmentPlaceholder">
        {Icons.plusIcon({ fontSize: 15, color: '#108ee9' })}
      </div>
    </div>
  );
};

export default React.memo(SingleDepartmentComponent);
