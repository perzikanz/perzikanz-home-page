import React from 'react';

import styles from '../../styles/work.module.css';

const WorkContainer = ({
  date,
  description,
  link,
}: {
  date: string;
  description: string;
  link: string;
}) => {
  return (
    <>
      <div className={styles.work_container}>
        <p className={styles.work_date}>{date}</p>
        <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          className={styles.work_link_anchor}
        >
          <p className={styles.work_description}>{description}</p>
        </a>
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
        description={'ダンススクールe-DOPAのホームページを作成しました'}
        link={'https://e-dopa.com/'}
      />
      <WorkContainer
        date={'2020/09'}
        description={'美容室Hair Space gabのホームページを作成しました'}
        link={'http://hairspace-gab.com/'}
      />
    </div>
  );
};

export default Work;
