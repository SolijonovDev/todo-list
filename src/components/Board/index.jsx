import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import { Column } from '../Column';

import styles from './Board.module.scss';

export const Board = () => {
  const onDragEnd = value => {
    console.log('ondragend', value);
  };
  return (
    <div className={styles.board}>
      <h2 className={styles.title}>Заявки 22</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className={styles.taskPanel}>
          <Column title="Новые" items={4} />
          <Column title="Текущие" items={7} />
          <Column title="Закрытые" items={0} />
          <Column title="Архив" items={3} />
          <Column title="Удаленные" items={8} />
        </div>
      </DragDropContext>
    </div>
  );
};
