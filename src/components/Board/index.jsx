import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import { Column } from '../Column';
import { useTodos } from '../../context/TodoProvider';

import styles from './Board.module.scss';

export const Board = () => {
  const { todos } = useTodos();

  const onDragEnd = value => {
    console.log('ondragend', value);
  };

  return (
    <div className={styles.board}>
      <h2 className={styles.title}>Заявки 22</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className={styles.taskPanel}>
          <Column title="Новые" items={todos['new']} droppableId="new" />
          <Column title="Текущие" items={todos['current'] ?? []} droppableId="current" />
          <Column title="Закрытые" items={todos['closed'] ?? []} droppableId="closed" />
          <Column title="Архив" items={todos['archive'] ?? []} droppableId="archive" />
          <Column title="Удаленные" items={todos['deleted'] ?? []} droppableId="deleted" />
        </div>
      </DragDropContext>
    </div>
  );
};

// const onDragEnd = (result, columns, setColumns) => {
//   if (!result.destination) return;
//   const { source, destination } = result;
//   if (source.droppableId !== destination.droppableId) {
//     const sourceColumn = columns[source.droppableId];
//     const destColumn = columns[destination.droppableId];
//     const sourceItems = [...sourceColumn.items];
//     const destItems = [...destColumn.items];
//     const [removed] = sourceItems.splice(source.index, 1);
//     destItems.splice(destination.index, 0, removed);
//     setColumns({
//       ...columns,
//       [source.droppableId]: {
//         ...sourceColumn,
//         items: sourceItems,
//       },
//       [destination.droppableId]: {
//         ...destColumn,
//         items: destItems,
//       },
//     });
//   } else {
//     const column = columns[source.droppableId];
//     const copiedItems = [...column.items];
//     const [removed] = copiedItems.splice(source.index, 1);
//     copiedItems.splice(destination.index, 0, removed);
//     setColumns({
//       ...columns,
//       [source.droppableId]: {
//         ...column,
//         items: copiedItems,
//       },
//     });
//   }
// };
