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

/**
 * @desc 中间布局面板 => 创建或移动 placeholder
 * @param { Widget } item
 * @param { number } hoverIndex
 * @param { number } dragIndex
 * @return { void }
 */
export const updatePlaceholder = (item: Widget, hoverIndex: number, dragIndex?: number): void => {
  const { getState, dispatch } = getDvaApp()._store;
  const { formDesign }: { formDesign: FormDesignModelState } = getState();
  const { midList }: { midList: Widget[] } = formDesign;
  let arr = JSON.parse(JSON.stringify(midList));

  const index = arr.findIndex((item: Widget) => item.randomCode === '-1');
  const placeholder: Widget = {
    id: 'placeholder',
    label: '放这里',
    type: 'placeholder',
    icon: '',
    options: {},
    randomCode: '-1',
  };

  // placeholder 不存在，创建 placeholder
  if (index === -1) {
    arr.splice(hoverIndex, 0, placeholder);
  }

  // placeholder 存在，移动其位置
  if (index > -1) {
    arr.splice(index, 1);

    // 如果此时拖拽的组件是 Left 组件，则 dragIndex 为 undefined，则此时修改 midList 中的占位元素的位置即可
    if (!dragIndex) {
      arr.splice(hoverIndex, 0, placeholder);
    }

    // // 如果此时拖拽的组件是 Middle 组件，则 dragIndex 不为 undefined，此时替换 dragIndex 和 hoverIndex 位置的元素即可
    if (typeof dragIndex !== 'undefined' && typeof hoverIndex !== 'undefined') {
      [arr[hoverIndex], arr[dragIndex]] = [arr[dragIndex], arr[hoverIndex]];

      const placeholderIdx = arr.findIndex((item: Widget) => item.randomCode === '-1');
      console.log(arr.findIndex((item: Widget) => item.randomCode === '-1'));
      arr.splice(placeholderIdx, 1);
    }
  }
  dispatch({
    type: 'formDesign/save',
    payload: {
      midList: [...arr],
    },
  });
};
