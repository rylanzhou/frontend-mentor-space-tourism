import React, { PropsWithChildren, useState } from 'react';

import { Close, Hamburger, Logo } from './assets';

import { Link } from 'react-router-dom';
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
              <Link to="/">
                <strong>00</strong>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/destination">
                <strong>01</strong>
                <span>Destination</span>
              </Link>
            </li>
            <li>
              <Link to="/crew">
                <strong>02</strong>
                <span>Crew</span>
              </Link>
            </li>
            <li>
              <Link to="/technology">
                <strong>03</strong>
                <span>Technology</span>
              </Link>
            </li>
          </ul>
        </menu>

        <Hamburger className={styles['hamburger-btn']} onClick={() => setMenuVisible(true)} />
      </header>

      {props.children}
    </div>
  );
}
