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
}

export interface Widgets {
  id: string;
  title: string;
  items: Widget[];
}

export interface InitialData {
  widgets: Widgets;
  widgetGroups: Widgets;
}

export interface ViewDataType {
  id: string;
  label: string;
  type: string;
  icon: string;
  options: WidgetOptions;
  randomCode: string;
  widgetIdx: number;
  isActive: boolean;
}
