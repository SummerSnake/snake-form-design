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
          icon: 'slack',
          options: {
            width: '100%',
            defaultValue: '',
            required: false,
            disabled: false,
            dataType: 'text',
            placeholder: '请输入',
          },
          randomCode: '',
        },
        {
          id: 'baseTextarea',
          label: '多行文本',
          type: 'textarea',
          icon: 'sketch',
          options: {
            width: '100%',
            defaultValue: '',
            required: false,
            disabled: false,
            placeholder: '请输入',
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
            required: false,
            disabled: false,
            elements: [
              { label: '标题1', value: '值1' },
              { label: '标题2', value: '值2' },
              { label: '标题3', value: '值3' },
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
            required: false,
            disabled: false,
            elements: [
              { label: '标题1', value: '值1' },
              { label: '标题2', value: '值2' },
              { label: '标题3', value: '值3' },
            ],
          },
          randomCode: '',
        },
        {
          id: 'baseSelect',
          label: '下拉选择框',
          type: 'select',
          icon: '',
          options: {
            width: '100%',
            defaultValue: '',
            required: false,
            disabled: false,
            elements: [
              { label: '标题1', value: '值1' },
              { label: '标题2', value: '值2' },
              { label: '标题3', value: '值3' },
            ],
          },
          randomCode: '',
        },
        {
          id: 'baseDatepicker',
          label: '日期选择器',
          type: 'date',
          icon: '',
          options: {
            width: '100%',
            format: 'YYYY-MM-DD',
            required: false,
            disabled: false,
            elements: [
              { label: 'YYYY-MM-DD', value: 'YYYY-MM-DD' },
              { label: 'YYYY-MM-DD HH:mm', value: 'YYYY-MM-DD HH:mm' },
            ],
          },
          randomCode: '',
        },
        {
          id: 'baseSwitch',
          label: '开关',
          type: 'switch',
          icon: '',
          options: {
            default: false,
            required: false,
            disabled: false,
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
            width: '100%',
            defaultValue: '',
            required: false,
            disabled: false,
            dataType: 'text',
            placeholder: '请输入',
          },
          randomCode: '',
        },
      ],
    },
  ],
  // 中间布局面板数据
  midList: [],
  // config: {
  //   layout: 'vertical',
  //   labelAlign: 'left',
  //   size: 'default',
  // },
  activeId: '',
};

export default initialData;
