import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import { Card } from '../Card';

import { ReactComponent as AddFilesSVG } from '../../assets/add-files.svg';
import styles from './Column.module.scss';

export const Column = props => {
  const { title, items, droppableId = 'one' } = props;
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
        <Droppable droppableId={droppableId}>
          {(provided, snapshot) => (
            <div className={styles.columnBody} {...provided.droppableProps} ref={provided.innerRef}>
              {[1, 2, 3].map((item, index) => (
                <Draggable key={index} draggableId={String(item)} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={styles.item}
                    >
                      <Card key={item} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      )}
    </div>
  );
};
