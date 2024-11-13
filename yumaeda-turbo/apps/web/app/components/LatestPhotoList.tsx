/**
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import styles from './component.module.css'
import Photo from '../interfaces/Photo'

interface Props {
    basePath: string
    photos: Photo[] | null
}

const LatestPhotoList: React.FC<Props> = (props) => {
    const { basePath, photos } = props

    return (
        <div>
        {
            photos?.map((photo: Photo, index: number) => (
                <div className={styles.latestImageWrapper} key={index}>
                    <picture>
                        <source type="image/webp" media="(min-width: 150px)" srcSet={`${basePath}/images/restaurants/${photo.restaurant_id}/${photo.thumbnail_webp}`} />
                        <img src={`${basePath}/images/restaurants/${photo.restaurant_id}/${photo.thumbnail}`} className={styles.latestImage} alt={`店舗写真${index}`} />
                    </picture>
                </div>
            ))
        }
        </div>
    )
}

export default LatestPhotoList
