import { Brand } from '../typings';

export const fetchBrand = async (): Promise<Brand> => {
  return Promise.resolve({
    id: '1', 
    code: 'utools', 
    name: '우진툴', 
    src: '', 
    categories: [{ id: '1', code: 'leveler', name: '수평' }],
  });
};