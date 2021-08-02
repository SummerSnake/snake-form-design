/**
 * @Author: SummerSnake
 * @Description: 左侧控件面板
 */
import React, { FC } from 'react';
import { Tabs } from 'antd';
import { Widgets } from '@/pages/index.d';
import Widget from './Widget';

interface LeftProps {
  widgetsData: Widgets[];
  widgetGroupsData: Widgets[];
}

const LeftComponent: FC<LeftProps> = (props) => {
  const { widgetsData, widgetGroupsData } = props;

  return (
    <div className="leftWrap">
      <Tabs defaultActiveKey="widgetsList" size="large" centered>
        <Tabs.TabPane tab="控件" key="widgetsList">
          {Array.isArray(widgetsData) &&
            widgetsData.map((category) => (
              <React.Fragment key={category.id}>
                <h3 className="leftTitle">{category.title}</h3>

                <div className="widgetsListWrap">
                  {Array.isArray(category.items) &&
                    category.items.map((item) => <Widget key={item.id} widgetData={item} />)}
                </div>
              </React.Fragment>
            ))}
        </Tabs.TabPane>

        <Tabs.TabPane tab="控件组" key="widgetsGroupList">
          {Array.isArray(widgetGroupsData) &&
            widgetGroupsData.map((category) => (
              <React.Fragment key={category.id}>
                <h3 className="leftTitle">{category.title}</h3>

                <div className="widgetsListWrap">
                  {Array.isArray(category?.items) &&
                    category?.items.map((item) => <Widget key={item.id} widgetData={item} />)}
                </div>
              </React.Fragment>
            ))}
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default React.memo(LeftComponent);
