import React, { FC, useState, useEffect } from 'react';
import { Form, Input, Checkbox } from 'antd';
import { v4 as uuidv4 } from 'uuid';

import _store from '@/utils/dva';
import Icons from '@/utils/icon';
import { cloneMidList, setErrorMsg } from '@/utils/util';
import { Widget, WidgetOptions, OptionsElement } from '@/pages/index.d';

interface RadioConfigProps {
  activeIndex: number;
}

const RadioConfig: FC<RadioConfigProps> = (props) => {
  const { dispatch } = _store;

  const [form] = Form.useForm();
  const { activeIndex }: { activeIndex: number } = props;

  const initMiddleArr = cloneMidList();
  const initWidgetData: Widget = initMiddleArr[activeIndex];
  const { options: initOptions }: { options: WidgetOptions } = initWidgetData;

  const [initElements, setInitElements] = useState<OptionsElement[]>(initOptions?.elements || []);

  /**
   * @desc 获取当前控件自定义元素列表
   * @return { OptionsElement[] }
   */
  const getElementsList = (): OptionsElement[] => {
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
    e: React.ChangeEvent<HTMLInputElement>
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
      elemArr.push({ id: elemArr[elemArr.length - 1].id + 1, elemTitle: '' });
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

    setErrorMsg(form, initWidgetData);
  };

  /**
   * @desc 重新渲染
   */
  useEffect(() => {
    setInitElements(initOptions?.elements || []);

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
      otherOptions: arr,
    });

    setErrorMsg(form, initWidgetData);
  }, [activeIndex]);

  return (
    <>
      <Form
        form={form}
        id="RadioConfig"
        layout="vertical"
        onValuesChange={handleFormChange}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
      >
        <div className="configTitleWrap">
          <p className="configTitle">单选</p>
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

        <>
          {Array.isArray(initElements) &&
            initElements.map((item, index) => (
              <div key={item.id} style={{ position: 'relative' }}>
                <Form.Item
                  label={index === 0 ? '选项' : ''}
                  name={uuidv4()}
                  initialValue={item.elemTitle}
                  style={{ marginBottom: 10 }}
                  rules={[
                    {
                      required: true,
                      message: '请输入',
                    },
                  ]}
                >
                  <Input
                    placeholder="请输入"
                    style={{ width: 284 }}
                    onChange={(e) => handleInputChange('elemTitle', index, e)}
                  />
                </Form.Item>

                <span
                  style={{
                    position: 'absolute',
                    bottom: 3,
                    right: '0',
                    cursor: 'pointer',
                    visibility: initElements.length > 1 ? 'visible' : 'hidden',
                  }}
                  onClick={() => handleUpdateElements('reduce', index)}
                >
                  {Icons.deleteIcon({ color: '#ff7875' })}
                </span>
              </div>
            ))}

          <div
            onClick={() => handleUpdateElements('add', 0)}
            style={{ marginBottom: 20, cursor: 'pointer', color: '#40a9ff' }}
          >
            <span style={{ verticalAlign: 'middle', marginRight: 4 }}>
              {Icons.plusIcon({ fontSize: 18, color: '#108ee9' })}
            </span>

            <span style={{ verticalAlign: 'middle' }}>添加条件</span>
          </div>
        </>

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

export default React.memo(RadioConfig);
