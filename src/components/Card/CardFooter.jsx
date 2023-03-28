import React from 'react';

import photo from '../../assets/img1.png';
import styles from './CardFooter.module.scss';

export const CardFooter = props => {
  const { src, profession = 'Рекруитер', name = 'Theresa Webb' } = props;
  return (
    <div className={styles.cardFooter}>
      <div className={styles.photo}>
        <img src={photo} alt="photo" />
      </div>
      <div className={styles.info}>
        <p className={styles.profession}>{profession}</p>
        <p className={styles.name}>{name}</p>
      </div>
    </div>
  );
};
