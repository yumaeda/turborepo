/**
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import * as GlobalConstants from '../../config/constants'
import styles from '../../page.module.css'

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <p className="header-label">{GlobalConstants.SERVICE_NAME}</p>
        </header>
    )
}

export default Header
