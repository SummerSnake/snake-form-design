import { v4 as uuidv4 } from 'uuid';
import { Widget, WidgetGroup } from '@/pages/formDesign/index.d';

/**
 * @desc 排序
 * @param { Widget[] } list
 * @param { number } startIndex
 * @param { number } endIndex
 * @return { Widget[] }
 */
export const reorder = (
  list: Widget[],
  startIndex: number,
  endIndex: number,
): Widget[] => {
  const cloneList = Array.from(list);
  const [removed] = cloneList.splice(startIndex, 1);
  cloneList.splice(endIndex, 0, removed);

  return cloneList;
};

/**
 * @desc 复制
 * @param { WidgetGroup[] } widgets
 * @param { string } draggableId
 * @return { Widget }
 */
export const copy = (widgets: WidgetGroup[], draggableId: string): Widget => {
  let cloneElement = null;

  for (let widgetGroup of widgets) {
    for (let item of widgetGroup.items) {
      if (item.id === draggableId) {
        cloneElement = {
          ...JSON.parse(JSON.stringify(item)),
          randomCode: uuidv4(),
        };
      }
    }
  }

  return cloneElement;
};
