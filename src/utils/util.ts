import { v4 as uuidv4 } from 'uuid';
import { getDvaApp, FormDesignModelState } from 'umi';
import { Widget } from '@/pages/formDesign/index.d';

/**
 * @desc midList 深拷贝
 * @return { Widget[] }
 */
export const cloneMidList = (): Widget[] => {
  const { getState } = getDvaApp()._store;
  const { formDesign }: { formDesign: FormDesignModelState } = getState();
  const { midList }: { midList: Widget[] } = formDesign;

  return JSON.parse(JSON.stringify(midList));
};

/**
 * @desc 左侧控件面板 拖拽至 中间布局面板 => 放置元素
 * @param { Widget } widget
 * @return { void }
 */
export const handleDrop = (widget: Widget): void => {
  if (!widget) {
    return;
  }

  const { dispatch } = getDvaApp()._store;
  const midArr: Widget[] = cloneMidList();

  const placeholderIndex = midArr.findIndex((item: Widget) => item.randomCode === '-1');
  let activeIdx: number = 0;

  // 没有 placeholder(放置到白色面板下方区域), 添加至末尾
  if (placeholderIndex === -1) {
    midArr.push({ ...widget, randomCode: uuidv4() });
    activeIdx = midArr.length - 1;
  }
  // 有 placeholder, 替换掉 placeholder
  if (placeholderIndex > -1) {
    midArr.splice(placeholderIndex, 1, { ...widget, randomCode: uuidv4() });
    activeIdx = placeholderIndex;
  }

  dispatch({
    type: 'formDesign/save',
    payload: {
      midList: [...midArr],
      activeIdx,
    },
  });
};

/**
 * @desc 中间布局面板 => 创建或移动 placeholder
 * @param { number } hoverIndex
 * @return { void }
 */
export const updatePlaceholder = (hoverIndex: number): void => {
  const { dispatch } = getDvaApp()._store;
  const midArr: Widget[] = cloneMidList();

  const placeholderIndex = midArr.findIndex((item: Widget) => item.randomCode === '-1');
  const placeholder: Widget = {
    id: 'placeholder',
    label: '放这里',
    type: 'placeholder',
    icon: '',
    options: {},
    randomCode: '-1',
  };

  // placeholder 不存在，创建 placeholder
  if (placeholderIndex === -1) {
    midArr.splice(hoverIndex, 0, placeholder);
  }
  // placeholder 存在，移动其位置
  if (placeholderIndex > -1) {
    [midArr[placeholderIndex], midArr[hoverIndex]] = [midArr[hoverIndex], midArr[placeholderIndex]];
  }

  dispatch({
    type: 'formDesign/save',
    payload: {
      midList: [...midArr],
    },
  });
};

/**
 * @desc 中间布局面板 => 重新排序
 * @param { Widget } widget
 * @return { void }
 */
export const reOrder = (widget: Widget): void => {
  if (!widget) {
    return;
  }

  const { dispatch } = getDvaApp()._store;
  const midArr: Widget[] = cloneMidList();

  // 当前拖拽元素下标
  const dragIndex = midArr.findIndex((item: Widget) => item.randomCode === widget.randomCode);
  // placeholder 下标
  const placeholderIndex = midArr.findIndex((item: Widget) => item.randomCode === '-1');

  if (dragIndex > -1 && placeholderIndex > -1) {
    // 交换位置
    [midArr[dragIndex], midArr[placeholderIndex]] = [midArr[placeholderIndex], midArr[dragIndex]];

    // 移除 placeholder => 交换位置后，之前拖拽元素下标即为 placeholder 下标
    midArr.splice(dragIndex, 1);

    dispatch({
      type: 'formDesign/save',
      payload: {
        midList: [...midArr],
        activeIdx: placeholderIndex >= midArr.length ? midArr.length - 1 : placeholderIndex,
      },
    });
  }
};

/**
 * @desc 中间布局面板 => 移除 placeholder
 * @return { void }
 */
export const deletePlaceholder = (): void => {
  const { dispatch } = getDvaApp()._store;
  const midArr: Widget[] = cloneMidList();

  // placeholder 下标
  const placeholderIndex = midArr.findIndex((item: Widget) => item.randomCode === '-1');

  // 移除 placeholder
  if (placeholderIndex > -1) {
    midArr.splice(placeholderIndex, 1);

    dispatch({
      type: 'formDesign/save',
      payload: {
        midList: [...midArr],
      },
    });
  }
};

/**
 * @desc 中间布局面板 => 移除当前项
 * @param { number } index
 * @return { void }
 */
export const deleteActiveItem = (index: number): void => {
  if (index < 0) {
    return;
  }

  const { dispatch } = getDvaApp()._store;
  const midArr: Widget[] = cloneMidList();

  // 移除当前项
  midArr.splice(index, 1);

  dispatch({
    type: 'formDesign/save',
    payload: {
      midList: [...midArr],
      activeIdx: -1,
    },
  });
};
