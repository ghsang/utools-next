import type { Brand } from '../typings';

export async function fetchBrands(): Promise<Brand[]> {
  return Promise.resolve([
    {
      id: '1',
      code: 'utools', 
      name: 'WOOJIN Tools',
      src: '/images/logos/utools.png',
    },
    { 
      id: '2',
      code: 'u_jin_carbide', 
      name: 'WOOJIN Carbide',
      src: '/images/logos/utools2.png',
    },
    {
      id: '3',
      code: 'stabila', 
      name: 'STABILA',
      src: '/images/logos/stabila.png',
    },
    {
      id: '4',
      code: 'kreg', 
      name: 'KREG',
      src: '/images/logos/kreg.png',
    },
    {
      id: '5',
      code: 'bessey', 
      name: 'BESSEY',
      src: '/images/logos/bessey.png',
    },
    {
      id: '6',
      code: 'helko', 
      name: 'HELKO',
      src: '/images/logos/helko.png',
    },
    {
      id: '7',
      code: 'triton', 
      name: 'TRITON',
      src: '/images/logos/triton.png',
    },
    {
      id: '8',
      code: 'great_neck', 
      name: 'GreatNeck',
      src: '/images/logos/great_neck.png',
    },
    {
      id: '9',
      code: 'rali', 
      name: 'RALI',
      src: '/images/logos/rali.png',
    },
    {
      id: '10',
      code: 'aplus', 
      name: 'APLUS',
      src: '/images/logos/aplus.png',
    },
    {
      id: '11',
      code: 'milescraft', 
      name: 'MILESCRAFT',
      src: '/images/logos/milescraft.png',
    },
    {
      id: '12',
      code: '1st_line', 
      name: '1st Line',
      src: '/images/logos/1st_line.png',
    },
    {
      id: '13',
      code: 'chu_power', 
      name: 'Chu Power',
      src: '/images/logos/chu_power.png',
    },
  ]);
}