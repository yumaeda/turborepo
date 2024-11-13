import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LatestPhotoList from "./components/LatestPhotoList";
import Photo from "./interfaces/Photo";
import { API_URL, IMG_URL } from "./config/constants";

export default async function Home() {
  let data = await fetch(`${API_URL}/latest-photos/`)
  let posts = await data.json()
  const photos: Photo[] = JSON.parse(JSON.stringify(posts.body))

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <LatestPhotoList basePath={IMG_URL} photos={photos} />
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
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
          Go to nextjs.org →
        </a>
        <Footer />
      </footer>
    </div>
  );
}
