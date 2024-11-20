import Restaurant from '../interfaces/Restaurant';
import RestaurantList from '../components/RestaurantList/RestaurantList';
import { API_URL } from '../config/constants'
import { getLatitude, getLongitude } from '../utils/GeoLocationUtility'

interface Props {
    params: {
        areaName: string;
    };
}

const AreaPage = async (props: Props) => {
    const { areaName } = props.params
    const latitude = getLatitude()
    const longitude = getLongitude()

    let data = await fetch(`${API_URL}/restaurants/areas/${areaName}/${latitude}/${longitude}`)
    let posts = await data.json()
    const restaurants: Restaurant[] = JSON.parse(JSON.stringify(posts.body))
    console.dir(restaurants)

    return (
        <div className="contents">
            <h1>{areaName}</h1>
            <RestaurantList restaurants={restaurants} />
        </div> 
    )
}

export default AreaPage
