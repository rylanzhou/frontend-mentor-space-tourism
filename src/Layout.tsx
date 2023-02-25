import React, { PropsWithChildren, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Close, Hamburger, Logo } from './assets';

import styles from './styles/Layout.module.scss';

export default function Layout(props: PropsWithChildren) {
  const [menuVisible, setMenuVisible] = useState(false);
  const location = useLocation();

  return (
    <div className={styles.Layout} aria-label={location.pathname}>
      <header>
        <Logo />
        <menu aria-hidden={!menuVisible}>
          <Close className={styles['close-btn']} onClick={() => setMenuVisible(false)} />

          <ul>
            {['home', 'destination', 'crew', 'technology'].map((each, index) => (
              <li key={index} aria-current={'/' + each === location.pathname}>
                <Link to={'/' + each}>
                  <strong>0{index}</strong>
                  <span>{each}</span>
                </Link>
              </li>
            ))}
          </ul>
        </menu>

        <Hamburger className={styles['hamburger-btn']} onClick={() => setMenuVisible(true)} />
      </header>

      {props.children}
    </div>
  );
}
