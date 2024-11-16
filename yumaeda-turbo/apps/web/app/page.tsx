import Link from 'next/link'
import styles from "./page.module.css";
import PhotoList from "./components/PhotoList/PhotoList";
import Photo from "./interfaces/Photo";
import RestaurantInfo from "./interfaces/RestaurantInfo";
import { API_URL, IMG_URL } from "./config/constants";
import { getLatitude, getLongitude } from "./utils/GeoLocationUtility";

export default async function Home() {
  const showAllRestaurants = false
  const latitude = getLatitude()
  const longitude = getLongitude()
  let data = await fetch(`${API_URL}/latest-photos/`)
  let posts = await data.json()
  const photos: Photo[] = JSON.parse(JSON.stringify(posts.body))

  data = await fetch(`${API_URL}/restaurant-counts/${latitude}/${longitude}`)
  posts = await data.json()
  const restaurantInfos: RestaurantInfo[] = JSON.parse(JSON.stringify(posts.body))

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <PhotoList basePath={IMG_URL} photos={photos} />
        <h4 className={styles.navigationLabel}>Area</h4>
        <ul className={styles.navigationList}>
        {
          restaurantInfos
            .filter((restaurantInfo: RestaurantInfo) => (showAllRestaurants || restaurantInfo.count > 0))
            .map((info: RestaurantInfo) => (
                <li className={styles.navigationItem} key={info.area}>
                    <span>
                        <Link className="list-item" href={`/${info.area}/`}>{`${info.name}`}</Link>
                    </span>
                </li>))
        }
        </ul>
      </main>
    </div>
  );
}
