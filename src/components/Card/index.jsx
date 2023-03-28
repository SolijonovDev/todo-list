import React from 'react';

import { CardBody } from './CardBody';
import { CardHeader } from './CardHeader';
import { CardFooter } from './CardFooter';

import styles from './Card.module.scss';

export const Card = ({ item, isDragging }) => {
  const { title, subTitle, status, members, files, profession, name, src } = item;
  return (
    <div className={isDragging ? `${styles.card} ${styles.dragging}` : styles.card}>
      <CardHeader title={title} subTitle={subTitle} />
      <CardBody status={status} members={members} files={files} />
      <CardFooter profession={profession} name={name} src={src} />
    </div>
  );
};
