import React, { useState } from 'react';

import Layout from '../Layout';

import { technology } from '../data.json';

import styles from '../styles/Technology.module.scss';

export default function Technology() {
  const [selectedTechnology, setSelectedTechnology] = useState(technology[0]);

  return (
    <Layout>
      <main className={styles.Technology}>
        <h5>
          <span>03</span>
          Space launch 101
        </h5>

        <section className={styles.content}>
          <div className={styles.photo}>
            <img className={styles.landscape} src={selectedTechnology.images.landscape} alt="" />
            <img className={styles.portrait} src={selectedTechnology.images.portrait} alt="" />
          </div>

          <div className={styles.info}>
            <ul>
              {technology.map((each, index) => (
                <li
                  key={each.name}
                  aria-current={each === selectedTechnology}
                  onClick={() => setSelectedTechnology(each)}
                >
                  {index + 1}
                </li>
              ))}
            </ul>

            <div className={styles.text}>
              <span>The terminology...</span>
              <h3>{selectedTechnology.name}</h3>
              <p>{selectedTechnology.description}</p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
