import React, { FC } from 'react';
import { Form, Input, Radio, Checkbox, Select, DatePicker, Switch, Upload } from 'antd';

import { Widget } from '@/pages/formDesign/index.d';

interface FormItemsProps {
  widgetData: Widget;
}

const GroupViewComponent: FC<FormItemsProps> = (props) => {
  const { widgetData } = props;
  const { options } = widgetData;
  const { elements } = options;

  return (
    <Form.Item
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 14 }}
      label={widgetData.label}
      name={widgetData.id}
      initialValue={
        typeof options?.defaultValue === 'number' ? !!options?.defaultValue : options?.defaultValue
      }
      valuePropName={widgetData?.type === 'switch' ? 'checked' : 'value'}
      rules={[
        {
          required: !!options.isRequired,
          message: options.placeholder,
        },
      ]}
    >
      {(() => {
        switch (widgetData?.type) {
          case 'input':
            return <Input placeholder={options?.placeholder} disabled={!!options?.isDisabled} />;
          case 'textarea':
            return (
              <Input.TextArea placeholder={options?.placeholder} disabled={!!options?.isDisabled} />
            );
          case 'radio':
            return (
              <Radio.Group disabled={!!options?.isDisabled}>
                {Array.isArray(elements) &&
                  elements.map((item) => (
                    <Radio key={item.id} value={item.elemVal}>
                      {item.elemTitle}
                    </Radio>
                  ))}
              </Radio.Group>
            );
          case 'checkbox':
            return (
              <Checkbox.Group disabled={!!options?.isDisabled}>
                {Array.isArray(elements) &&
                  elements.map((item) => (
                    <Checkbox key={item.id} value={item.elemVal}>
                      {item.elemTitle}
                    </Checkbox>
                  ))}
              </Checkbox.Group>
            );
          case 'select':
            return (
              <Select disabled={!!options?.isDisabled}>
                {Array.isArray(elements) &&
                  elements.map((item) => (
                    <Select.Option key={item.id} value={item.elemVal}>
                      {item.elemTitle}
                    </Select.Option>
                  ))}
              </Select>
            );
          case 'datePicker':
            return (
              <DatePicker placeholder={options?.placeholder} disabled={!!options?.isDisabled} />
            );
          case 'switch':
            return <Switch disabled={!!options?.isDisabled} />;
          case 'upload':
            return <Upload disabled={!!options?.isDisabled} />;
          default:
            return null;
        }
      })()}
    </Form.Item>
  );
};

export default React.memo(GroupViewComponent);
