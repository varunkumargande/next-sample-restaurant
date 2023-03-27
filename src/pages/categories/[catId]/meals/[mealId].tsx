import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Categories.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useLayoutEffect, useState } from 'react';
import { CATEGORIES, MEALS } from '../../../../../data/dummy-data';
import Meal from '../../../../../models/meal';

const inter = Inter({ subsets: ['latin'] });

export default function Meals() {
  const router = useRouter();
  const [title, setTitle] = useState('...');
  const [selectedMeal, setSelectedMeal] = useState<Meal>();
  const { catId, mealId } = router.query;

  useLayoutEffect(() => {
    if (catId)
      setTitle(
        CATEGORIES &&
          CATEGORIES.find((category) => category.id === catId)?.title
      );
    setSelectedMeal(MEALS.find((meal) => meal.id === mealId));
  }, [catId, mealId]);

  return (
    <>
      <Head>
        <title>Meal - {selectedMeal?.title} </title>
        <meta name="description" content={`Listing ${title} MEALS`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={selectedMeal?.imageUrl} />
      </Head>
      <main className={styles.main}>
        <Image
          src={selectedMeal?.imageUrl}
          alt={selectedMeal?.title}
          width={500}
          height={300}
          priority
        />
        <div style={{ padding: 16 }}>
          <h3>{selectedMeal?.title}</h3>
          <p>Duration: {selectedMeal?.duration} M</p>
          <p>Complexity: {selectedMeal?.complexity}</p>
          <p>Affordability: {selectedMeal?.affordability}</p>
          <p>Ingredients: {selectedMeal?.ingredients}</p>
          <p>Steps: {selectedMeal?.steps}</p>
        </div>
      </main>
    </>
  );
}
