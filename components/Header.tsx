import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from './Header.module.css';

const Header = () => {
  const { t } = useTranslation();

  return (
        <header className={styles.header}>
            <h1>{t('title')}</h1>
        </header>
  );
};

export default Header;