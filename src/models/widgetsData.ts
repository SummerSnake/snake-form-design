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
          icon: 'singleTxtIcon',
          options: {
            isRequired: 0,
            isDisabled: 0,
            placeholder: '请输入单行文本',
          },
          formKey: '',
        },
        {
          id: 'baseTextarea',
          label: '多行文本',
          type: 'textarea',
          icon: 'multipleTxtIcon',
          options: {
            isRequired: 0,
            isDisabled: 0,
            placeholder: '请输入多行文本',
          },
          formKey: '',
        },
        {
          id: 'baseTitle',
          label: '标题',
          type: 'title',
          icon: 'txtIcon',
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
            isDisabled: 0,
            isStatistics: 0,
            decimal: 0,
            unit: '',
            lowerLimit: '-2147483648',
            upperLimit: '2147483647',
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
            isDisabled: 0,
            isStatistics: 0,
            isUppercase: 0,
            decimal: 0,
            lowerLimit: '0',
            upperLimit: '2147483647',
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
            isDisabled: 0,
            placeholder: '请选择',
            elements: [{ id: 1, title: '属性1' }],
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
            isDisabled: 0,
            placeholder: '请选择',
            elements: [{ id: 1, title: '属性1' }],
          },
          formKey: '',
        },
        {
          id: 'baseAttrSingleSelect',
          label: '属性选择(单选)',
          type: 'select',
          icon: 'radioIcon',
          options: {
            isRequired: 0,
            isDisabled: 0,
            placeholder: '请选择属性',
            selectVal: 1,
            elements: [
              { id: 1, title: '岗位' },
              { id: 2, title: '职务' },
              { id: 3, title: '职级' },
            ],
          },
          formKey: '',
        },
        {
          id: 'baseAttrMultipleSelect',
          label: '属性选择(多选)',
          type: 'select',
          icon: 'checkboxIcon',
          options: {
            isRequired: 0,
            isDisabled: 0,
            placeholder: '请选择属性',
            selectVal: 1,
            elements: [
              { id: 1, title: '岗位' },
              { id: 2, title: '职务' },
              { id: 3, title: '职级' },
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
            isDisabled: 0,
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
            isDisabled: 0,
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
            isDisabled: 0,
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
            isDisabled: 0,
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
          type: 'singleDepartment',
          icon: 'departmentIcon',
          options: {
            isRequired: 0,
            isDisabled: 0,
            placeholder: '请选择部门',
          },
          formKey: '',
        },
        {
          id: 'baseMultipleDepartment',
          label: '部门(多部门)',
          type: 'multipleDepartment',
          icon: 'departmentIcon',
          options: {
            isRequired: 0,
            isDisabled: 0,
            placeholder: '请选择部门',
          },
          formKey: '',
        },
        {
          id: 'baseSingleMember',
          label: '成员(单成员)',
          type: 'singleMember',
          icon: 'memberIcon',
          options: {
            isRequired: 0,
            isDisabled: 0,
            isSelf: 0,
            placeholder: '请选择成员',
          },
          formKey: '',
        },
        {
          id: 'baseMultipleMember',
          label: '成员(多成员)',
          type: 'multipleMember',
          icon: 'memberIcon',
          options: {
            isRequired: 0,
            isDisabled: 0,
            isSelf: 0,
            placeholder: '请选择成员',
          },
          formKey: '',
        },
        {
          id: 'baseSingleCompany',
          label: '内部公司(单公司)',
          type: 'singleCompany',
          icon: 'companyIcon',
          options: {
            isRequired: 0,
            isDisabled: 0,
            placeholder: '请选择内部公司',
          },
          formKey: '',
        },
        {
          id: 'baseMultipleCompany',
          label: '内部公司(多公司)',
          type: 'multipleCompany',
          icon: 'companyIcon',
          options: {
            isRequired: 0,
            isDisabled: 0,
            placeholder: '请选择内部公司',
          },
          formKey: '',
        },
        {
          id: 'baseOrganizeRange',
          label: '组织范围',
          type: 'organizeRange',
          icon: 'organizeRangeIcon',
          options: {
            isRequired: 0,
            isDisabled: 0,
            placeholder: '请选择组织范围',
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
            isDisabled: 0,
            placeholder: '请上传图片',
          },
          formKey: '',
        },
        {
          id: 'baseAppendix',
          label: '附件',
          type: 'appendix',
          icon: 'appendixIcon',
          options: {
            isRequired: 0,
            isDisabled: 0,
            placeholder: '请上传附件',
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
            isDisabled: 0,
            isOnlyRelatedComplete: 0,
            elements: [],
            placeholder: '请选择关联流程',
          },
          formKey: '',
        },
        {
          id: 'baseRegion',
          label: '省市区',
          type: 'region',
          icon: 'regionIcon',
          options: {
            isRequired: 0,
            isDisabled: 0,
            placeholder: '请选择省市区',
          },
          formKey: '',
        },
        {
          id: 'baseLocation',
          label: '当前地址',
          type: 'location',
          icon: 'locationIcon',
          options: {
            isRequired: 0,
            isDisabled: 0,
            placeholder: '请选择当前地址',
          },
          formKey: '',
        },
        {
          id: 'basePosition',
          label: '位置',
          type: 'position',
          icon: 'locationIcon',
          options: {
            isRequired: 0,
            isDisabled: 0,
            placeholder: '请选择位置',
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
            isDisabled: 0,
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
            isDisabled: 0,
            placeholder: '请选择评分',
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
          id: 'baseAddress',
          label: '地址',
          type: 'address',
          icon: 'locationIcon',
          options: {},
          formList: [
            {
              id: 'baseRegion',
              label: '省市区',
              type: 'region',
              icon: '',
              options: {
                isRequired: 0,
                isDisabled: 0,
                placeholder: '请选择省市区',
              },
              formKey: 'addr_item_01',
            },
            {
              id: 'baseTextarea',
              label: '详细地址',
              type: 'textarea',
              icon: '',
              options: {
                isRequired: 0,
                isDisabled: 0,
                placeholder: '请输入详细地址',
              },
              formKey: 'addr_item_02',
            },
          ],
          formKey: '',
        },
        {
          id: 'baseRangePicker',
          label: '日期区间',
          type: 'rangeDate',
          icon: 'rangePickerIcon',
          options: {
            isRequired: 0,
            isDisabled: 0,
            placeholder: '请选择',
          },
          formList: [
            {
              id: 'baseDatePicker',
              label: '开始时间',
              type: 'date',
              icon: '',
              options: {
                isRequired: 0,
                isDisabled: 0,
                placeholder: '请选择开始时间',
              },
              formKey: 'rangePicker_item_01',
            },
            {
              id: 'baseDatePicker',
              label: '结束时间',
              type: 'date',
              icon: '',
              options: {
                isRequired: 0,
                isDisabled: 0,
                placeholder: '请选择结束时间',
              },
              formKey: 'rangePicker_item_02',
            },
            {
              id: 'baseInput',
              label: '时长(天)',
              type: 'text',
              icon: '',
              options: {
                isRequired: 0,
                isDisabled: 0,
                placeholder: '自动计算',
              },
              formKey: 'rangePicker_item_03',
            },
          ],
          formKey: '',
        },
      ],
    },
  ],
};

export default initialData;
