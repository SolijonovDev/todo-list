import React from 'react';

import { Card } from '../Card';

import { ReactComponent as AddFilesSVG } from '../../assets/add-files.svg';
import styles from './Column.module.scss';

export const Column = props => {
  const { title, items } = props;
  return (
    <div className={styles.column}>
      <div className={styles.columnHeader}>
        <h4>
          {title} {items}
        </h4>
      </div>
      {items == 0 ? (
        <div className={styles.emptyColumn}>
          <AddFilesSVG />
          <p className={styles.text}>Если есть подходящие заявки, перетащите их сюда 🤓</p>
        </div>
      ) : (
        <div className={styles.columnBody}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      )}
    </div>
  );
};
