import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import { Column } from '../Column';

import { initialData } from '../../fake-data/data';
import styles from './Board.module.scss';

export const Board = () => {
  const [columns, setColumns] = useState(initialData);

  const onDragEnd = result => {
    if (!result.destination) return;
    const { source, destination } = result;

    const sourceDroppableId = source.droppableId;
    const destinationDroppableId = destination.droppableId;
    const sourceIndex = source.index;
    const destinationIndex = destination.index;

    if (sourceDroppableId !== destinationDroppableId) {
      const sourceColumn = columns[sourceDroppableId];
      const sourceItems = [...sourceColumn.items];
      const destinationColumn = columns[destinationDroppableId];
      const destinationItems = [...destinationColumn.items];
      const [removed] = sourceItems.splice(sourceIndex, 1);
      destinationItems.splice(destinationIndex, 0, removed);

      setColumns({
        ...columns,
        [sourceDroppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destinationDroppableId]: {
          ...destinationColumn,
          items: destinationItems,
        },
      });
    } else {
      const column = columns[destinationDroppableId];
      const items = [...column.items];

      const [removed] = items.splice(sourceIndex, 1);
      items.splice(destinationIndex, 0, removed);
      setColumns({
        ...columns,
        [destinationDroppableId]: {
          ...column,
          items,
        },
      });
    }
  };

  return (
    <div className={styles.board}>
      <h2 className={styles.title}>Заявки 16</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className={styles.taskPanel}>
          {Object.entries(columns).map(([columnKey, column]) => (
            <Column
              key={columnKey}
              title={column.title}
              items={column.items}
              droppableId={columnKey}
            />
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};
