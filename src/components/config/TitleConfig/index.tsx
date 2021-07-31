import React, { FC, useEffect } from 'react';
import { Form, Input, Radio } from 'antd';
import _store from '@/utils/dva';

import { cloneMidList } from '@/utils/util';
import { Widget, WidgetOptions } from '@/pages/index.d';

interface TitleConfigProps {
  activeIndex: number;
}

const TitleConfig: FC<TitleConfigProps> = (props) => {
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

  /**
   * @desc 重新渲染
   */
  useEffect(() => {
    form.setFieldsValue({
      label: initWidgetData?.label,
      placeholder: initOptions?.placeholder,
    });
  }, [activeIndex]);

  return (
    <>
      <Form
        form={form}
        id="TitleConfig"
        layout="horizontal"
        onFieldsChange={handleFormChange}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
      >
        <Form.Item
          label="标题"
          name="label"
          rules={[
            {
              required: true,
              message: '请输入标题',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="提示文字"
          name="placeholder"
          rules={[
            {
              required: true,
              message: '请输入提示文字',
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </>
  );
};

export default React.memo(TitleConfig);
