import React from 'react';

import ImageWrapper from './ImageWrapper';

import styles from '../styles/profile.module.css';

const Profile = () => {
  return (
    <>
      <div className={styles.profile_container}>
        <ImageWrapper
          src={''}
          alt={'icon image'}
          className={styles.icon_image}
        />
        <p className={styles.name}>あんず</p>
        <div className={styles.introductions}>
          <p className={styles.introductions_text}>
            React, Next.js, TypeScriptを勉強中です。
          </p>
        </div>
        <ul className={styles.url_list}>
          <li className={styles.url_list_item}>
            <a
              href={'https://github.com/perzikanz'}
              className={styles.url}
              target='_blank'
              rel='noopener noreferrer'
            >
              Git Hub
            </a>
          </li>
          <li className={styles.url_list_item}>
            <a
              href={'https://twitter.com/Perzik_anz'}
              className={styles.url}
              target='_blank'
              rel='noopener noreferrer'
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
