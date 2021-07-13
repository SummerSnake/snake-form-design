/**
 * @Author: SummerSnake
 * @Description: 表单控件数据
 */
const initialData = {
  // 左侧控件数据
  widgets: [
    {
      id: 'baseComponent',
      title: '基础控件',
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
          label: '日期选择器',
          type: 'date',
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
            defaultValue: '0',
            isRequired: 0,
            isDisabled: 0,
          },
          randomCode: '',
        },
      ],
    },
    {
      id: 'highComponent',
      title: '高级控件',
      items: [
        {
          id: 'nations',
          label: '民族',
          type: 'input',
          icon: '',
          options: {
            defaultValue: '',
            isRequired: 0,
            isDisabled: 0,
            placeholder: '请输入民族',
          },
          randomCode: '',
        },
      ],
    },
  ],
  // config: {
  //   layout: 'vertical',
  //   labelAlign: 'left',
  //   size: 'default',
  // },
  activeId: '',
};

export default initialData;
