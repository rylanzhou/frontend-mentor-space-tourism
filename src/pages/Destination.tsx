import React, { useState } from 'react';

import Layout from '../Layout';

import { destinations } from '../data.json';

import styles from '../styles/Destination.module.scss';

export default function Destination() {
  const [pickedDestination, setPickedDestination] = useState(destinations[0]);

  return (
    <Layout>
      <main className={styles.Destination}>
        <h5>
          <span>01</span>
          pick your destination
        </h5>

        <section className={styles.content}>
          <img src={pickedDestination.images.png} alt="" />

          <div className={styles.info}>
            <ul>
              {destinations.map((each) => (
                <li
                  key={each.name}
                  aria-current={each === pickedDestination}
                  onClick={() => setPickedDestination(each)}
                >
                  {each.name}
                </li>
              ))}
            </ul>

            <h2>{pickedDestination.name}</h2>
            <p>{pickedDestination.description}</p>

            <div className={styles.divider}></div>

            <div className={styles.statistics}>
              <div>
                <div className="subheading2">avg. distance</div>
                <div className="subheading1">{pickedDestination.distance}</div>
              </div>
              <div>
                <div className="subheading2">est. travel time</div>
                <div className="subheading1">{pickedDestination.travel}</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
