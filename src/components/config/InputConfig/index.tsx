import React, { FC } from 'react';
import { Form, Input, Radio } from 'antd';
import { Widget, WidgetOptions } from '@/pages/formDesign/index.d';

// import './index.less';

interface InputConfigProps {
  widgetData: Widget;
}

const InputConfig: FC<InputConfigProps> = (props) => {
  const [form] = Form.useForm();
  const { widgetData }: { widgetData: Widget } = props;
  const { options }: { options: WidgetOptions } = widgetData;

  return (
    <div className="formDesignWrap">
      <Form
        form={form}
        id="InputConfig"
        layout="horizontal"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
      >
        <Form.Item
          label="标题"
          name="label"
          initialValue={widgetData.label}
          rules={[
            {
              required: true,
              message: '请输入标题',
            },
          ]}
        >
          <Input placeholder={widgetData.label} />
        </Form.Item>

        <Form.Item label="默认值" name="defaultValue" initialValue={options.defaultValue}>
          <Input placeholder={options.defaultValue} />
        </Form.Item>

        <Form.Item
          label="是否必填"
          name="required"
          initialValue={options.required}
          rules={[
            {
              required: true,
              message: '请选择是否必填',
            },
          ]}
        >
          <Radio.Group>
            <Radio key={1} value={1}>
              是
            </Radio>
            <Radio key={0} value={0}>
              否
            </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="是否禁用"
          name="required"
          initialValue={options.disabled}
          rules={[
            {
              required: true,
              message: '请选择是否禁用',
            },
          ]}
        >
          <Radio.Group>
            <Radio key={1} value={1}>
              是
            </Radio>
            <Radio key={0} value={0}>
              否
            </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="占位符" name="placeholder" initialValue={options.placeholder}>
          <Input placeholder={options.placeholder} />
        </Form.Item>
      </Form>
    </div>
  );
};

export default InputConfig;
