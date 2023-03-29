import React from 'react';

import styles from './CardFooter.module.scss';

export const CardFooter = props => {
  const { src, profession = 'Рекруитер', name = 'Theresa Webb' } = props;
  return (
    <div className={styles.cardFooter}>
      <div className={styles.photo}>
        <img src={`${window.origin}/src/assets/${src}`} alt="photo" />
      </div>
      <div className={styles.info}>
        <p className={styles.profession}>{profession}</p>
        <p className={styles.name}>{name}</p>
      </div>
    </div>
  );
};
