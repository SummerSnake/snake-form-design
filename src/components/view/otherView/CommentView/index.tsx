import React, { FC } from 'react';
import Icons from '@/utils/icon';
import './index.less';

interface CommentViewProps {
  title: string;
  required: number;
}

const CommentViewComponent: FC<CommentViewProps> = (props) => {
  const { title, required } = props;

  return (
    <div className="commentWrap">
      <div className="commentTitle">
        <span>{title}</span>
        <i className="requiredStar" style={{ visibility: !!required ? 'visible' : 'hidden' }}>
          *
        </i>

        <span className="deleteBtn">清除</span>
      </div>

      <div className="starList">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="starItem">
            <span className="starIcon">{Icons.commentIcon()}</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(CommentViewComponent);
