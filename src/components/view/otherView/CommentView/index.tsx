import React, { FC } from 'react';
import Icons from '@/utils/icon';
import { WidgetOptions } from '@/pages/index.d';
import './index.less';

interface CommentViewProps {
  title: string;
  options: WidgetOptions;
}

const CommentViewComponent: FC<CommentViewProps> = (props) => {
  const { title, options } = props;

  return (
    <div className="commentWrap">
      <div className="commentTitle">
        <span>{title}</span>
        <i
          className="requiredStar"
          style={{ visibility: options?.isRequired ? 'visible' : 'hidden' }}
        >
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
