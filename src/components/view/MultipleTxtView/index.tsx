import React, { FC } from 'react';
import './index.less';

interface MultipleTxtViewProps {
  title: string;
  required: number;
}

const MultipleTxtViewComponent: FC<MultipleTxtViewProps> = (props) => {
  const { title, required } = props;

  return (
    <div className="multipleTxtWrap">
      <div className="multipleTxtTitle">
        <span>{title}</span>
        <i className="requiredStar" style={{ visibility: required ? 'visible' : 'hidden' }}>
          *
        </i>
      </div>

      <div className="multipleTxtPlaceholder">请输入</div>
    </div>
  );
};

export default React.memo(MultipleTxtViewComponent);
