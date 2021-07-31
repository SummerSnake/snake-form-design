import React, { FC } from 'react';
import { WidgetOptions } from '@/pages/index.d';
import './index.less';

interface AmountViewProps {
  title: string;
  options: WidgetOptions;
}

const AmountViewComponent: FC<AmountViewProps> = (props) => {
  const { title, options } = props;

  return (
    <div className="amountWrap">
      <div className="amountTitle">
        <span>{title} </span>
        {options?.currency && (
          <span className="amountUppercase">{options?.currency === 1 ? '(元)' : '(美元)'}</span>
        )}

        <i
          className="requiredStar"
          style={{ visibility: options?.isRequired ? 'visible' : 'hidden' }}
        >
          *
        </i>
      </div>

      <div className="amountPlaceholder">{options?.placeholder}</div>
      {!!options?.isUppercase && <div className="amountUppercase">大写 壹拾贰万捌仟叁佰柒拾肆</div>}
    </div>
  );
};

export default React.memo(AmountViewComponent);
