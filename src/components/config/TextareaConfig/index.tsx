import React, { FC, useEffect } from 'react';
import { Form, Input, Checkbox } from 'antd';
import _store from '@/utils/dva';

import { cloneMidList } from '@/utils/util';
import { Widget, WidgetOptions } from '@/pages/index.d';

interface TextareaConfigProps {
  activeIndex: number;
}

const TextareaConfig: FC<TextareaConfigProps> = (props) => {
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
    const { otherOptions = [] }: { otherOptions: string[] } = formData;
    const middleArr = cloneMidList();
    const widgetData: Widget = middleArr[activeIndex];

    middleArr[activeIndex] = {
      ...widgetData,
      label: formData.label,
      options: {
        ...widgetData.options,
        placeholder: formData.placeholder,
        isRequired: otherOptions.includes('isRequired') ? 1 : 0,
        isPreview: otherOptions.includes('isPreview') ? 1 : 0,
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
      isRequired: !!initOptions?.isRequired,
      placeholder: initOptions?.placeholder,
    });
  }, [activeIndex]);

  return (
    <>
      <Form
        form={form}
        id="TextareaConfig"
        layout="vertical"
        onFieldsChange={handleFormChange}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
      >
        <Form.Item
          label="控件名称"
          name="label"
          rules={[
            {
              required: true,
              message: '请输入控件名称',
            },
          ]}
        >
          <Input style={{ width: 312 }} />
        </Form.Item>

        <Form.Item label="提示文字" name="placeholder">
          <Input style={{ width: 312 }} />
        </Form.Item>

        <div>其他</div>
        <Form.Item label="" name="otherOptions" valuePropName="checked">
          <Checkbox.Group style={{ width: 312 }}>
            <Checkbox value="isRequired">必填</Checkbox>
            <Checkbox value="isPreview">预览</Checkbox>
          </Checkbox.Group>
        </Form.Item>
      </Form>
    </>
  );
};

export default React.memo(TextareaConfig);
