import React, { FC, useState } from 'react';
import { Modal, Input, Tree, Empty, message } from 'antd';

import Icons from '@/utils/icon';
import { TreeDataType } from '@/pages/index.d';
import './index.less';

interface SelectTreeModalProps {
  isShow: boolean;
  onSubmit: (selectedNodes?: TreeDataType[]) => void;
  treeData: TreeDataType[];
  checkedNodes?: TreeDataType[];
}

const SelectTreeModal: FC<SelectTreeModalProps> = (props) => {
  const { isShow, onSubmit, treeData, checkedNodes = [] } = props;

  const [selectedNodes, setSelectedNodes] = useState<TreeDataType[]>(checkedNodes); // 选中项数组
  const [searchTxt, setSearchTxt] = useState<string>(''); // 搜索值
  const [searchList, setSearchList] = useState<TreeDataType[]>([]); // 搜索结果列表

  const checkedKeys = selectedNodes.map((item) => item.key);

  /**
   * @desc 搜索事件
   * @return { void }
   */
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value = '' } = e?.target;
    setSearchTxt(value);

    const arr: TreeDataType[] = JSON.parse(JSON.stringify(searchList));
    const titleArr = arr.map((item) => item.title);
    const queue = JSON.parse(JSON.stringify(treeData));

    let i = 0;
    while (i < queue.length) {
      if (queue[i]?.title === value) {
        if (!titleArr.includes(value)) {
          arr.push(queue[i]);
        }

        break;
      }
      if (Array.isArray(queue[i]?.children) && (queue[i].children as TreeDataType[]).length > 0) {
        queue.push(...(queue[i].children as TreeDataType[]));
      }

      i++;
    }

    setSearchList(arr);
  };

  /**
   * @desc 数据为树时 选中节点事件
   * @return { void }
   */
  const handleSelectTreeNode = (_: any, checkInfo: any): void => {
    if (Array.isArray(selectedNodes) && selectedNodes.length > 4) {
      message.error('最多只能选择5项');
      return;
    }

    setSelectedNodes(checkInfo?.checkedNodes);
  };

  /**
   * @desc 移除选中的节点
   * @return { void }
   */
  const handleRemoveItem = (node: TreeDataType): void => {
    const selectedList = selectedNodes.filter((selectedNode) => selectedNode.key !== node.key);
    setSelectedNodes(selectedList);
  };

  /**
   * @desc 数据为列表时 选中节点事件
   * @return { void }
   */
  const handleSelectItem = (node: TreeDataType): void => {
    if (Array.isArray(selectedNodes) && selectedNodes.length > 5) {
      message.error('最多只能选择5项');
      return;
    }

    const selectedKeys = selectedNodes.map((item) => item.key);
    const index = selectedKeys.indexOf(node.key);

    if (index !== -1) {
      const selectedNodesClone = JSON.parse(JSON.stringify(selectedNodes));
      selectedNodesClone.splice(index, 1);
      setSelectedNodes(selectedNodesClone);
    } else {
      setSelectedNodes([...selectedNodes, node]);
    }
  };

  return (
    <Modal
      title="请选择需要关联的流程"
      visible={isShow}
      onOk={() => onSubmit(selectedNodes)}
      onCancel={() => onSubmit()}
      width={785}
      okText="确定"
      cancelText="取消"
    >
      <div className="selectTreeModalWrap">
        <div className="treeAreaWrap">
          <Input
            placeholder="搜索"
            prefix={Icons.searchIcon({ fontSize: 14, color: '#ccc' })}
            style={{ marginBottom: 12 }}
            value={searchTxt}
            onChange={handleSearch}
          />

          {!searchTxt ? (
            <>
              <Tree
                checkable
                checkStrictly
                treeData={treeData}
                checkedKeys={selectedNodes.map((item) => item.key)}
                onCheck={handleSelectTreeNode}
                height={252}
              />
            </>
          ) : (
            <>
              {Array.isArray(searchList) && searchList.length > 0 ? (
                <div className="searchResultsWrap">
                  {searchList.map((item) => (
                    <React.Fragment key={item.key}>
                      <div
                        className={`searchResultsItem ${
                          checkedKeys.includes(item.key) && 'searchResultsItemSelected'
                        }`}
                        onClick={() => handleSelectItem(item)}
                      >
                        <span style={{ paddingLeft: 4 }}>{item.title}</span>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              ) : (
                <div className="emptyStatus">
                  <Empty imageStyle={{ height: 80 }} />
                </div>
              )}
            </>
          )}
        </div>

        {/* 右侧选中项区域 */}
        <div className="selectedAreaWrap">
          {selectedNodes.length ? (
            <>
              <div className="selectAreaTitle">{`已选${selectedNodes.length}/5项：`}</div>
              {selectedNodes.map((node) => (
                <div className="selectedAreaItem" key={node.key}>
                  <span>{node.title}</span>

                  <span className="removeBtn" onClick={() => handleRemoveItem(node)}>
                    {Icons.deleteIcon({ fontSize: 14, color: '#ff7875' })}
                  </span>
                </div>
              ))}
            </>
          ) : null}
        </div>
      </div>
    </Modal>
  );
};

export default SelectTreeModal;
