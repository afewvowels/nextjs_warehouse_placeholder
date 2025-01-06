import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Home Inventory</h1>
        <ol>
          <li>Organize</li>
          <li>Categorize</li>
          <li>Store</li>
        </ol>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://alienherald.earth/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          AlienHerald
        </a>
        <p>Created 2025</p>
      </footer>
    </div>
  );
}
