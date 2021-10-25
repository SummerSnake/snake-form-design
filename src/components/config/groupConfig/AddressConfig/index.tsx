import React, { FC, useEffect } from 'react';
import { Form, Input, Checkbox } from 'antd';

import _store from '@utils/dva';
import { setErrorMsg, cloneMidList } from '@utils/util';
import { Widget } from '@/pages/index.d';

interface AddressConfigProps {
  activeIndex: number;
}

const AddressConfig: FC<AddressConfigProps> = (props) => {
  const { dispatch } = _store;

  const [form] = Form.useForm();
  const { activeIndex }: { activeIndex: number } = props;

  const initMiddleArr = cloneMidList();
  const initWidgetData: Widget = initMiddleArr[activeIndex];
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
        const placeholder = `placeholder${index}`;
        const otherOptions = `otherOptions${index}`;

        formList[index] = {
          ...item,
          label: formData[label],
          options: {
            ...item.options,
            placeholder: formData[placeholder],
            isRequired: formData[otherOptions].includes('isRequired') ? 1 : 0,
            isDisabled: formData[otherOptions].includes('isDisabled') ? 1 : 0,
          },
        };
      });
    }

    middleArr[activeIndex] = {
      ...widgetData,
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
      initFormList.forEach((item, index) => {
        const { options } = item;

        const arr: string[] = [];
        if (!!options?.isRequired) {
          arr.push('isRequired');
        }
        if (!!options?.isDisabled) {
          arr.push('isDisabled');
        }

        const label = `label${index}`;
        const placeholder = `placeholder${index}`;
        const otherOptions = `otherOptions${index}`;

        form.setFieldsValue({
          [label]: item.label,
          [placeholder]: options?.placeholder,
          [otherOptions]: arr,
        });
      });
    }

    setErrorMsg(form, initWidgetData);
  }, [activeIndex]);

  return (
    <>
      <Form
        form={form}
        id="AddressConfig"
        layout="vertical"
        onValuesChange={handleFormChange}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
      >
        <div className="configTitleWrap">
          <p className="configTitle">地址</p>
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

                <Form.Item label="提示文字" name={`placeholder${index}`}>
                  <Input maxLength={10} style={{ width: 312 }} />
                </Form.Item>

                <div>其他</div>
                <Form.Item label="" name={`otherOptions${index}`}>
                  <Checkbox.Group style={{ width: 312 }}>
                    <Checkbox value="isRequired">必填</Checkbox>
                    <Checkbox value="isDisabled">禁用</Checkbox>
                  </Checkbox.Group>
                </Form.Item>
              </React.Fragment>
            ))}
        </>
      </Form>
    </>
  );
};

export default React.memo(AddressConfig);
