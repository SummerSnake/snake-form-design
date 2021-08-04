import React, { FC } from 'react';
import Icons from '@/utils/icon';
import './index.less';

interface UploadViewProps {
  title: string;
  required: number;
}

const UploadViewComponent: FC<UploadViewProps> = (props) => {
  const { title, required } = props;

  return (
    <div className="uploadWrap">
      <div className="uploadTitle">
        <span>{title}</span>
        <i className="requiredStar" style={{ visibility: required ? 'visible' : 'hidden' }}>
          *
        </i>
      </div>

      <div className="uploadPlaceholder">{Icons.plusIcon({ fontSize: 26, color: '#8691a3' })}</div>
    </div>
  );
};

export default React.memo(UploadViewComponent);
