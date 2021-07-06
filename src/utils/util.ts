import { v4 as uuidv4 } from 'uuid';
import { getDvaApp, FormDesignModelState } from 'umi';
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

/**
 * @desc 更新中间布局面板列表
 * @param { Widget } item
 * @return { void }
 */
export const updateMidList = (item?: Widget) => {
  const { getState, dispatch } = getDvaApp()._store;
  const { formDesign }: { formDesign: FormDesignModelState } = getState();
  const { midList }: { midList: Widget[] } = formDesign;
  let arr = JSON.parse(JSON.stringify(midList));
  const index = midList.findIndex((item: Widget) => item.id === '-1') || 0;

  if (item) {
    arr.splice(index, 1, { ...item, randomCode: uuidv4() });
  } else {
    arr.splice(index, 1);
  }

  dispatch({
    type: 'formDesign/save',
    payload: {
      midList: [...arr],
    },
  });
};
