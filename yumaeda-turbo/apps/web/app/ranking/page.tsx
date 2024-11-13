import styles from "../page.module.css"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import { API_URL, IMG_URL } from "../config/constants"
import Ranking from "../interfaces/Ranking"
import Image from "next/image"

export default async function RankingPage() {
    let data = await fetch(`${API_URL}/rankings/`)
    let posts = await data.json()
    const imageDir = `${IMG_URL}/images`
    const rankings: Ranking[] = JSON.parse(JSON.stringify(posts.body))

    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.main}>
                <h1>フードランキング</h1>
                <ul>
                    {rankings ? rankings.map((ranking: Ranking) => {
                        const restaurantId = ranking.restaurant_id
                        const restaurantImageDir = `${imageDir}/restaurants/${restaurantId}`
                        return (
                        <li key={`${ranking.dish}#${ranking.rank}`}>
                            <div>
                                <span>{`${ranking.dish} #${ranking.rank}`}</span>
                                <span>【</span>
                                <a href={ranking.restaurant_url} rel="nofollow noopener" target="_blank">{ranking.restaurant}</a>
                                <span>】</span><br />
                                <img src={`${restaurantImageDir}/${ranking.photo}_thumbnail.jpg`} alt={`${ranking.dish}#${ranking.rank}`} />
                            </div>
                        </li>
                        )}) : <div>Loading...</div>}
                    </ul>
            </main>
            <Footer />
        </div>
    )
}
