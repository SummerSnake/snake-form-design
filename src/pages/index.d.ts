export interface OptionsElement {
  id: number; // 主键
  elemTitle: string; // 标题 => 前端显示名称
}

export interface WidgetOptions {
  defaultValue?: string | number; // 默认值
  isRequired?: number; // 是否必填  0.否  1.是
  isDisabled?: number; // 是否禁用  0.否  1.是
  isPreview?: number; // 是否预览  0.否  1.是
  isStatistics?: number; // 是否汇总  0.否  1.是
  placeholder?: string; // 提示文字
  elements?: OptionsElement[]; // 自定义元素 => 单选、多选可选项

  selectVal?: number | undefined; // 选中属性 => 属性选择

  unit?: string; // 单位 => 数字

  currency?: number; // 币种 => 金额  1.人民币  2.美元
  decimal?: number; // 小数位数 => 金额  0.整数  1.1位  2.2位
  isUppercase?: number; // 是否显示大写数字 => 金额  0.否  1.是

  lowerLimit?: string; // 范围 => 金额  下限
  upperLimit?: string; // 范围 => 金额  上限
}

export interface Widget {
  id: string; // 主键 => 表单设计器控件标识符
  icon: string; // 图标 => 表单设计器控件图标
  label: string; // 标题 => 前端显示名称
  type: string; // 控件标识符 => "Input", "Checkbox"
  options: WidgetOptions; // 控件配置属性
  randomCode: string; // 随机串 => 控件唯一标识
  widgetsList?: Widget[]; // 控件列表 => 控件组所包含控件列表
}

export interface Widgets {
  id: string; // 主键 => 表单设计器类目标识符
  title: string; // 标题 => 表单设计器类目标题
  items: Widget[]; // 控件列表 => 类目所包含控件列表
}

export interface InitialDataType {
  widgetsList: Widgets[];
  widgetsGroupList: Widgets[];
}

export interface FormDesignModelState {
  widgetsList: Widgets[];
  widgetsGroupList: Widgets[];
  midList: Widget[];
  activeIdx: number;
  isDroped: string;
}

export interface SnakeFormDesignProps {
  height?: string;
  dataSource?: InitialDataType;
}
