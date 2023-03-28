import React from 'react';

import { Column } from '../Column';

import styles from './Board.module.scss';

export const Board = () => {
  return (
    <div className={styles.board}>
      <h2 className={styles.title}>Заявки 22</h2>
      <div className={styles.taskPanel}>
        <Column title="Новые" items={4} />
        <Column title="Текущие" items={7} />
        <Column title="Закрытые" items={0} />
        <Column title="Архив" items={3} />
        <Column title="Удаленные" items={8} />
      </div>
    </div>
  );
};
