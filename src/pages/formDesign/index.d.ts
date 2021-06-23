export interface WidgetOptions {
  width?: string;
  defaultValue?: string;
  required?: boolean;
  disabled?: boolean;
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
  content: number[];
}
