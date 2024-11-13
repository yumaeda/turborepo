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
      <Footer />
    </div>
  );
}
