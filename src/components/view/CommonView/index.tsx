import React, { FC } from 'react';

interface CommonViewProps {
  title: string;
  required: number;
}

const CommonViewComponent: FC<CommonViewProps> = (props) => {
  const { title, required } = props;

  return (
    <div className="widgetDom">
      <span>{title}</span>
      <i className="requiredStar" style={{ visibility: required ? 'visible' : 'hidden' }}>
        *
      </i>
    </div>
  );
};

export default React.memo(CommonViewComponent);
