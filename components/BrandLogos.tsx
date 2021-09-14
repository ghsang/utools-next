import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { fetchBrands } from '../commands';
import styles from './BrandLogos.module.css';
import type { Brand } from '../typings';
import Link from 'next/link';

type BrandLogosProps = {
  brandCode: string;
  selectBrandCode: (a: string) => () => void;
};

const BrandLogos = ({ brandCode, selectBrandCode }: BrandLogosProps) => {

  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    (async () => {setBrands(await fetchBrands());})();
  }, []);

  return (
    <ul className={styles.brandLogos}>{brands.map((b) => (
      <li
        key={b.code}
        className={brandCode === b.code ? styles.activeBrand : ''}
      >
        <Link href={`/brands/${b.code}/all/1`} passHref={true}>
          <Image
            src={require('../public' + b.src)}
            alt={b.code}
            onClick={selectBrandCode(b.code)}
            width={200}
            height={200}
            quality={30}
            placeholder='blur'
          />
        </Link>
      </li>

    ))}</ul>
  );
};

export default BrandLogos;
