import { v4 as uuidv4 } from 'uuid';
import { FormInstance } from 'antd/lib/form';
import { Widget, FormDesignModelState } from '@/pages/index.d';
import _store from '@/utils/dva';

/**
 * @desc midList 深拷贝
 * @return { Widget[] }
 */
export const cloneMidList = (): Widget[] => {
  const { getState } = _store;
  const { formDesign }: { formDesign: FormDesignModelState } = getState();
  const { midList }: { midList: Widget[] } = formDesign;

  return JSON.parse(JSON.stringify(midList));
};

/**
 * @desc errorsList 深拷贝
 * @return { ErrorMap[] }
 */
export const cloneErrorsList = (): string[] => {
  const { getState } = _store;
  const { formDesign }: { formDesign: FormDesignModelState } = getState();
  const { errorsList }: { errorsList: string[] } = formDesign;

  return JSON.parse(JSON.stringify(errorsList));
};

/**
 * @desc 表单校验，存储报错信息
 * @return { void }
 */
export const setErrorMsg = (form: FormInstance, widgetData: Widget): void => {
  if (!form) {
    return;
  }

  form
    .validateFields()
    .then()
    .catch((error) => {
      const { errorFields } = error;

      if (Array.isArray(errorFields)) {
        const { dispatch } = _store;
        const errorArr = cloneErrorsList();
        // 取出当前控件的 formKey
        const { formKey } = widgetData;
        const index = errorArr.indexOf(formKey);

        // 无错误信息将当前组件从 errorsList 中删除
        if (errorFields.length === 0 && index > -1) {
          errorArr.splice(index, 1);

          dispatch({
            type: 'formDesign/save',
            payload: {
              errorsList: [...errorArr],
            },
          });

          return;
        }

        // errorsList 不存在当前控件报错信息，将当前组件推入数组，存在则忽略
        if (errorFields.length > 0 && index === -1) {
          errorArr.push(formKey);

          dispatch({
            type: 'formDesign/save',
            payload: {
              errorsList: [...errorArr],
            },
          });
        }
      }
    });
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

  const { dispatch } = _store;
  const midArr: Widget[] = cloneMidList();

  const placeholderIndex = midArr.findIndex((item: Widget) => item.formKey === '-1');
  let activeIdx: number = 0;

  // 没有 placeholder(放置到白色面板下方区域), 添加至末尾
  if (placeholderIndex === -1) {
    midArr.push({ ...widget, formKey: uuidv4() });
    activeIdx = midArr.length - 1;
  }
  // 有 placeholder, 替换掉 placeholder
  if (placeholderIndex > -1) {
    midArr.splice(placeholderIndex, 1, { ...widget, formKey: uuidv4() });
    activeIdx = placeholderIndex;
  }

  dispatch({
    type: 'formDesign/save',
    payload: {
      midList: [...midArr],
      activeIdx,
      isDroped: uuidv4(),
    },
  });
};

/**
 * @desc 中间布局面板 => 创建或移动 placeholder
 * @param { number } hoverIndex
 * @return { void }
 */
export const updatePlaceholder = (hoverIndex: number): void => {
  const { dispatch } = _store;
  const midArr: Widget[] = cloneMidList();

  const placeholderIndex = midArr.findIndex((item: Widget) => item.formKey === '-1');
  const placeholder: Widget = {
    id: 'placeholder',
    label: '放这里',
    type: 'placeholder',
    icon: '',
    options: {},
    formKey: '-1',
  };

  // placeholder 不存在，创建 placeholder
  if (placeholderIndex === -1) {
    midArr.splice(hoverIndex, 0, placeholder);
  }
  // placeholder 存在，移动其位置
  if (placeholderIndex > -1 && placeholderIndex !== hoverIndex) {
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

  const { dispatch } = _store;
  const midArr: Widget[] = cloneMidList();

  // 当前拖拽元素下标
  const dragIndex = midArr.findIndex((item: Widget) => item.formKey === widget.formKey);
  // placeholder 下标
  const placeholderIndex = midArr.findIndex((item: Widget) => item.formKey === '-1');

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
        isDroped: uuidv4(),
      },
    });
  }
};

/**
 * @desc 中间布局面板 => 移除 placeholder
 * @return { void }
 */
export const deletePlaceholder = (): void => {
  const { dispatch } = _store;
  const midArr: Widget[] = cloneMidList();

  // placeholder 下标
  const placeholderIndex = midArr.findIndex((item: Widget) => item.formKey === '-1');

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
 * @param { string } formKey
 * @return { void }
 */
export const deleteActiveItem = (index: number, formKey: string): void => {
  if (index < 0) {
    return;
  }

  const { dispatch } = _store;
  const midArr: Widget[] = cloneMidList();
  const errorArr: string[] = cloneErrorsList();
  const errorIdx: number = errorArr.indexOf(formKey);

  // 移除当前项
  midArr.splice(index, 1);
  // 移除错误信息
  if (errorIdx > -1) {
    errorArr.splice(errorIdx, 1);
  }

  dispatch({
    type: 'formDesign/save',
    payload: {
      midList: [...midArr],
      errorsList: [...errorArr],
      activeIdx: -1,
    },
  });
};
