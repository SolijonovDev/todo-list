import React from 'react';

import { ReactComponent as GroupSVG } from '../../assets/group.svg';
import { ReactComponent as FileSVG } from '../../assets/file.svg';
import styles from './CardBody.module.scss';

export const CardBody = props => {
  const { status = 'В приоритете', members = 5, files = 255 } = props;
  return (
    <div className={styles.cardBody}>
      <button className={styles.status}>{status}</button>
      <button className={styles.group}>
        <span className={styles.svgFile}>
          <GroupSVG />
        </span>
        <span>{members}</span>
      </button>
      <button className={styles.file}>
        <span className={styles.svgFile}>
          <FileSVG />
        </span>
        <span>{files}</span>
      </button>
    </div>
  );
};
