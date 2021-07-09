import React, { FC } from 'react';
import { Form, Input, Radio } from 'antd';
import { getDvaApp } from 'umi';
import { Widget, WidgetOptions } from '@/pages/formDesign/index.d';

interface InputConfigProps {
  middleArr: Widget[];
  activeIndex: number;
}

const InputConfig: FC<InputConfigProps> = (props) => {
  const { dispatch } = getDvaApp()._store;

  const [form] = Form.useForm();
  let { middleArr, activeIndex }: { middleArr: Widget[]; activeIndex: number } = props;
  const widgetData: Widget = middleArr[activeIndex];
  const { options }: { options: WidgetOptions } = widgetData;

  /**
   * @desc 表单项值改变，更新 midList
   * @return { void }
   */
  const handleFormChange = (): void => {
    const formData = form.getFieldsValue();

    middleArr[activeIndex] = {
      ...widgetData,
      label: formData.label,
      options: {
        ...widgetData.options,
        defaultValue: formData.defaultValue,
        isRequired: formData.isRequired,
        isDisabled: formData.isDisabled,
        placeholder: formData.placeholder,
      },
    };

    dispatch({
      type: 'formDesign/save',
      payload: {
        midList: [...middleArr],
      },
    });
  };

  return (
    <>
      <Form
        form={form}
        id="InputConfig"
        layout="horizontal"
        onFieldsChange={handleFormChange}
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
          name="isRequired"
          initialValue={options.isRequired}
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
          name="isDisabled"
          initialValue={options.isDisabled}
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
    </>
  );
};

export default InputConfig;
