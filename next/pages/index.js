import Head from "next/head";
import WidgetCard from "../components/WidgetCard";
import styles from "../styles/Home.module.css";

export async function getServerSideProps(context) {
  const widgets = new Array(100).fill(1).map((value, index) => {
    return {
      id: index,
      title: `Widget ${index}`,
      description: `Some text that describes widget ${index}`,
    };
  });

  return {
    props: {
      widgets,
    },
  };
}

export default function Home({ widgets }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Widget Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js Widget Store!</a>
        </h1>

        <div className="cards">
          {widgets.map((widget) => {
            return (
              <WidgetCard
                key={widget.id}
                title={widget.title}
                description={widget.description}
              />
            );
          })}
        </div>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
