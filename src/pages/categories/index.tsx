import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Categories.module.scss';
import { CATEGORIES } from '../../../data/dummy-data';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Categories() {
  return (
    <>
      <Head>
        <title>Categories - LB</title>
        <meta name="description" content="Listing All Categories" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/categories.png" />
      </Head>
      <main className={styles.main}>
        {CATEGORIES.map((item) => {
          return (
            <Link href={`/categories/${item.id}/meals`} key={item.id}>
              <div className={styles.gridItem} style={{backgroundColor: item.color}}>
                <h3>{item.title}</h3>
              </div>
            </Link>
          );
        })}
      </main>
    </>
  );
}
