import { uuid } from 'uuidv4';
import { Widget, WidgetGroup } from '@/pages/formDesign/index.d';

interface resultType {
  [key: string]: number;
}

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
          randomCode: uuid(),
        };
      }
    }
  }

  return cloneElement;
};
