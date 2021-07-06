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
export const reorder = (list: Widget[], startIndex: number, endIndex: number): Widget[] => {
  const cloneList = Array.from(list);
  const [removed] = cloneList.splice(startIndex, 1);
  cloneList.splice(endIndex, 0, removed);

  return cloneList;
};

/**
 * @desc 中间布局面板 => 创建或移动 placeholder
 * @param { Widget } item
 * @return { void }
 */
export const updatePlaceholder = (item?: Widget, hoverIndex?: number): void => {
  const { getState, dispatch } = getDvaApp()._store;
  const { formDesign }: { formDesign: FormDesignModelState } = getState();
  const { midList }: { midList: Widget[] } = formDesign;
  let arr = JSON.parse(JSON.stringify(midList));

  const index = midList.findIndex((item: Widget) => item.randomCode === '-1');
  const placeholder: Widget = {
    id: 'placeholder',
    label: '放这里',
    type: 'placeholder',
    icon: '',
    options: {},
    randomCode: '-1',
  };

  if (index === -1) {
    arr.splice(0, 0, placeholder);
  } else {
    arr.splice(index, 1);
    arr.splice(hoverIndex, 0, placeholder);
  }

  dispatch({
    type: 'formDesign/save',
    payload: {
      midList: [...arr],
    },
  });
};

/**
 * @desc 中间布局面板 => 放置元素
 * @param { Widget } item
 * @return { void }
 */
export const handleDrop = (item?: Widget): void => {
  const { getState, dispatch } = getDvaApp()._store;
  const { formDesign }: { formDesign: FormDesignModelState } = getState();
  const { midList }: { midList: Widget[] } = formDesign;
  let arr = JSON.parse(JSON.stringify(midList));

  const index = midList.findIndex((item: Widget) => item.randomCode === '-1') || 0;

  if (item) {
    arr.splice(index, 1, { ...item, randomCode: uuidv4() });
  }

  dispatch({
    type: 'formDesign/save',
    payload: {
      midList: [...arr],
    },
  });
};
