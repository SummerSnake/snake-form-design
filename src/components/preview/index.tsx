import React, { FC } from 'react';
import { Modal } from 'antd';

import { Widget } from '@/pages/formDesign/index.d';

import './index.less';

interface PreviewProps {
  midList: Widget[];
  isShow: boolean;
  handleCancel: () => void;
}

const PreviewComponent: FC<PreviewProps> = (props) => {
  const { midList = [], isShow, handleCancel } = props;

  return (
    <Modal
      title="表单预览"
      visible={isShow}
      destroyOnClose
      mask
      maskClosable={false}
      footer={null}
      onCancel={handleCancel}
    >
      <div className="panelWrap">
        <p className="panelTitle">信息采集表</p>

        <div className="panelContent">
          {midList.map((item, index) => (
            <div></div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default React.memo(PreviewComponent);
