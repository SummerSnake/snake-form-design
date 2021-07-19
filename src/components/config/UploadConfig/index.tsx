import React, { FC } from 'react';
import { Form, Input, Radio } from 'antd';
import _store from '@/utils/dva';

import { cloneMidList } from '@/utils/util';
import { Widget, WidgetOptions } from '@/pages/index.d';

interface UploadConfigProps {
  activeIndex: number;
}

const UploadConfig: FC<UploadConfigProps> = (props) => {
  const { dispatch } = _store;

  const [form] = Form.useForm();
  const { activeIndex }: { activeIndex: number } = props;

  const initMiddleArr = cloneMidList();
  const initWidgetData: Widget = initMiddleArr[activeIndex];
  const { options: initOptions }: { options: WidgetOptions } = initWidgetData;

  /**
   * @desc 表单项值改变，更新 midList
   * @return { void }
   */
  const handleFormChange = (): void => {
    const formData = form.getFieldsValue();

    const middleArr = cloneMidList();
    const widgetData: Widget = middleArr[activeIndex];

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
        id="UploadConfig"
        layout="horizontal"
        onFieldsChange={handleFormChange}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
      >
        <Form.Item
          label="标题"
          name="label"
          initialValue={initWidgetData.label}
          rules={[
            {
              required: true,
              message: '请输入标题',
            },
          ]}
        >
          <Input placeholder={initWidgetData.label} />
        </Form.Item>

        <Form.Item
          label="是否必填"
          name="isRequired"
          initialValue={initOptions.isRequired}
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
          label="大小限制"
          name="limitSize"
          initialValue={initOptions.limitSize}
          rules={[
            {
              required: true,
              message: '请选择是否必填',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="数量限制"
          name="limitNum"
          initialValue={initOptions.limitNum}
          rules={[
            {
              required: true,
              message: '请选择是否必填',
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </>
  );
};

export default React.memo(UploadConfig);
