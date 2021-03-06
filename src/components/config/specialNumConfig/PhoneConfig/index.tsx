import React, { FC, useEffect } from 'react';
import { Form, Input, Checkbox } from 'antd';

import _store from '@utils/dva';
import { cloneMidList, setErrorMsg } from '@utils/util';
import { Widget, WidgetOptions } from '@/pages/index.d';

interface PhoneConfigProps {
  activeIndex: number;
}

const PhoneConfig: FC<PhoneConfigProps> = (props) => {
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
        isDisabled: otherOptions.includes('isDisabled') ? 1 : 0,
      },
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
    const arr: string[] = [];
    if (!!initOptions?.isRequired) {
      arr.push('isRequired');
    }
    if (!!initOptions?.isDisabled) {
      arr.push('isDisabled');
    }

    form.setFieldsValue({
      label: initWidgetData?.label,
      placeholder: initOptions?.placeholder,
      otherOptions: arr,
    });

    setErrorMsg(form, initWidgetData);
  }, [activeIndex]);

  return (
    <>
      <Form
        form={form}
        id="PhoneConfig"
        layout="vertical"
        onValuesChange={handleFormChange}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
      >
        <div className="configTitleWrap">
          <p className="configTitle">手机号</p>
          <p className="titleSubTxt">将自动验证手机号码正确性，可在手机上直接点击拨打</p>
        </div>

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
          <Input maxLength={10} style={{ width: 312 }} />
        </Form.Item>

        <Form.Item label="提示文字" name="placeholder">
          <Input maxLength={10} style={{ width: 312 }} />
        </Form.Item>

        <div>其他</div>
        <Form.Item label="" name="otherOptions">
          <Checkbox.Group style={{ width: 312 }}>
            <Checkbox value="isRequired">必填</Checkbox>
            <Checkbox value="isDisabled">禁用</Checkbox>
          </Checkbox.Group>
        </Form.Item>
      </Form>
    </>
  );
};

export default React.memo(PhoneConfig);
