import {useLoadScript, GoogleMap, Marker} from "@react-google-maps/api"
import Map from "./map"


export default function TestMap(){
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyD8C3G6NEH8_pqEOdEl6rSbT99Otnzh0y8",
        libraries: ["places"],
    })

    if(!isLoaded) return<div>Loading...</div>
    return(
        <div> <NewMap /> </div>
    )
}

function NewMap(){
    return (
    <GoogleMap zoom={5} center={{lat: 44, lng: -80}} mapContainerClassName="map-container">
        <Marker position={{lat: 44, lng: -80}}/>
    </GoogleMap>
    )
}