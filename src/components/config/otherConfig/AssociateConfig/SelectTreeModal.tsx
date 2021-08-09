import React, { FC, useCallback, useState } from 'react';
import { Modal, Input, Tree, Empty } from 'antd';
import './index.less';

export interface treeDataType {
  key: string;
  title: string;
  children?: treeDataType[];
}
interface SelectTreeModalProps {
  isShow: boolean;
  onSubmit: (selectedNodes?: treeDataType[]) => void;
  treeData: treeDataType[];
  checkedNodes: treeDataType[];
}

const SelectTreeModal: FC<SelectTreeModalProps> = (props) => {
  const { isShow, onSubmit, treeData, checkedNodes = [] } = props;

  const [selectedNodes, setSelectedNodes] = useState<treeDataType[]>(checkedNodes); // 选中项数组
  const [searchTxt, setSearchTxt] = useState<string>(''); // 搜索值
  const [searchList, setSearchList] = useState<treeDataType[]>([]); // 搜索结果列表

  /**
   * @desc 搜索事件
   */
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value = '' } = e?.target;
    setSearchTxt(value);

    const arr: treeDataType[] = [];
    const queue = treeData;
    let i = 0;
    while (i < queue.length) {
      if (queue[i]?.title === value) {
        arr.push(queue[i]);
      }
      if (Array.isArray(queue[i]?.children) && (queue[i].children as treeDataType[]).length > 0) {
        queue.push(...(queue[i].children as treeDataType[]));
      }

      i++;
    }

    setSearchList(arr);
  };

  /**
   * @desc 数据为树时 选中节点事件
   */
  const handleSelectTreeNode = useCallback((checkedKeys, e) => {
    setSelectedNodes(e.checkedNodes);
  }, []);

  /**
   * @desc 移除选中的节点
   */
  const handleRemoveItem = useCallback(
    (node) => {
      const selectedList = selectedNodes.filter((selectedNode) => selectedNode.key !== node.key);
      setSelectedNodes(selectedList);
    },
    [selectedNodes]
  );

  /**
   * @desc 数据为列表时 选中节点事件
   */
  const handleSelectItem = (node: treeDataType) => {
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
        <div className="selectPart">
          <Input placeholder="搜索" prefix={<i />} value={searchTxt} onChange={handleSearch} />
          {Array.isArray(searchList) && searchList.length === 0 ? (
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
                <div className="searchResultsContainer">
                  {searchList.map((item) => (
                    <React.Fragment key={item.key}>
                      {Array.isArray(item?.children) && item.children.length > 0 ? (
                        <div
                          className={`searchResultsParentItem ${
                            selectedNodes.map((item) => item.key).includes(item.key)
                              ? 'searchResultsParentItemSelected'
                              : null
                          }}`}
                          onClick={() => handleSelectItem(item)}
                        >
                          <i style={{ marginLeft: 24, marginRight: 6 }} />
                          {item.title}
                        </div>
                      ) : (
                        <div
                          className={`searchResultsChildItem ${
                            selectedNodes.map((item) => item.key)?.includes(item.key)
                              ? 'searchResultsParentItemSelected'
                              : null
                          }}`}
                          onClick={() => handleSelectItem(item)}
                        >
                          <div className="searchResultsChildItemBody">
                            <span>{item.title}</span>
                          </div>
                        </div>
                      )}
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
              <div className="selectPartTitle">{`已选${selectedNodes.length}/5项：`}</div>
              {selectedNodes.map((node) => (
                <div className="selectedItem" key={node.key}>
                  <div>
                    <span style={{ marginRight: '8px' }} />
                    {node.title}
                  </div>
                  <span className="uncheckButton" onClick={() => handleRemoveItem(node)} />
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
