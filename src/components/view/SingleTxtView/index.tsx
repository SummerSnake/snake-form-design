import React, { FC } from 'react';
import './index.less';

interface SingleTxtViewProps {
  title: string;
  required: number;
}

const SingleTxtViewComponent: FC<SingleTxtViewProps> = (props) => {
  const { title, required } = props;

  return (
    <div className="singleTxtWrap">
      <div className="singleTxtTitle">
        <span>{title}</span>
        <i className="requiredStar" style={{ visibility: required ? 'visible' : 'hidden' }}>
          *
        </i>
      </div>

      <div className="singleTxtPlaceholder">请输入</div>
    </div>
  );
};

export default React.memo(SingleTxtViewComponent);
