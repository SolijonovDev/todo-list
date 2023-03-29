import React from 'react';

import { ReactComponent as GroupSVG } from '../../assets/group.svg';
import { ReactComponent as FileSVG } from '../../assets/file.svg';
import styles from './CardBody.module.scss';

export const CardBody = props => {
  const { status, members, files } = props;
  return (
    <div className={styles.cardBody}>
      <span className={styles.status}>{status}</span>
      <span className={styles.group}>
        <span className={styles.svgFile}>
          <GroupSVG />
        </span>
        <span>{members}</span>
      </span>
      <span className={styles.file}>
        <span className={styles.svgFile}>
          <FileSVG />
        </span>
        <span>{files}</span>
      </span>
    </div>
  );
};
