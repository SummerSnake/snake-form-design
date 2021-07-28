import React, { FC } from 'react';
import './index.less';

interface AmountViewProps {
  title: string;
  required: number;
}

const AmountViewComponent: FC<AmountViewProps> = (props) => {
  const { title, required } = props;

  return (
    <div className="amountWrap">
      <div className="amountTitle">
        <span>{title}</span>
        <i className="requiredStar" style={{ visibility: required ? 'visible' : 'hidden' }}>
          *
        </i>
      </div>

      <div className="amountPlaceholder">请输入</div>
    </div>
  );
};

export default React.memo(AmountViewComponent);
