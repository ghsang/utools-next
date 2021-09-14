import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from './BrandCategories.module.css';
import type { Brand } from '../typings';

type BrandCategoriesProps = {
  brand: Brand;
  category: string;
  selectCategory: (c: string) => () => void;
};

const BrandCategories = (
  { brand, category, selectCategory }: BrandCategoriesProps,
) => {
  const { t } = useTranslation();
  
  return (
    <nav className={styles.brandCategories}>
      <h2>{brand.name}</h2>
      <ul>
        {[{ id: '0', code: 'all', name: t('category.all') }]
          .concat(brand.categories!)
          .map((c) => 
            <li 
              key={c.id} 
              onClick={selectCategory(c.code)}
            >
              <a className={category === c.code ? styles.Active : ''}>{c.name}</a>
            </li>,
          )}
      </ul>
    </nav>
  );
};

export default BrandCategories;
