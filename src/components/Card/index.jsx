import React from 'react';

import { CardBody } from './CardBody';
import { CardHeader } from './CardHeader';
import { CardFooter } from './CardFooter';

import styles from './Card.module.scss';

export const Card = () => {
  return (
    <div className={styles.card}>
      <CardHeader />
      <CardBody />
      <CardFooter />
    </div>
  );
};
