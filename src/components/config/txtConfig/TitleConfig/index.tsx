import React, { FC, useEffect } from 'react';
import { Form, Input } from 'antd';

import _store from '@/utils/dva';
import { setErrorMsg, cloneMidList } from '@/utils/util';
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
    };

    dispatch({
      type: 'formDesign/save',
      payload: {
        midList: [...middleArr],
      },
    });

    setErrorMsg(form, initWidgetData);
  };

  /**
   * @desc 重新渲染
   */
  useEffect(() => {
    form.setFieldsValue({
      label: initWidgetData?.label,
      placeholder: initOptions?.placeholder,
    });

    setErrorMsg(form, initWidgetData);
  }, [activeIndex]);

  return (
    <>
      <Form
        form={form}
        id="TitleConfig"
        layout="vertical"
        onValuesChange={handleFormChange}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
      >
        <div className="configTitleWrap">
          <p className="configTitle">说明</p>
        </div>

        <Form.Item
          label="控件名称"
          name="placeholder"
          rules={[
            {
              required: true,
              message: '请输入控件名称',
            },
          ]}
        >
          <Input disabled style={{ width: 312 }} />
        </Form.Item>

        <Form.Item
          label="说明文字"
          name="label"
          rules={[
            {
              required: true,
              message: '请输入说明文字',
            },
          ]}
        >
          <Input maxLength={10} style={{ width: 312 }} />
        </Form.Item>
      </Form>
    </>
  );
};

export default React.memo(TitleConfig);
