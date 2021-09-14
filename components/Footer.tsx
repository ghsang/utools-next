import React from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <p>
        <Link
          href='/brands/utools/all/1'
          locale='ko'
        >한국어</Link>
        &nbsp;&#183;&nbsp;
        <Link
          href='/brands/utools/all/1'
          locale='en'
        >English</Link>
      </p>
      <p>
        {t('contact')}
        <br />
        {t('company')}
      </p>
      <p>COPYRIGHT © UTOOLS.CO.KR. ALL RIGHTS RESERVED.</p>
    </footer>
  );
};

export default Footer;