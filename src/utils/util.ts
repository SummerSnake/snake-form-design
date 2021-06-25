import { DraggableLocation, DroppableId } from 'react-beautiful-dnd';
import { Widget } from '@/pages/formDesign/index.d';

interface resultType {
  [key: string]: number;
}

/**
 * @desc 排序
 * @param { Widget[] } list
 * @param { number } startIndex
 * @param { number } endIndex
 * @return { Widget[] }
 */
export const reorder = (
  list: Widget[],
  startIndex: number,
  endIndex: number,
) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * @desc 复制
 * @param { Widget[] } source
 * @param { Widget[] } destination
 * @param { DraggableLocation | undefined } droppableSource
 * @param { DraggableLocation } droppableDestination
 * @param { string } id
 * @return { Widget[] }
 */
const copy = (
  source: Widget[],
  destination: Widget[],
  droppableSource: DraggableLocation,
  droppableDestination: DraggableLocation,
  id: string,
) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const item = sourceClone[droppableSource.index];

  destClone.splice(droppableDestination.index, 0, { ...item, id });
  return destClone;
};

/**
 * @desc 移动
 * @param { Widget[] } source
 * @param { Widget[] } destination
 * @param { DraggableLocation | undefined } droppableSource
 * @param { DraggableLocation } droppableDestination
 * @return { Widget[] }
 */
const move = (
  source: Widget[],
  destination: Widget[],
  droppableSource: DraggableLocation,
  droppableDestination: DraggableLocation,
) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  (result as resultType)[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};
