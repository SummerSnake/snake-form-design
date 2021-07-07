import { v4 as uuidv4 } from 'uuid';
import { getDvaApp, FormDesignModelState } from 'umi';
import { Widget } from '@/pages/formDesign/index.d';

/**
 * @desc 左侧控件面板 拖拽至 中间布局面板 => 放置元素
 * @param { Widget } widget
 * @return { void }
 */
export const handleDrop = (widget?: Widget): void => {
  const { getState, dispatch } = getDvaApp()._store;
  const { formDesign }: { formDesign: FormDesignModelState } = getState();
  const { midList }: { midList: Widget[] } = formDesign;
  const arr = JSON.parse(JSON.stringify(midList));

  const index = midList.findIndex((item: Widget) => item.randomCode === '-1');

  if (widget) {
    if (index > -1) {
      arr.splice(index, 1, { ...widget, randomCode: uuidv4() });
    } else {
      arr.push({ ...widget, randomCode: uuidv4() });
    }
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
 * @param { number } hoverIndex
 * @return { void }
 */
export const updatePlaceholder = (hoverIndex: number): void => {
  const { getState, dispatch } = getDvaApp()._store;
  const { formDesign }: { formDesign: FormDesignModelState } = getState();
  const { midList }: { midList: Widget[] } = formDesign;
  const arr = JSON.parse(JSON.stringify(midList));

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
    [arr[index], arr[hoverIndex]] = [arr[hoverIndex], arr[index]];
  }

  dispatch({
    type: 'formDesign/save',
    payload: {
      midList: [...arr],
    },
  });
};

/**
 * @desc 中间布局面板 => 重新排序
 * @param { Widget } widget
 * @return { void }
 */
export const reOrder = (widget: Widget): void => {
  const { getState, dispatch } = getDvaApp()._store;
  const { formDesign }: { formDesign: FormDesignModelState } = getState();
  const { midList }: { midList: Widget[] } = formDesign;
  const arr = JSON.parse(JSON.stringify(midList));

  // 当前拖拽元素下标
  const dragIndex = arr.findIndex((item: Widget) => item.randomCode === widget.randomCode);
  // placeholder 下标
  const placeholderIndex = arr.findIndex((item: Widget) => item.randomCode === '-1');
  // 交换位置
  [arr[dragIndex], arr[placeholderIndex]] = [arr[placeholderIndex], arr[dragIndex]];

  // 删除 placeholder => 交换位置后，之前拖拽元素下标即为 placeholder 下标
  arr.splice(dragIndex, 1);

  dispatch({
    type: 'formDesign/save',
    payload: {
      midList: [...arr],
    },
  });
};
