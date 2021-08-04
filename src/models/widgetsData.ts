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
            isRequired: 0,
            isPreview: 0,
            placeholder: '请输入多行文本',
          },
          randomCode: '',
        },
        {
          id: 'baseTitle',
          label: '说明',
          type: 'text',
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
            isRequired: 0,
            isPreview: 0,
            placeholder: '请选择',
            elements: [{ id: 1, elemTitle: '' }],
          },
          randomCode: '',
        },
        {
          id: 'baseCheckbox',
          label: '多选',
          type: 'checkbox',
          icon: 'sketch',
          options: {
            isRequired: 0,
            isPreview: 0,
            placeholder: '请选择',
            elements: [{ id: 1, elemTitle: '' }],
          },
          randomCode: '',
        },
        {
          id: 'baseAttrSingleSelect',
          label: '属性选择(单选)',
          type: 'select',
          icon: 'sketch',
          options: {
            isRequired: 0,
            isPreview: 0,
            placeholder: '请选择属性',
            selectVal: 1,
            elements: [
              { id: 1, elemTitle: '属性1' },
              { id: 2, elemTitle: '属性2' },
            ],
          },
          randomCode: '',
        },
        {
          id: 'baseAttrMultipleSelect',
          label: '属性选择(多选)',
          type: 'select',
          icon: 'sketch',
          options: {
            isRequired: 0,
            isPreview: 0,
            placeholder: '请选择属性',
            selectVal: 1,
            elements: [
              { id: 1, elemTitle: '属性11' },
              { id: 2, elemTitle: '属性22' },
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
        {
          id: 'baseTimePicker',
          label: '时间',
          type: 'timePicker',
          icon: 'dotChartOutlined',
          options: {
            isRequired: 0,
            isPreview: 0,
            placeholder: '请选择时间',
          },
          randomCode: '',
        },
      ],
    },
    {
      id: 'specialNumWidgets',
      title: '特殊数值',
      items: [
        {
          id: 'baseIdNo',
          label: '身份证号',
          type: 'input',
          icon: 'toTopOutlined',
          options: {
            isRequired: 0,
            isPreview: 0,
            placeholder: '请输入身份证号',
          },
          randomCode: '',
        },
        {
          id: 'basePhone',
          label: '手机号',
          type: 'input',
          icon: 'toTopOutlined',
          options: {
            isRequired: 0,
            isPreview: 0,
            placeholder: '请输入手机号',
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
          id: 'baseUpload',
          label: '图片',
          type: 'upload',
          icon: 'toTopOutlined',
          options: {
            isRequired: 0,
            isPreview: 0,
          },
          randomCode: '',
        },
        {
          id: 'baseComment',
          label: '评分',
          type: 'comment',
          icon: 'fileTextOutlined',
          options: {
            isRequired: 0,
            isPreview: 0,
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
            isRequired: 0,
            placeholder: '请输入民族',
          },
          widgetsList: [
            {
              id: 'baseInput',
              label: '单行文本',
              type: 'input',
              icon: 'fileTextOutlined',
              options: {
                isRequired: 1,
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
                isRequired: 0,
                placeholder: '请输入多行文本',
              },
              randomCode: 'group_item_02',
            },
            {
              id: 'baseRadio',
              label: '单选',
              type: 'radio',
              icon: 'slack',
              options: {
                isRequired: 0,
                isPreview: 0,
                placeholder: '请选择',
                elements: [{ id: 1, elemTitle: '' }],
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
