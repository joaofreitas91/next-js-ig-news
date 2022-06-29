import Head from 'next/head';

import styles from './styles.module.scss';

const products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
  { id: 2, name: 'Product 2', price: 200 },
  { id: 3, name: 'Product 3', price: 300 },
  { id: 4, name: 'Product 4', price: 400 },
  { id: 5, name: 'Product 5', price: 500 },
];

export const Products = () => (
  <>
    <Head>
      <title>Home | ig.news</title>
    </Head>
    <div className={styles.container}>
      <h1 className={styles.title}>Products <span>oi</span></h1>
      {products.map((product) => <p>{product.name}</p>)}
    </div>
  </>
);
