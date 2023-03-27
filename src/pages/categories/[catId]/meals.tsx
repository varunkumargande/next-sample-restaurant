import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Categories.module.scss';
import { CATEGORIES, MEALS } from '../../../../data/dummy-data';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useLayoutEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Meals() {
  const router = useRouter();
  const [title, setTitle] = useState('...');
  const { catId } = router.query;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    if (catId)
      setTitle(
        CATEGORIES &&
          CATEGORIES.find((category) => category.id === catId)?.title
      );
  }, [catId]);

  return (
    <>
      <Head>
        <title>Meals - {title} </title>
        <meta name="description" content="Listing All Categories" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/meals.svg" />
      </Head>
      <main className={styles.main} style={{ justifyContent: 'space-between' }}>
        {displayedMeals.map((meal) => (
          <Link
            key={meal.id}
            href={{
              pathname: '/categories/[catId]/meals/[mealId]',
              query: { catId: catId, mealId: meal.id },
            }}
            style={{
              width: '25%',
              height: 'fit-content',
              margin: 16,
              borderRadius: 8,
              boxShadow:
                '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            }}
          >
            <div style={{ width: '100%', height: 233, position: 'relative' }}>
              <Image
                src={meal.imageUrl}
                alt={meal?.title}
                fill
                priority
                style={{
                  objectFit: 'cover',
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
              />
            </div>
            <h3 style={{ padding: 8 }}>{meal.title}</h3>
          </Link>
        ))}
      </main>
    </>
  );
}
