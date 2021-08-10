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
          type: 'text',
          icon: 'singleTxtIcon',
          options: {
            isRequired: 0,
            isPreview: 0,
            placeholder: '请输入单行文本',
          },
          formKey: '',
        },
        {
          id: 'baseTextarea',
          label: '多行文本',
          type: 'multilineText',
          icon: 'multipleTxtIcon',
          options: {
            isRequired: 0,
            isPreview: 0,
            placeholder: '请输入多行文本',
          },
          formKey: '',
        },
        {
          id: 'baseTitle',
          label: '说明',
          type: 'description',
          icon: 'txtIcon',
          options: {
            placeholder: '说明',
          },
          formKey: '',
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
          type: 'number',
          icon: 'numberIcon',
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
          formKey: '',
        },
        {
          id: 'baseAmount',
          label: '金额',
          type: 'money',
          icon: 'amountIcon',
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
          formKey: '',
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
          icon: 'radioIcon',
          options: {
            isRequired: 0,
            isPreview: 0,
            placeholder: '请选择',
            elements: [{ id: '1', title: '属性1' }],
          },
          formKey: '',
        },
        {
          id: 'baseCheckbox',
          label: '多选',
          type: 'checkbox',
          icon: 'checkboxIcon',
          options: {
            isRequired: 0,
            isPreview: 0,
            placeholder: '请选择',
            elements: [{ id: '1', title: '属性1' }],
          },
          formKey: '',
        },
        {
          id: 'baseAttrSingleSelect',
          label: '属性选择(单选)',
          type: 'propertySingle',
          icon: 'radioIcon',
          options: {
            isRequired: 0,
            isPreview: 0,
            placeholder: '请选择属性',
            selectVal: 1,
            elements: [
              { id: '1', title: '属性1' },
              { id: '2', title: '属性2' },
            ],
          },
          formKey: '',
        },
        {
          id: 'baseAttrMultipleSelect',
          label: '属性选择(多选)',
          type: 'propertyMultiple',
          icon: 'checkboxIcon',
          options: {
            isRequired: 0,
            isPreview: 0,
            placeholder: '请选择属性',
            selectVal: 1,
            elements: [
              { id: '1', title: '属性11' },
              { id: '2', title: '属性22' },
            ],
          },
          formKey: '',
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
          type: 'date',
          icon: 'dateIcon',
          options: {
            isRequired: 0,
            isPreview: 0,
            placeholder: '请选择日期',
          },
          formKey: '',
        },
        {
          id: 'baseTimePicker',
          label: '时间',
          type: 'time',
          icon: 'timeIcon',
          options: {
            isRequired: 0,
            isPreview: 0,
            placeholder: '请选择时间',
          },
          formKey: '',
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
          type: 'idCard',
          icon: 'idNoIcon',
          options: {
            isRequired: 0,
            isPreview: 0,
            placeholder: '请输入身份证号',
          },
          formKey: '',
        },
        {
          id: 'basePhone',
          label: '手机号',
          type: 'phone',
          icon: 'phoneIcon',
          options: {
            isRequired: 0,
            isPreview: 0,
            placeholder: '请输入手机号',
          },
          formKey: '',
        },
      ],
    },
    {
      id: 'organizationWidgets',
      title: '部门和成员',
      items: [
        {
          id: 'baseSingleDepartment',
          label: '部门(单部门)',
          type: 'departmentSingle',
          icon: 'departmentIcon',
          options: {
            isRequired: 0,
            isPreview: 0,
          },
          formKey: '',
        },
        {
          id: 'baseMultipleDepartment',
          label: '部门(多部门)',
          type: 'departmentMultiple',
          icon: 'departmentIcon',
          options: {
            isRequired: 0,
            isPreview: 0,
          },
          formKey: '',
        },
        {
          id: 'baseSingleMember',
          label: '成员(单成员)',
          type: 'memberSingle',
          icon: 'memberIcon',
          options: {
            isRequired: 0,
            isPreview: 0,
            isSelf: 0,
          },
          formKey: '',
        },
        {
          id: 'baseMultipleMember',
          label: '成员(多成员)',
          type: 'memberMultiple',
          icon: 'memberIcon',
          options: {
            isRequired: 0,
            isPreview: 0,
            isSelf: 0,
          },
          formKey: '',
        },
        {
          id: 'baseSingleCompany',
          label: '内部公司(单公司)',
          type: 'companySingle',
          icon: 'companyIcon',
          options: {
            isRequired: 0,
            isPreview: 0,
          },
          formKey: '',
        },
        {
          id: 'baseMultipleCompany',
          label: '内部公司(多公司)',
          type: 'companyMultiple',
          icon: 'companyIcon',
          options: {
            isRequired: 0,
            isPreview: 0,
          },
          formKey: '',
        },
        {
          id: 'baseOrganizeRange',
          label: '组织范围',
          type: 'upload',
          icon: 'organizeRangeIcon',
          options: {
            isRequired: 0,
            isPreview: 0,
          },
          formKey: '',
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
          type: 'image',
          icon: 'uploadIcon',
          options: {
            isRequired: 0,
            isPreview: 0,
          },
          formKey: '',
        },
        {
          id: 'baseAppendix',
          label: '附件',
          type: 'attachment',
          icon: 'appendixIcon',
          options: {
            isRequired: 0,
            isPreview: 0,
          },
          formKey: '',
        },
        {
          id: 'baseAssociate',
          label: '关联流程',
          type: 'associate',
          icon: 'associateIcon',
          options: {
            isRequired: 0,
            isPreview: 0,
            isOnlyRelatedComplete: 0,
            elements: [],
          },
          formKey: '',
        },
        {
          id: 'baseRegion',
          label: '省市区',
          type: 'select',
          icon: 'regionIcon',
          options: {
            isRequired: 0,
            isPreview: 0,
            placeholder: '请选择',
          },
          formKey: '',
        },
        {
          id: 'baseLocation',
          label: '当前地址',
          type: 'currentLocation',
          icon: 'locationIcon',
          options: {
            isRequired: 0,
            isPreview: 0,
          },
          formKey: '',
        },
        {
          id: 'basePosition',
          label: '位置',
          type: 'address',
          icon: 'locationIcon',
          options: {
            isRequired: 0,
            isPreview: 0,
          },
          formKey: '',
        },
        {
          id: 'baseAutograph',
          label: '手写签名',
          type: 'autograph',
          icon: 'autographIcon',
          options: {
            autographType: 1,
            isRequired: 0,
            isPreview: 0,
            placeholder: '点击签名',
          },
          formKey: '',
        },
        {
          id: 'baseComment',
          label: '评分',
          type: 'comment',
          icon: 'commentIcon',
          options: {
            isRequired: 0,
            isPreview: 0,
          },
          formKey: '',
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
              formKey: 'group_item_01',
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
              formKey: 'group_item_02',
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
                elements: [{ id: '1', title: '' }],
              },
              formKey: 'group_item_03',
            },
          ],
          formKey: '',
        },
      ],
    },
  ],
};

export default initialData;
