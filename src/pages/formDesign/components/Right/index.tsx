/**
 * @Author: SummerSnake
 * @Description: 右侧配置面板
 */
import React, { FC } from 'react';

import { WidgetGroup } from '@/pages/formDesign/index.d';

interface RightProps {
  widgetsList: WidgetGroup[];
}

const RightComponent: FC<RightProps> = (props) => {
  const { widgetsList = [] } = props;

  return <div className="rightWrap">1</div>;
};

export default React.memo(RightComponent);
