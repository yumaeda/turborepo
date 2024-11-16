import styles from "./page.module.css";
import PhotoList from "./components/PhotoList/PhotoList";
import Photo from "./interfaces/Photo";
import { API_URL, IMG_URL } from "./config/constants";

export default async function Home() {
  let data = await fetch(`${API_URL}/latest-photos/`)
  let posts = await data.json()
  const photos: Photo[] = JSON.parse(JSON.stringify(posts.body))

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <PhotoList basePath={IMG_URL} photos={photos} />
      </main>
    </div>
  );
}
