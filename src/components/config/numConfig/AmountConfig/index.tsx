import React, { FC, useEffect } from 'react';
import { Form, Input, Radio, Select, Checkbox } from 'antd';

import _store from '@/utils/dva';
import { cloneMidList, setErrorMsg } from '@/utils/util';
import { Widget, WidgetOptions } from '@/pages/index.d';

interface AmountConfigProps {
  activeIndex: number;
}

const AmountConfig: FC<AmountConfigProps> = (props) => {
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
        currency: formData.currency,
        decimal: formData.decimal,
        isUppercase: formData.isUppercase ? 1 : 0,
        placeholder: formData.placeholder,
        lowerLimit: formData.lowerLimit,
        upperLimit: formData.upperLimit,
        isRequired: otherOptions.includes('isRequired') ? 1 : 0,
        isPreview: otherOptions.includes('isPreview') ? 1 : 0,
        isStatistics: otherOptions.includes('isStatistics') ? 1 : 0,
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
    if (!!initOptions?.isStatistics) {
      arr.push('isStatistics');
    }

    form.setFieldsValue({
      label: initWidgetData?.label,
      currency: initOptions?.currency,
      decimal: initOptions?.decimal,
      isUppercase: !!initOptions?.isUppercase,
      placeholder: initOptions?.placeholder,
      lowerLimit: initOptions?.lowerLimit,
      upperLimit: initOptions?.upperLimit,
      otherOptions: arr,
    });

    setErrorMsg(form, initWidgetData);
  }, [activeIndex]);

  return (
    <>
      <Form
        form={form}
        id="AmountConfig"
        layout="vertical"
        onValuesChange={handleFormChange}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
      >
        <div className="configTitleWrap">
          <p className="configTitle">金额</p>
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
          <Input maxLength={10} placeholder={initWidgetData.label} style={{ width: 312 }} />
        </Form.Item>

        <Form.Item label="提示文字" name="placeholder">
          <Input maxLength={10} style={{ width: 312 }} />
        </Form.Item>

        <Form.Item label="币种选择" name="currency" style={{ marginBottom: 8 }}>
          <Select style={{ width: 312 }}>
            <Select.Option key={1} value={1}>
              人民币元(CNY)
            </Select.Option>
            <Select.Option key={2} value={2}>
              美元(USD)
            </Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="选项类型" name="isUppercase" valuePropName="checked">
          <Checkbox style={{ width: 312 }}>
            <div style={{ whiteSpace: 'nowrap' }}>
              <span>显示大写数字</span>
              <span style={{ color: '#8691a3' }}>(建议币种当人民币时使用)</span>
            </div>
          </Checkbox>
        </Form.Item>

        <Form.Item
          label="小数点"
          name="decimal"
          rules={[
            {
              required: true,
              message: '请选择小数点',
            },
          ]}
        >
          <Radio.Group style={{ width: 312 }}>
            <Radio key={0} value={0}>
              整数
            </Radio>
            <Radio key={1} value={1}>
              1位
            </Radio>
            <Radio key={2} value={2}>
              2位
            </Radio>
          </Radio.Group>
        </Form.Item>

        <div style={{ paddingBottom: 8 }}>范围</div>
        <div>
          <span style={{ paddingRight: 10 }}>下限</span>
          <div style={{ display: 'inline-block' }}>
            <Form.Item label="" name="lowerLimit">
              <Input style={{ width: 68 }} />
            </Form.Item>
          </div>

          <span style={{ padding: '0 10px 0 20px' }}>上限</span>
          <div style={{ display: 'inline-block' }}>
            <Form.Item label="" name="upperLimit">
              <Input style={{ width: 68 }} />
            </Form.Item>
          </div>
        </div>

        <div style={{ paddingBottom: 8 }}>其他</div>
        <Form.Item label="" name="otherOptions">
          <Checkbox.Group style={{ width: 312 }}>
            <Checkbox value="isRequired">必填</Checkbox>
            <Checkbox value="isPreview">预览</Checkbox>
            <Checkbox value="isStatistics">汇总</Checkbox>
          </Checkbox.Group>
        </Form.Item>
      </Form>
    </>
  );
};

export default React.memo(AmountConfig);
