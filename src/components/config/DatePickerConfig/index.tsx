import React, { FC } from 'react';
import { Form, Input, Select, Radio } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { getDvaApp } from 'umi';
import { cloneMidList } from '@/utils/util';
import { Widget, WidgetOptions, optionsElement } from '@/pages/formDesign/index.d';

interface DatePickerConfigProps {
  activeIndex: number;
}

const DatePickerConfig: FC<DatePickerConfigProps> = (props) => {
  const { dispatch } = getDvaApp()._store;

  const [form] = Form.useForm();
  const { activeIndex }: { activeIndex: number } = props;

  const initMiddleArr = cloneMidList();
  const initWidgetData: Widget = initMiddleArr[activeIndex];
  const { options: initOptions }: { options: WidgetOptions } = initWidgetData;
  const { elements: initElements } = initOptions;

  /**
   * @desc 获取当前控件自定义元素列表
   * @return { optionsElement[] }
   */
  const getElementsList = (): optionsElement[] => {
    const middleArr = cloneMidList();
    const widgetData: Widget = middleArr[activeIndex];
    const { options }: { options: WidgetOptions } = widgetData;
    const { elements = [] } = options;

    return JSON.parse(JSON.stringify(elements));
  };

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
        format: formData.format,
        isRequired: formData.isRequired,
        isDisabled: formData.isDisabled,
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
        id="DatePickerConfig"
        layout="horizontal"
        onValuesChange={handleFormChange}
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
          label="是否禁用"
          name="isDisabled"
          initialValue={initOptions.isDisabled}
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

        <Form.Item
          label="时间格式"
          name="format"
          initialValue={initOptions.format}
          rules={[
            {
              required: true,
              message: '请选择时间格式',
            },
          ]}
        >
          <Select>
            {Array.isArray(initElements) &&
              initElements.map((item) => (
                <Select.Option key={item.id} value={item.elemVal}>
                  {item.elemTitle}
                </Select.Option>
              ))}
          </Select>
        </Form.Item>
      </Form>
    </>
  );
};

export default DatePickerConfig;
