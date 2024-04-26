import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>CUBE</h1>

        <p>アウトプットしていくサイト</p>

        <Link href="/about">About</Link>
      </div>
    </main>
  );
}
