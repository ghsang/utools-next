import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import React, { useState } from 'react';

import styles from './Nav.module.css';

const Nav = () => {
  const { t } = useTranslation();

  const [selected, setSelected] = useState('brand');

  return (
        <nav className={styles.nav}>
            <ul>
                <li 
                    className={selected === 'brand' ? styles.active : ''} 
                    onClick={() => setSelected('brand')}
                >
                    <Link href="/">{t('nav.brand')}</Link>
                </li>
                <li 
                    className={selected === 'category' ? styles.active : ''}
                    onClick={() => setSelected('category')}
                >
                    <Link href="/">{t('nav.category')}</Link>
                </li>
                <li
                    className={selected === 'new' ? styles.active : ''}
                    onClick={() => setSelected('new')}
                >
                    <Link href="/">{t('nav.new')}</Link>
                </li>
                <li
                    className={selected === 'about' ? styles.active : ''}
                    onClick={() => setSelected('about')}
                >
                    <Link href="/">{t('nav.about')}</Link>
                </li>
                <li
                    className={selected === 'notice' ? styles.active : ''}
                    onClick={() => setSelected('notice')}
                >
                    <Link href="/">{t('nav.notice')}</Link>
                </li>
                <li
                    className={selected === 'support' ? styles.active : ''}
                    onClick={() => setSelected('support')}
                >
                    <Link href="/">{t('nav.support')}</Link>
                </li>
            </ul>
        </nav >
  );
};

export default Nav;