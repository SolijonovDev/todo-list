import React from 'react';

import { ReactComponent as MoreSVG } from '../../assets/more.svg';
import styles from './CardHeader.module.scss';

export const CardHeader = () => {
  return (
    <div className={styles.cardHeader}>
      <div>
        <h6 className={styles.title}>Менеджер по продажам</h6>
        <p className={styles.subTitle}>Отдел продаж</p>
      </div>
      <button>
        <MoreSVG />
      </button>
    </div>
  );
};
