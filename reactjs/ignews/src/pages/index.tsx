import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      
      <main>
        <section>
          <span>Hey, Welcome</span>
        </section>

        <img src="images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}
