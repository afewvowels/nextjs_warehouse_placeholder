import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <header>
        <h1>Home Inventory</h1>
        <ul>
          <li>Home</li>
          <li>Bins</li>
          <li>Items</li>
          <li>Rooms</li>
          <li>About</li>
          <li><a href="https://demo.homeinventory.earth">Demo</a></li>
        </ul>
      </header>
      <div className={styles.main}>
        <h2>Home Inventory Website</h2>
        <ol>
          <li>Organize</li>
          <li>Categorize</li>
          <li>Store</li>
        </ol>
      </div>
      <footer className={styles.footer}>
        {/* <a
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
        </a> */}
        <p>Created 2025</p>
      </footer>
    </main>
  );
}
