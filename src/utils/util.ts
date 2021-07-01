import { DraggableLocation, DroppableId } from 'react-beautiful-dnd';
import uuid from 'uuidv4';
import { Widget, WidgetGroup } from '@/pages/formDesign/index.d';

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
): Widget[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * @desc 复制
 * @param { WidgetGroup[] } source
 * @param { DraggableLocation | undefined } destination
 * @param { DraggableLocation | undefined } droppableSource
 * @param { DraggableLocation } droppableDestination
 * @return { Widget[] }
 */
export const copy = (
  widgets: WidgetGroup[],
  midList: Widget[],
  source: DraggableLocation,
  destination: DraggableLocation,
): Widget[] => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const item = sourceClone[droppableSource.index];

  destClone.splice(droppableDestination.index, 0, { ...item, id: uuid() });
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
export const move = (
  source: Widget[],
  destination: Widget[],
  droppableSource: DraggableLocation,
  droppableDestination: DraggableLocation,
): Widget[] => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  (result as resultType)[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};
