import React, { FC, useState, useEffect, CSSProperties } from 'react';
import { Form, Input, Checkbox } from 'antd';

import _store from '@utils/dva';
import Icons from '@utils/icon';
import { cloneMidList, setErrorMsg } from '@utils/util';
import { TreeDataType, Widget, WidgetOptions, OptionsElement } from '@/pages/index.d';

import SelectTreeModal from './SelectTreeModal';

const divStyle = (index: number): React.CSSProperties => ({
  display: 'inline-block',
  position: 'relative',
  width: '140px',
  height: '32px',
  marginRight: index % 2 === 0 ? '24px' : 0,
  marginBottom: '10px',
  lineHeight: '32px',
  textAlign: 'center',
  border: '1px solid #d9d9d9',
  borderRadius: '4px',
});

const titleStyle: React.CSSProperties = {
  display: 'inline-block',
  width: '100px',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
};

const spanStyle: CSSProperties = {
  position: 'absolute',
  top: 0,
  right: 0,
  transform: 'translate(50%, -50%)',
  cursor: 'pointer',
};

interface AssociateConfigProps {
  activeIndex: number;
  treeData: TreeDataType[];
}

const AssociateConfig: FC<AssociateConfigProps> = (props) => {
  const { dispatch } = _store;

  const [form] = Form.useForm();
  const { activeIndex, treeData } = props;

  const initMiddleArr = cloneMidList();
  const initWidgetData: Widget = initMiddleArr[activeIndex];
  const { options: initOptions }: { options: WidgetOptions } = initWidgetData;

  const [initElements, setInitElements] = useState<OptionsElement[]>(initOptions?.elements || []);
  const [isModalShow, setIsModalShow] = useState(0); // 选择流程弹窗

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
   * @desc elements 添加/减少子项
   * @param { string } sign
   * @param { number } index
   * @param { TreeDataType[] } selectedNodes
   * @return { void }
   */
  const handleUpdateElements = (
    sign: string,
    index?: number,
    selectedNodes?: TreeDataType[]
  ): void => {
    let elemArr = getElementsList();

    if (sign === 'add') {
      const arr: OptionsElement[] = [];
      for (let item of selectedNodes as TreeDataType[]) {
        arr.push({ id: item.key, title: item.title });
      }

      elemArr = arr;
    } else {
      elemArr.splice(index as number, 1);
    }

    const middleArr = cloneMidList();
    const widgetData: Widget = middleArr[activeIndex];
    const idArr = elemArr.map((item) => item?.id);

    middleArr[activeIndex] = {
      ...widgetData,
      options: {
        ...widgetData.options,
        elements: [...elemArr],
        apiParams: JSON.stringify(idArr),
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
        isOnlyRelatedComplete: formData.isOnlyRelatedComplete ? 1 : 0,
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
   * @desc 选择关联流程
   */
  const handleSelectAssociate = (selectedNodes?: TreeDataType[]) => {
    if (selectedNodes) {
      handleUpdateElements('add', 0, selectedNodes);
    }

    setIsModalShow(0);
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
      isOnlyRelatedComplete: !!initOptions?.isOnlyRelatedComplete,
      otherOptions: arr,
    });

    setErrorMsg(form, initWidgetData);
  }, [activeIndex]);

  return (
    <>
      <Form
        form={form}
        id="AssociateConfig"
        layout="vertical"
        onValuesChange={handleFormChange}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
      >
        <div className="configTitleWrap">
          <p className="configTitle">成员 (单成员)</p>
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

        <Form.Item label="" name="isOnlyRelatedComplete" valuePropName="checked">
          <Checkbox style={{ width: 312 }}>仅关联已完成的流程</Checkbox>
        </Form.Item>

        <>
          {Array.isArray(initElements) &&
            initElements.map((item, index) => (
              <div key={item.id} style={divStyle(index)}>
                <span style={titleStyle}>{item.title}</span>

                <span style={spanStyle} onClick={() => handleUpdateElements('reduce', index)}>
                  {Icons.reduceIcon({ fontSize: 18, color: '#f04134' })}
                </span>
              </div>
            ))}

          <div
            onClick={() => setIsModalShow(1)}
            style={{ marginBottom: 20, cursor: 'pointer', color: '#40a9ff' }}
          >
            <span style={{ verticalAlign: 'middle', marginRight: 4 }}>
              {Icons.plusIcon({ fontSize: 18, color: '#108ee9' })}
            </span>

            <span style={{ verticalAlign: 'middle' }}>选择关联流程</span>
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

      {!!isModalShow && (
        <SelectTreeModal
          isShow={!!isModalShow}
          onSubmit={handleSelectAssociate}
          treeData={treeData}
          checkedNodes={initElements.map((item) => ({ key: item.id, title: item.title }))}
        />
      )}
    </>
  );
};

export default React.memo(AssociateConfig);
