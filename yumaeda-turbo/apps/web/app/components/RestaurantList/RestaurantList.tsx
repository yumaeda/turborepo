/**
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import Restaurant from '../../interfaces/Restaurant'
import { API_URL } from '../../config/constants'
import Video from '../../interfaces/Video'
import Address from './Address'
import PhoneNumber from './PhoneNumber'
import RestaurantPageLink from './RestaurantPageLink'
import DishPhotoList from './DishPhotoList'
import RestaurantVideoList from './RestaurantVideoList'
import OpenHours from './OpenHours'

interface Props {
    restaurants: Restaurant[]
}

const RestaurantList = async (props: Props) => {
    const { restaurants } = props
    const showAllRestaurants = true
    let data = await fetch(`${API_URL}/videos/`)
    let posts = await data.json()
    const videos: Video[] = JSON.parse(JSON.stringify(posts.body))

    return (
        <ul className="shop-list">
        {
            restaurants
                .filter((restaurant: Restaurant) => (showAllRestaurants || (restaurant.isOpen == 1 && Number(restaurant.distance) < 5)))
                .map((openRestaurant: Restaurant) => {
                    const restaurantId = openRestaurant.id

                    return (
                        <li className="shop-item" key={restaurantId} id={restaurantId}>
                            <div className="shop-item-grid">
                                <span className="shop-genre">{openRestaurant.genre}</span>
                                <h4 className="shop-name-wrapper">
                                    <RestaurantPageLink id={restaurantId} area={openRestaurant.area} url={openRestaurant.url} name={openRestaurant.name} />
                                </h4>
                            </div>
                            <DishPhotoList restaurantId={restaurantId} />
                            <div className="shop-info">
                                <OpenHours businessDayJson={openRestaurant.businessDayInfo} />
                                <span className="distance">{ `${Number(openRestaurant.distance).toFixed(2)} km` }</span>
                                <Address text={openRestaurant.address} latitude={openRestaurant.latitude} longitude={openRestaurant.longitude} />
                                <PhoneNumber tel={openRestaurant.tel} />
                            </div>

                            <RestaurantVideoList
                                videos={ videos ? videos.filter((video: Video) => video.restaurant_id == restaurantId) : null }
                            />
                        </li>
                    )
                })
        }
        </ul>
    )
}

export default RestaurantList
