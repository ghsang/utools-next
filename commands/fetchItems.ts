import type { Item } from '../typings';

const ITEMS = [
  {
    id: '1',
    src: '/images/stabila/item1.jpg',
    brand: 'stabila',
    category: {
      id: '1',
      code: 'leveler',
      name: '수평',
    },
    code: '70M',
    name: '자석 수평기 70',
  },
  {
    id: '2',
    src: '/images/stabila/item1.jpg',
    brand: 'stabila',
    category: {
      id: '1',
      code: 'leveler',
      name: '수평',
    },
    code: '70M',
    name: '자석 수평기 70',
  },
  {
    id: '3',
    src: '/images/stabila/item1.jpg',
    brand: 'stabila',
    category: {
      id: '1',
      code: 'leveler',
      name: '수평',
    },
    code: '70M',
    name: '자석 수평기 70',
  },
  {
    id: '4',
    src: '/images/stabila/item1.jpg',
    brand: 'stabila',
    category: {
      id: '1',
      code: 'leveler',
      name: '수평',
    },
    code: '70M',
    name: '자석 수평기 70',
  },
  {
    id: '5',
    src: '/images/stabila/item1.jpg',
    brand: 'stabila',
    category: {
      id: '1',
      code: 'leveler',
      name: '수평',
    },
    code: '70M',
    name: '자석 수평기 70',
  },
  {
    id: '6',
    src: '/images/stabila/item1.jpg',
    brand: 'stabila',
    category: {
      id: '1',
      code: 'leveler',
      name: '수평',
    },
    code: '70M',
    name: '자석 수평기 70',
  },
  {
    id: '7',
    src: '/images/stabila/item1.jpg',
    brand: 'stabila',
    category: {
      id: '1',
      code: 'leveler',
      name: '수평',
    },
    code: '70M',
    name: '자석 수평기 70',
  },
  {
    id: '8',
    src: '/images/stabila/item1.jpg',
    brand: 'stabila',
    category: {
      id: '1',
      code: 'leveler',
      name: '수평',
    },
    code: '70M',
    name: '자석 수평기 70',
  },
  {
    id: '9',
    src: '/images/stabila/item1.jpg',
    brand: 'stabila',
    category: {
      id: '1',
      code: 'leveler',
      name: '수평',
    },
    code: '70M',
    name: '자석 수평기 70',
  },
  {
    id: '10',
    src: '/images/stabila/item1.jpg',
    brand: 'stabila',
    category: {
      id: '1',
      code: 'leveler',
      name: '수평',
    },
    code: '70M',
    name: '자석 수평기 70',
  },
  {
    id: '11',
    src: '/images/stabila/item1.jpg',
    brand: 'stabila',
    category: {
      id: '1',
      code: 'leveler',
      name: '수평',
    },
    code: '70M',
    name: '자석 수평기 70',
  },
  {
    id: '12',
    src: '/images/stabila/item1.jpg',
    brand: 'stabila',
    category: {
      id: '1',
      code: 'leveler',
      name: '수평',
    },
    code: '70M',
    name: '자석 수평기 70',
  },
];

export const fetchItems = (
  { page, nItemsPerPage }: { page: number, nItemsPerPage: number }): Promise<Item[]> => {
  return Promise.resolve(ITEMS.slice((page - 1) * nItemsPerPage, page * nItemsPerPage));
};