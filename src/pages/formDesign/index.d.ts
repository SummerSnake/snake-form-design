export interface WidgetOptions {
  width?: string;
  defaultValue?: string;
  isRequired?: number;
  isDisabled?: number;
  dataType?: string;
  placeholder?: string;
}

export interface Widget {
  id: string;
  label: string;
  type: string;
  icon: string;
  options: WidgetOptions;
  randomCode: string;
}

export interface WidgetGroup {
  id: string;
  title: string;
  items: Widget[];
}

export interface InitialData {
  widgets: WidgetGroup[];
  activeId: string;
  midList: Widget[];
}
