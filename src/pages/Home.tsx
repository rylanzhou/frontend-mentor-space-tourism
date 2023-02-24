import React from 'react';

import Layout from '../Layout';

import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <Layout>
      <section className={styles.Home}>
        <div className={styles.text}>
          <h5>So, you want to travel to</h5>
          <h1>Space</h1>
          <p>
            {
              " Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!  "
            }
          </p>
        </div>

        <div className={styles['launch-btn']}>Explore</div>
      </section>
    </Layout>
  );
}
