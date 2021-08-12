import React, { FC, useEffect } from 'react';
import { Form, Input, Checkbox } from 'antd';

import _store from '@/utils/dva';
import { setErrorMsg, cloneMidList } from '@/utils/util';
import { Widget, WidgetOptions } from '@/pages/index.d';

interface RangePickerConfigProps {
  activeIndex: number;
}

const RangePickerConfig: FC<RangePickerConfigProps> = (props) => {
  const { dispatch } = _store;

  const [form] = Form.useForm();
  const { activeIndex }: { activeIndex: number } = props;

  const initMiddleArr = cloneMidList();
  const initWidgetData: Widget = initMiddleArr[activeIndex];
  const { options: initOptions }: { options: WidgetOptions } = initWidgetData;
  const { formList: initFormList } = initWidgetData;

  /**
   * @desc 表单项值改变，更新 midList
   * @return { void }
   */
  const handleFormChange = (): void => {
    const formData = form.getFieldsValue();
    const middleArr = cloneMidList();
    const widgetData: Widget = middleArr[activeIndex];
    const { formList } = widgetData;

    if (formList) {
      formList.forEach((item, index) => {
        const label = `label${index}`;

        formList[index] = {
          ...item,
          label: formData[label],
          options: {
            ...item?.options,
            placeholder: index < 2 ? formData?.placeholder : item?.options?.placeholder,
            isRequired: formData?.otherOptions.includes('isRequired') ? 1 : 0,
            isPreview: formData?.otherOptions.includes('isPreview') ? 1 : 0,
          },
        };
      });
    }

    middleArr[activeIndex] = {
      ...widgetData,
      options: {
        ...widgetData?.options,
        isRequired: formData?.otherOptions.includes('isRequired') ? 1 : 0,
        isPreview: formData?.otherOptions.includes('isPreview') ? 1 : 0,
      },
      formList,
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
    if (initFormList) {
      const arr: string[] = [];
      if (!!initOptions?.isRequired) {
        arr.push('isRequired');
      }
      if (!!initOptions?.isPreview) {
        arr.push('isPreview');
      }

      initFormList.forEach((item, index) => {
        const label = `label${index}`;
        const placeholder = `placeholder${index}`;

        form.setFieldsValue({
          [label]: item.label,
          [placeholder]: initOptions?.placeholder,
          placeholder: initOptions?.placeholder,
          otherOptions: arr,
        });
      });
    }

    setErrorMsg(form, initWidgetData);
  }, [activeIndex]);

  return (
    <>
      <Form
        form={form}
        id="RangePickerConfig"
        layout="vertical"
        onValuesChange={handleFormChange}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
      >
        <div className="configTitleWrap">
          <p className="configTitle">日期区间</p>
        </div>

        <>
          {Array.isArray(initFormList) &&
            initFormList.map((item, index) => (
              <React.Fragment key={item?.formKey}>
                <Form.Item
                  label={`控件名称${index + 1}`}
                  name={`label${index}`}
                  rules={[
                    {
                      required: true,
                      message: '请输入控件名称',
                    },
                  ]}
                >
                  <Input maxLength={10} style={{ width: 312 }} />
                </Form.Item>
              </React.Fragment>
            ))}
        </>

        <Form.Item label="提示文字" name="placeholder">
          <Input maxLength={10} style={{ width: 312 }} />
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

export default React.memo(RangePickerConfig);
