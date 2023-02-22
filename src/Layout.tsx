import React, { PropsWithChildren, useState } from 'react';

import { Close, Hamburger, Logo } from './assets';

import styles from './styles/Layout.module.scss';

export default function Layout(props: PropsWithChildren) {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div className={styles.Layout}>
      <header>
        <Logo />
        <menu aria-hidden={!menuVisible}>
          <Close className={styles['close-btn']} onClick={() => setMenuVisible(false)} />

          <ul>
            <li aria-current>
              <strong>00</strong>
              <span>Home</span>
            </li>
            <li>
              <strong>01</strong>
              <span>Destination</span>
            </li>
            <li>
              <strong>02</strong>
              <span>Crew</span>
            </li>
            <li>
              <strong>03</strong>
              <span>Technology</span>
            </li>
          </ul>
        </menu>

        <Hamburger className={styles['hamburger-btn']} onClick={() => setMenuVisible(true)} />
      </header>

      {props.children}
    </div>
  );
}
