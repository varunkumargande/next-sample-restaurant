import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [subDomain, setSubDomain] = useState<string | undefined>();

  useEffect(() => {
    const url = window.location.host;
    const value = url.split('.')[0];
    setSubDomain(value);
  }, [typeof window]);

  return (
    <>
      <Head>
        <title>Life Bonus</title>
        <meta
          name="description"
          content="The future of preventive health care."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <h1
          style={{
            margin: '0px 8px',
            fontSize: '65px',
            textTransform: 'capitalize',
          }}
        >
          Hello {subDomain}
        </h1>
        <div className={styles.center}>
        <h1
          style={{
            margin: '0px 16px',
            fontSize: '65px',
            textTransform: 'capitalize',
          }}
        >
          Welcome to my 
        </h1>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <Link className={styles.card} href={'/categories'}>
            <h2 className={inter.className}>
              Categories <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </Link>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
