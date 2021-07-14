import React, { FC, useState, useEffect } from 'react';
import { Form, Input, Radio } from 'antd';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';
import { getDvaApp } from 'umi';

import { cloneMidList } from '@/utils/util';
import { Widget, WidgetOptions, optionsElement } from '@/pages/formDesign/index.d';

interface RadioConfigProps {
  activeIndex: number;
}

const RadioConfig: FC<RadioConfigProps> = (props) => {
  const { dispatch } = getDvaApp()._store;

  const [form] = Form.useForm();
  const { activeIndex }: { activeIndex: number } = props;

  const initMiddleArr = cloneMidList();
  const initWidgetData: Widget = initMiddleArr[activeIndex];
  const { options: initOptions }: { options: WidgetOptions } = initWidgetData;

  const [initElements, setInitElements] = useState<optionsElement[]>(initOptions?.elements || []);

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
   * @param { number } index
   * @param { React.ChangeEvent<HTMLInputElement> } e
   * @return { void }
   */
  const handleInputChange = (
    sign: string,
    index: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const formData = form.getFieldsValue();

    const elemArr = getElementsList();

    elemArr[index] = {
      ...elemArr[index],
      [sign]: e.target.value,
    };

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
   * @desc elements 添加/减少子项
   * @param { string } sign
   * @param { number } index
   * @return { void }
   */
  const handleUpdateElements = (sign: string, index: number): void => {
    const elemArr = getElementsList();

    if (sign === 'add') {
      elemArr.push({ ...elemArr[index], id: elemArr[elemArr.length - 1].id + 1 });
    } else {
      elemArr.splice(index, 1);
    }

    const middleArr = cloneMidList();
    const widgetData: Widget = middleArr[activeIndex];

    middleArr[activeIndex] = {
      ...widgetData,
      options: {
        ...widgetData.options,
        elements: [...elemArr],
      },
    };

    setInitElements(elemArr);

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

  /**
   * @desc 重新渲染
   */
  useEffect(() => {
    setInitElements(initOptions.elements || []);
  }, [activeIndex]);

  return (
    <>
      <Form
        form={form}
        id="RadioConfig"
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
          initElements.map((item, index) => (
            <React.Fragment key={item.id}>
              <div style={{ display: 'flex', margin: '30px 0 20px' }}>
                <h3 style={{ flex: 3, margin: 0 }}>Radio 单选框：</h3>
                <div style={{ flex: 1 }}>
                  <PlusCircleOutlined
                    style={{ cursor: 'pointer', color: '#40a9ff' }}
                    onClick={() => handleUpdateElements('add', index)}
                  />
                  <MinusCircleOutlined
                    style={{ marginLeft: 8, cursor: 'pointer', color: '#40a9ff' }}
                    onClick={() => handleUpdateElements('reduce', index)}
                  />
                </div>
              </div>

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
                  onChange={(e) => handleInputChange('elemTitle', index, e)}
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
                  onChange={(e) => handleInputChange('elemName', index, e)}
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
                  onChange={(e) => handleInputChange('elemVal', index, e)}
                />
              </Form.Item>
            </React.Fragment>
          ))}
      </Form>
    </>
  );
};

export default React.memo(RadioConfig);
