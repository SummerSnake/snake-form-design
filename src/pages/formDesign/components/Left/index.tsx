/**
 * @Author: SummerSnake
 * @Description: 左侧控件面板
 */
import React, { FC } from 'react';

import { WidgetGroup } from '@/pages/formDesign/index.d';
import Widget from './Widget';

interface LeftProps {
  widgetsList: WidgetGroup[];
}

const LeftComponent: FC<LeftProps> = (props) => {
  const { widgetsList = [] } = props;

  return (
    <div className="leftWrap">
      {Array.isArray(widgetsList) &&
        widgetsList.map((widget) => (
          <React.Fragment key={widget.id}>
            <h3 className="leftTitle">{widget.title}</h3>

            <div className="widgetsListWrap">
              {widget.items.map((item) => (
                <Widget key={item.id} widgetData={item} />
              ))}
            </div>
          </React.Fragment>
        ))}
    </div>
  );
};

export default React.memo(LeftComponent);
