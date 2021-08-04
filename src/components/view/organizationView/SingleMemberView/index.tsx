import React, { FC } from 'react';
import Icons from '@/utils/icon';
import './index.less';

interface SingleMemberProps {
  title: string;
  required: number;
}

const SingleMemberComponent: FC<SingleMemberProps> = (props) => {
  const { title, required } = props;

  return (
    <div className="singleMemberWrap">
      <div className="singleMemberTitle">
        <span>{title}</span>
        <i className="requiredStar" style={{ visibility: required ? 'visible' : 'hidden' }}>
          *
        </i>
      </div>

      <div className="singleMemberPlaceholder">
        {Icons.plusIcon({ fontSize: 15, color: '#108ee9' })}
      </div>
    </div>
  );
};

export default React.memo(SingleMemberComponent);
