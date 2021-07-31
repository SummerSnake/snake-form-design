/**
 * @Author: SummerSnake
 * @Description: 表单控件数据
 */
const initialData = {
  // 单个控件
  widgets: {
    id: 'widgets',
    title: '控件',
    items: [
      {
        id: 'baseInput',
        label: '单行文本',
        type: 'input',
        icon: 'fileTextOutlined',
        options: {
          defaultValue: '',
          isRequired: 0,
          isDisabled: 0,
          placeholder: '请输入单行文本',
        },
        randomCode: '',
      },
      {
        id: 'baseTextarea',
        label: '多行文本',
        type: 'textarea',
        icon: 'fileZipOutlined',
        options: {
          defaultValue: '',
          isRequired: 0,
          isDisabled: 0,
          placeholder: '请输入多行文本',
        },
        randomCode: '',
      },
      {
        id: 'baseAmount',
        label: '金额',
        type: 'input',
        icon: 'fileTextOutlined',
        options: {
          defaultValue: '',
          currency: 1,
          isRequired: 0,
          isPreview: 0,
          isStatistics: 0,
          isUppercase: 0,
          decimal: 0,
          lowerLimit: '',
          upperLimit: '',
          placeholder: '请输入金额',
        },
        randomCode: '',
      },
      {
        id: 'baseRadio',
        label: '单选框组',
        type: 'radio',
        icon: 'slack',
        options: {
          defaultValue: '',
          isRequired: 0,
          isDisabled: 0,
          elements: [
            { id: 1, elemTitle: '标题1', elemName: '字段1', elemVal: '值1' },
            { id: 2, elemTitle: '标题2', elemName: '字段2', elemVal: '值2' },
            { id: 3, elemTitle: '标题3', elemName: '字段3', elemVal: '值3' },
          ],
        },
        randomCode: '',
      },
      {
        id: 'baseCheckbox',
        label: '多选框组',
        type: 'checkbox',
        icon: 'sketch',
        options: {
          defaultValue: '',
          isRequired: 0,
          isDisabled: 0,
          elements: [
            { id: 1, elemTitle: '标题1', elemName: '字段1', elemVal: '值1' },
            { id: 2, elemTitle: '标题2', elemName: '字段2', elemVal: '值2' },
            { id: 3, elemTitle: '标题3', elemName: '字段3', elemVal: '值3' },
          ],
        },
        randomCode: '',
      },
      {
        id: 'baseSelect',
        label: '下拉选择框',
        type: 'select',
        icon: 'orderedListOutlined',
        options: {
          defaultValue: '',
          isRequired: 0,
          isDisabled: 0,
          elements: [
            { id: 1, elemTitle: '标题1', elemName: '字段1', elemVal: '值1' },
            { id: 2, elemTitle: '标题2', elemName: '字段2', elemVal: '值2' },
            { id: 3, elemTitle: '标题3', elemName: '字段3', elemVal: '值3' },
          ],
        },
        randomCode: '',
      },
      {
        id: 'baseDatePicker',
        label: '日期',
        type: 'datePicker',
        icon: 'dotChartOutlined',
        options: {
          format: 'YYYY-MM-DD',
          isRequired: 0,
          isDisabled: 0,
          elements: [
            { id: 1, elemTitle: '年-月-日', elemName: '字段1', elemVal: 'YYYY-MM-DD' },
            {
              id: 2,
              elemTitle: '年-月-日 时:分',
              elemName: '字段2',
              elemVal: 'YYYY-MM-DD HH:mm',
            },
            {
              id: 3,
              elemTitle: '年-月-日 时:分:秒',
              elemName: '字段2',
              elemVal: 'YYYY-MM-DD HH:mm:ss',
            },
          ],
        },
        randomCode: '',
      },
      {
        id: 'baseSwitch',
        label: '开关',
        type: 'switch',
        icon: 'heartOutlined',
        options: {
          defaultValue: 0,
          isRequired: 0,
          isDisabled: 0,
        },
        randomCode: '',
      },
      {
        id: 'baseUpload',
        label: '图片',
        type: 'upload',
        icon: 'toTopOutlined',
        options: {
          isRequired: 0,
          limitSize: 10240,
          limitNum: 1,
        },
        randomCode: '',
      },
      {
        id: 'baseTitle',
        label: '说明文本',
        type: 'div',
        icon: 'toTopOutlined',
        options: {
          placeholder: '说明文本',
        },
        randomCode: '',
      },
    ],
  },

  // 控件组
  widgetGroups: {
    id: 'widgetGroups',
    title: '控件组',
    items: [
      {
        id: 'expense',
        label: '报销',
        type: 'group',
        icon: '',
        options: {
          defaultValue: '',
          isRequired: 0,
          isDisabled: 0,
          placeholder: '请输入民族',
        },
        widgetsList: [
          {
            id: 'baseInput',
            label: '单行文本',
            type: 'input',
            icon: 'fileTextOutlined',
            options: {
              defaultValue: '',
              isRequired: 1,
              isDisabled: 0,
              placeholder: '请输入单行文本',
            },
            randomCode: 'group_item_01',
          },
          {
            id: 'baseTextarea',
            label: '多行文本',
            type: 'textarea',
            icon: 'fileZipOutlined',
            options: {
              defaultValue: '',
              isRequired: 0,
              isDisabled: 0,
              placeholder: '请输入多行文本',
            },
            randomCode: 'group_item_02',
          },
          {
            id: 'baseRadio',
            label: '单选框组',
            type: 'radio',
            icon: 'slack',
            options: {
              defaultValue: '',
              isRequired: 0,
              isDisabled: 0,
              elements: [
                { id: 1, elemTitle: '标题1', elemName: '字段1', elemVal: '值1' },
                { id: 2, elemTitle: '标题2', elemName: '字段2', elemVal: '值2' },
                { id: 3, elemTitle: '标题3', elemName: '字段3', elemVal: '值3' },
              ],
            },
            randomCode: 'group_item_03',
          },
        ],
        randomCode: '',
      },
    ],
  },
};

export default initialData;
