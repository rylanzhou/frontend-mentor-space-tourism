import React, { useState } from 'react';

import Layout from '../Layout';

import { crew } from '../data.json';

import styles from '../styles/Crew.module.scss';

export default function Crew() {
  const [currentCrew, setCurrentCrew] = useState(crew[0]);

  return (
    <Layout>
      <main className={styles.Crew}>
        <h5>
          <span>02</span>
          Meet your crew
        </h5>

        <section className={styles.content}>
          <div className={styles.photo}>
            <img src={currentCrew.images.png} alt="" />
            <div className={styles.divider}></div>
          </div>

          <div className={styles.info}>
            <ul>
              {crew.map((each) => (
                <li
                  key={each.name}
                  aria-current={each === currentCrew}
                  onClick={() => setCurrentCrew(each)}
                ></li>
              ))}
            </ul>

            <div className={styles.text}>
              <h4>{currentCrew.role}</h4>
              <h3>{currentCrew.name}</h3>

              <p>{currentCrew.bio}</p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
