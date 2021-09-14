import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Pagination from '@material-ui/lab/Pagination';
import type { Item } from '../typings';
import styles from './ItemTable.module.css';

const ITEMS_PER_PAGE = 12;

type ItemTableProps = {
  fetchItems: (
    { page, nItemsPerPage }: { page: number, nItemsPerPage: number }) => Promise<Item[]>
};

const ItemTable = ({ fetchItems }: ItemTableProps) => {
  const [page, setPage] = useState(1);

  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetch = async () => {
      setItems(await fetchItems({ 
        page, nItemsPerPage: ITEMS_PER_PAGE }));
    };

    fetch();
  }, [page, fetchItems]);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div className={styles.shelf}>
      <ul className={styles.itemTable}>
        {items.map(i => 
          <li key={i.id}>
            <Image
              src={require('../public' + i.src)}
              alt={i.name}
              width={220}
              height={170}
              quality={40}
              placeholder='blur'
            />
            <span className={styles.itemCode}><a>{i.code}</a></span>
            <span className={styles.itemName}>{i.name}</span>
          </li>,
        )}
      </ul>
      <Pagination 
        className={styles.pagination} 
        shape="rounded"
        count={Math.ceil(items.length / ITEMS_PER_PAGE)} 
        onChange={handleChange}
      />
    </div>
  );
};

export default ItemTable;