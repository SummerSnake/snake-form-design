/**
 * @Author: SummerSnake
 * @Description: 表单控件数据
 */
const initialData = {
  widgetsList: [
    {
      id: 'txtWidgets',
      title: '文本',
      items: [
        {
          id: 'baseInput',
          label: '单行文本',
          type: 'input',
          icon: 'fileTextOutlined',
          options: {
            defaultValue: '',
            isRequired: 0,
            isPreview: 0,
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
            isPreview: 0,
            placeholder: '请输入多行文本',
          },
          randomCode: '',
        },
        {
          id: 'baseTitle',
          label: '说明',
          type: 'div',
          icon: 'toTopOutlined',
          options: {
            placeholder: '说明',
          },
          randomCode: '',
        },
      ],
    },
    {
      id: 'numWidgets',
      title: '数值',
      items: [
        {
          id: 'baseNumber',
          label: '数字',
          type: 'input',
          icon: 'fileTextOutlined',
          options: {
            defaultValue: '',
            isRequired: 0,
            isPreview: 0,
            isStatistics: 0,
            decimal: 0,
            unit: '',
            lowerLimit: '',
            upperLimit: '',
            placeholder: '请输入数字',
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
      ],
    },
    {
      id: 'optionWidgets',
      title: '选项',
      items: [
        {
          id: 'baseRadio',
          label: '单选',
          type: 'radio',
          icon: 'slack',
          options: {
            defaultValue: '',
            isRequired: 0,
            isPreview: 0,
            placeholder: '请选择',
            elements: [{ id: 1, elemTitle: '' }],
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
      ],
    },
    {
      id: 'dateWidgets',
      title: '日期和时间',
      items: [
        {
          id: 'baseDatePicker',
          label: '日期',
          type: 'datePicker',
          icon: 'dotChartOutlined',
          options: {
            isRequired: 0,
            isPreview: 0,
            placeholder: '请选择日期',
          },
          randomCode: '',
        },
      ],
    },
    {
      id: 'otherWidgets',
      title: '其他',
      items: [
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
      ],
    },
  ],

  // 控件组
  widgetsGroupList: [
    {
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
  ],
};

export default initialData;
