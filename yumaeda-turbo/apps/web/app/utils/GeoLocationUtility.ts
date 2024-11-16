const DEFAULT_LATITUDE = '35.761921'
const DEFAULT_LONGITUDE = '139.7054278'

const getCurrentPosition = (options?: PositionOptions): Promise<GeolocationPosition> => {
    return new Promise((resolve, reject) => 
        navigator.geolocation.getCurrentPosition(resolve, reject, options)
    )
}

const getLatitude = (): string => {
    // TODO: Get latitude from the cookie
    return DEFAULT_LATITUDE
}

const getLongitude = (): string => {
    // TODO: Get longitude from the cookie
    return DEFAULT_LONGITUDE
}

const handleGeolocationError = (error: GeolocationPositionError) => {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert(`PERMISSION_DENIED: ${error.message}`)
            break
        case error.POSITION_UNAVAILABLE:
            alert(`POSITION_UNAVAILABLE: ${error.message}`)
            break
        case error.TIMEOUT:
            alert(`TIMEOUT: ${error.message}`)
            break
        default:
            alert('Unknown Error')
    }
}

export { getCurrentPosition, getLatitude, getLongitude, handleGeolocationError }
