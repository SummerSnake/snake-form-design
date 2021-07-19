/**
 * @Author: SummerSnake
 * @Description: 左侧控件面板
 */
import React, { FC } from 'react';
import { Tabs } from 'antd';
import { Widgets } from '@/pages/index.d';
import Widget from './Widget';

interface LeftProps {
  widgetsData: Widgets;
  widgetGroupsData: Widgets;
}

const LeftComponent: FC<LeftProps> = (props) => {
  const { widgetsData, widgetGroupsData } = props;
  const { items: singleItem } = widgetsData;
  const { items: groupItem } = widgetGroupsData;

  return (
    <div className="leftWrap">
      <Tabs defaultActiveKey={widgetsData.id} size="large" centered>
        <Tabs.TabPane tab="控件" key={widgetsData.id}>
          <h3 className="leftTitle">{widgetsData.title}</h3>

          <div className="widgetsListWrap">
            {singleItem.map((item) => (
              <Widget key={item.id} widgetData={item} />
            ))}
          </div>
        </Tabs.TabPane>

        <Tabs.TabPane tab="控件组" key={widgetGroupsData.id}>
          <h3 className="leftTitle">{widgetGroupsData.title}</h3>

          <div className="widgetsListWrap">
            {groupItem.map((item) => (
              <Widget key={item.id} widgetData={item} />
            ))}
          </div>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default React.memo(LeftComponent);
