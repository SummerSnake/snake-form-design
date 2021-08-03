import React, { FC } from 'react';
import { Form, Input, Radio, Checkbox, Select, DatePicker, Switch, Upload } from 'antd';
import { v4 as uuidv4 } from 'uuid';

import { Widget } from '@/pages/index.d';

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
      name={uuidv4()}
      valuePropName={
        widgetData.type === 'switch'
          ? 'checked'
          : widgetData.type === 'upload'
          ? 'fileList'
          : 'value'
      }
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
            return <Input placeholder={options?.placeholder} />;
          case 'textarea':
            return <Input.TextArea placeholder={options?.placeholder} />;
          case 'radio':
            return (
              <Radio.Group>
                {Array.isArray(elements) &&
                  elements.map((item) => (
                    <Radio key={item.id} value={item.id}>
                      {item.elemTitle}
                    </Radio>
                  ))}
              </Radio.Group>
            );
          case 'checkbox':
            return (
              <Checkbox.Group>
                {Array.isArray(elements) &&
                  elements.map((item) => (
                    <Checkbox key={item.id} value={item.id}>
                      {item.elemTitle}
                    </Checkbox>
                  ))}
              </Checkbox.Group>
            );
          case 'select':
            return (
              <Select>
                {Array.isArray(elements) &&
                  elements.map((item) => (
                    <Select.Option key={item.id} value={item.id}>
                      {item.elemTitle}
                    </Select.Option>
                  ))}
              </Select>
            );
          case 'datePicker':
            return <DatePicker placeholder={options?.placeholder} />;
          case 'switch':
            return <Switch />;
          case 'upload':
            return <Upload />;
          default:
            return null;
        }
      })()}
    </Form.Item>
  );
};

export default React.memo(GroupViewComponent);
