import React from 'react';

import ImageWrapper from '../ImageWrapper';

import styles from '../../styles/work.module.css';

const WorkContainer = ({
  date,
  description,
  imageSrc,
}: {
  date: string;
  description: string;
  imageSrc: string;
}) => {
  return (
    <>
      <div className={styles.work_container}>
        <p className={styles.work_date}>{date}</p>
        <p className={styles.work_description}>{description}</p>
        <ImageWrapper
          src={imageSrc}
          alt={'page screenshot'}
          className={styles.work_image}
        />
      </div>
    </>
  );
};

const Work = () => {
  return (
    <div className={styles.work}>
      <h2 className={styles.component_title}>実績紹介</h2>
      <WorkContainer
        date={'2021/04'}
        description={'ダンススクールのホームページを作成しました。'}
        imageSrc={''}
      />
      <WorkContainer
        date={'2020/09'}
        description={'美容室のホームページを作成しました。'}
        imageSrc={''}
      />
    </div>
  );
};

export default Work;
