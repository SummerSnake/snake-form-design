export interface optionsElement {
  id: number; // 主键
  elemTitle: string; // 标题 => 前端显示名称
  elemName: string; // 字段名 => 数据库字段名 key
  elemVal: string; // 字段值 => 数据库字段值 value
}

export interface WidgetOptions {
  defaultValue?: string | number; // 默认值
  isRequired?: number; // 是否必填  0.否  1.是
  isDisabled?: number; // 是否禁用  0.否  1.是
  isPreview?: number; // 是否预览  0.否  1.是
  isStatistics?: number; // 是否汇总  0.否  1.是
  placeholder?: string; // 提示文字
  elements?: optionsElement[]; // 自定义元素 => 单选、多选可选项
  format?: string; // 格式化规则

  limitSize?: number; // 限制数量 => 图片
  limitNum?: number; // 限制大小 => 图片

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
  widgets: Widgets;
  widgetGroups: Widgets;
}

export interface FormDesignModelState {
  widgets: Widgets;
  widgetGroups: Widgets;
  midList: Widget[];
  activeIdx: number;
  isDroped: string;
}

export interface SnakeFormDesignProps {
  height?: string;
  dataSource?: InitialDataType;
}
