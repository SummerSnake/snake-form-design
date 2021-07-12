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
