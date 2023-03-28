import React from 'react';

import { ReactComponent as MoreSVG } from '../../assets/more.svg';
import styles from './CardHeader.module.scss';

export const CardHeader = ({ title, subTitle }) => {
  return (
    <div className={styles.cardHeader}>
      <div>
        <h6 className={styles.title}>{title}</h6>
        <p className={styles.subTitle}>{subTitle}</p>
      </div>
      <button>
        <MoreSVG />
      </button>
    </div>
  );
};
