
import styles from './page.module.css';
import { posts } from './lib/posts';

export default function Home({ allPosts }) {
  if (!allPosts || !allPosts.length) return;

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/index.js</code>
      </p>

      {allPosts.map((post) => (
        <div key={post.slug} className={styles.grid}>
          <a href={post.slug} className={styles.card}>
            <h2>{post.frontmatter.title}</h2>
            <span>{post.frontmatter.date}</span>
            <p>{post.frontmatter.description}</p>
          </a>
        </div>
      ))}
    </main>
  );
}

export async function getStaticProps() {
  const allPosts = posts();

  return {
    props: {
      allPosts,
    },
  };
}
