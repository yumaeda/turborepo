/**
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import Photo from '../../interfaces/Photo'
import { API_URL, IMG_URL } from '../../config/constants'

interface Props {
    restaurantId: string
}

const DishPhotoList = async (props: Props) => {
    const { restaurantId } = props
    const restaurantImageDir = `${IMG_URL}/images/restaurants/${restaurantId}`

    let data = await fetch(`${API_URL}/photos/${restaurantId}`)
    let posts = await data.json()
    const photos: Photo[] = JSON.parse(JSON.stringify(posts.body))

    return (
        <div className="dish-image-list">
            <div className="dish-image-grid">
                {photos.map((photo: Photo, index: number) => (
                    <picture>
                        <source type="image/webp" media="(min-width: 150px)" srcSet={`${restaurantImageDir}/${photo.thumbnail_webp}`} />
                        <img src={`${restaurantImageDir}/${photo.thumbnail}`} className="tile-image dish-image" alt={`店舗写真${index}`} />
                    </picture>
                ))}
            </div>
        </div>
    )
}

export default DishPhotoList
