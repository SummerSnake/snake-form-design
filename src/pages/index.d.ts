export interface OptionsElement {
  id: string; // 主键
  title: string; // 标题 => 前端显示名称
}

export interface WidgetOptions {
  isRequired?: number; // 是否必填  0.否  1.是
  isPreview?: number; // 是否预览  0.否  1.是
  isStatistics?: number; // 是否汇总  0.否  1.是
  placeholder?: string; // 提示文字
  elements?: OptionsElement[]; // 自定义元素 => 单选、多选可选项

  selectVal?: number | undefined; // 选中属性 => 属性选择

  unit?: string; // 单位 => 数字

  isSelf?: number; // 可选自己 => 成员

  currency?: number; // 币种 => 金额  1.人民币  2.美元
  decimal?: number; // 小数位数 => 金额  0.整数  1.1位  2.2位
  isUppercase?: number; // 是否显示大写数字 => 金额  0.否  1.是

  lowerLimit?: string; // 范围 => 金额  下限
  upperLimit?: string; // 范围 => 金额  上限

  isOnlyRelatedComplete?: number; // 仅关联已完成的流程 => 关联流程  0.否 1.是

  autographType?: number; // 签名方式 => 手写签名  1.使用上次签名 2.每次重新签名
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

export interface DataSourceType {
  widgetsList: Widgets[];
  widgetsGroupList: Widgets[];
}

export interface FormDesignModelState {
  widgetsList: Widgets[];
  widgetsGroupList: Widgets[];
  midList: Widget[];
  errorList: string[];
  activeIdx: number;
  isDroped: string;
}

export interface TreeDataType {
  key: string;
  title: string;
  children?: TreeDataType[];
}

export interface SnakeFormDesignProps {
  dataSource: DataSourceType;
  treeData: TreeDataType[];
  getWidgetsList: (widgetsList: Widget[]) => void;
  height?: string;
}
