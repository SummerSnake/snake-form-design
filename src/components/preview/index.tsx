import React, { FC } from 'react';
import { Modal, Form } from 'antd';
import { v4 as uuidv4 } from 'uuid';

import { Widget } from '@/pages/formDesign/index.d';
import FormItems from './FormItems';

import './index.less';

interface PreviewProps {
  midList: Widget[];
  isShow: boolean;
  handleCancel: () => void;
}

const PreviewComponent: FC<PreviewProps> = (props) => {
  const [form] = Form.useForm();
  const { midList = [], isShow, handleCancel } = props;

  /**
   * @desc 表单提交
   */
  const handleSubmit = () => {
    handleCancel();
  };

  return (
    <Modal
      title="表单预览"
      visible={isShow}
      destroyOnClose
      mask
      maskClosable={false}
      onCancel={handleCancel}
      onOk={handleSubmit}
    >
      <div className="panelWrap">
        <p className="panelTitle">信息采集表</p>

        <div className="panelContent">
          <Form form={form}>
            {Array.isArray(midList) &&
              midList.map((item) => (
                <React.Fragment key={uuidv4()}>
                  {item?.type === 'group' ? (
                    Array.isArray(item.widgetsList) &&
                    item.widgetsList.map((child) => <FormItems widgetData={child} />)
                  ) : (
                    <FormItems widgetData={item} />
                  )}
                </React.Fragment>
              ))}
          </Form>
        </div>
      </div>
    </Modal>
  );
};

export default React.memo(PreviewComponent);
