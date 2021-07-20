export interface optionsElement {
  id: number;
  elemTitle: string;
  elemName: string;
  elemVal: string;
}

export interface WidgetOptions {
  defaultValue?: string;
  isRequired?: number;
  isDisabled?: number;
  elements?: optionsElement[];
  placeholder?: string;
  format?: string;
  limitSize?: number;
  limitNum?: number;
}

export interface Widget {
  id: string;
  label: string;
  type: string;
  icon: string;
  options: WidgetOptions;
  randomCode: string;
  widgetsList?: Widget[];
}

export interface Widgets {
  id: string;
  title: string;
  items: Widget[];
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
