import React, { useState, useEffect } from 'react';
import BrandCategories from './BrandCategories';
import ItemTable from './ItemTable';
import { fetchItems } from '../commands';
import type { Brand } from '../typings';
import styles from './Shelf.module.css';

const Shelf = (
  { brandCode, fetchBrand }: { 
    brandCode: string,  
    fetchBrand: ({ code } : { code: string }) => Promise<Brand>
  }) => {
  const [category, setCategory] = useState('all');

  const [brand, setBrand] = useState<Brand>();

  const selectCategory = (c: string) => () => { setCategory(c);};

  useEffect(() => { 
    const fetch = async () => {
      setBrand(await fetchBrand({ code: brandCode }));
    };

    fetch();
  }, [brandCode, fetchBrand]);

  if (!brand) {
    return (<div>Loading...</div>);
  }

  return (
    <div className={styles.shelf}>
      <div className={styles.brandCategories}>
        <BrandCategories 
          brand={brand} 
          category={category} 
          selectCategory={selectCategory}
        />
      </div>
      <div className={styles.itemTable}>
        <ItemTable fetchItems={fetchItems} />
      </div>
    </div>
  );
};

export default Shelf;