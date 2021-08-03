import React, { FC } from 'react';
import './index.less';

interface TitleViewProps {
  title: string;
}

const TitleViewComponent: FC<TitleViewProps> = (props) => {
  const { title } = props;

  return <div className="titleWrap">{title}</div>;
};

export default React.memo(TitleViewComponent);
