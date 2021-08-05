import React, { FC, useEffect } from 'react';
import { Form, Input, Checkbox, Select } from 'antd';

import _store from '@/utils/dva';
import { cloneMidList, setErrorMsg } from '@/utils/util';
import { Widget, WidgetOptions } from '@/pages/index.d';

interface AttrMultipleSelectProps {
  activeIndex: number;
}

const AttrMultipleSelect: FC<AttrMultipleSelectProps> = (props) => {
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
        selectVal: formData.selectVal,
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
    if (!!initOptions?.isPreview) {
      arr.push('isPreview');
    }

    form.setFieldsValue({
      label: initWidgetData?.label,
      placeholder: initOptions?.placeholder,
      selectVal: initOptions?.selectVal,
      otherOptions: arr,
    });

    setErrorMsg(form, initWidgetData);
  }, [activeIndex]);

  return (
    <>
      <Form
        form={form}
        id="AttrMultipleSelect"
        layout="vertical"
        onValuesChange={handleFormChange}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
      >
        <div className="configTitleWrap">
          <p className="configTitle">属性选择(多选)</p>
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
          <Input style={{ width: 312 }} />
        </Form.Item>

        <Form.Item label="提示文字" name="placeholder">
          <Input style={{ width: 312 }} />
        </Form.Item>

        <Form.Item
          label="关联属性"
          name="selectVal"
          rules={[
            {
              required: true,
              message: '请选择关联属性',
            },
          ]}
        >
          <Select style={{ width: 312 }}>
            {Array.isArray(initOptions?.elements) &&
              initOptions?.elements.map((item) => (
                <Select.Option key={item?.id} value={item?.id}>
                  {item?.elemTitle}
                </Select.Option>
              ))}
          </Select>
        </Form.Item>

        <div>其他</div>
        <Form.Item label="" name="otherOptions">
          <Checkbox.Group style={{ width: 312 }}>
            <Checkbox value="isRequired">必填</Checkbox>
            <Checkbox value="isPreview">预览</Checkbox>
          </Checkbox.Group>
        </Form.Item>
      </Form>
    </>
  );
};

export default React.memo(AttrMultipleSelect);
