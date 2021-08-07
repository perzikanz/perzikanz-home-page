import React from 'react';

import styles from '../../styles/work.module.css';

const WorkContainer = ({
  date,
  description,
}: {
  date: string;
  description: string;
}) => {
  return (
    <>
      <div className={styles.work_container}>
        <p className={styles.work_date}>{date}</p>
        <p className={styles.work_description}>{description}</p>
      </div>
    </>
  );
};

const Work = () => {
  return (
    <div className={'white_container ' + styles.work}>
      <h2 className={styles.component_title}>Work</h2>
      <WorkContainer
        date={'2021/04'}
        description={'ダンススクールのホームページを作成しました'}
      />
      <WorkContainer
        date={'2020/09'}
        description={'美容室のホームページを作成しました'}
      />
    </div>
  );
};

export default Work;
