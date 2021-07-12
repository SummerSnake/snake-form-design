import React, { FC } from 'react';
import { Form, Input, Radio } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { getDvaApp } from 'umi';
import { cloneMidList } from '@/utils/util';
import { Widget, WidgetOptions, optionsElement } from '@/pages/formDesign/index.d';

interface SelectConfigProps {
  activeIndex: number;
}

const SelectConfig: FC<SelectConfigProps> = (props) => {
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
   * @desc elements 子选项值改变，更新 midList
   * @param { string } sign
   * @param { number } id
   * @param { React.ChangeEvent<HTMLInputElement> } e
   * @return { void }
   */
  const handleInputChange = (
    sign: string,
    id: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const formData = form.getFieldsValue();

    const elemArr = getElementsList();

    for (let i = 0; i < elemArr.length; i++) {
      if (elemArr[i].id === id) {
        elemArr[i] = {
          ...elemArr[i],
          [sign]: e.target.value,
        };
      }
    }

    const middleArr = cloneMidList();
    const widgetData: Widget = middleArr[activeIndex];

    middleArr[activeIndex] = {
      ...widgetData,
      label: formData.label,
      options: {
        ...widgetData.options,
        elements: [...elemArr],
      },
    };

    dispatch({
      type: 'formDesign/save',
      payload: {
        midList: middleArr,
      },
    });
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
        defaultValue: formData.defaultValue,
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
        id="InputConfig"
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

        <Form.Item label="默认值" name="defaultValue" initialValue={initOptions.defaultValue}>
          <Input placeholder={initOptions.defaultValue} />
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

        {Array.isArray(initElements) &&
          initElements.map((item) => (
            <React.Fragment key={item.id}>
              <h3 style={{ margin: '30px 0 20px' }}>Select 选择框：</h3>

              <Form.Item
                label="标题"
                name={uuidv4()}
                initialValue={item.elemTitle}
                rules={[
                  {
                    required: true,
                    message: '请输入标题',
                  },
                ]}
              >
                <Input
                  placeholder="请输入标题"
                  onChange={(e) => handleInputChange('elemTitle', item.id, e)}
                />
              </Form.Item>

              <Form.Item
                label="字段名"
                name={uuidv4()}
                initialValue={item.elemName}
                rules={[
                  {
                    required: true,
                    message: '请输入字段名',
                  },
                ]}
              >
                <Input
                  placeholder="请输入字段名"
                  onChange={(e) => handleInputChange('elemName', item.id, e)}
                />
              </Form.Item>

              <Form.Item
                label="字段值"
                name={uuidv4()}
                initialValue={item.elemVal}
                rules={[
                  {
                    required: true,
                    message: '请输入字段值',
                  },
                ]}
              >
                <Input
                  placeholder="请输入字段值"
                  onChange={(e) => handleInputChange('elemVal', item.id, e)}
                />
              </Form.Item>
            </React.Fragment>
          ))}
      </Form>
    </>
  );
};

export default SelectConfig;
