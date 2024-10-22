import styles from "../page.module.css"
import Footer from "../components/Footer"
import Header from "../components/Header"

export default function AdminHome() {
    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.main}>
                <h1>Hello, Admin!</h1>
            </main>
            <Footer />
        </div>
    )
}
