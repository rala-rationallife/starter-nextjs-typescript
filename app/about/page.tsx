import Link from "next/link";
import styles from "./about.module.css";

export default function About() {
  return (
    <main className={styles.main}>
      <div>
        <h1>ABOUT</h1>

        <Link href="/">Home</Link>
      </div>
    </main>
  );
}
