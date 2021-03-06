import {useLoadScript, GoogleMap, Marker, Circle} from "@react-google-maps/api"
import { useEffect } from "react"
import { useState } from "react"
import NEXT_PUBLIC_GOOGLE_MAPS_API_KEY from "./.env.local"


export default function TestMap(){
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        libraries: ["places"],
    })
    

    if(!isLoaded) return<div>Loading...</div>
    return(
        <div> <NewMap /> </div>
    )
}

function NewMap(){
    const [location, setLocation] = useState([])
    console.log(location.map(lo => lo))
    useEffect(()=>{
        fetch('/locations')
        .then(r=> r.json())
        .then(r => setLocation(r))
    },[])
    return (
    <GoogleMap zoom={5} center={{lat: 41.8755616, lng: -87.6244212}} mapContainerClassName="map-container">
        {location.map((location, index) =>{
           return <Marker key={index} position={{lat: location.latitude, lng: location.longitude}} />
        })}
        <Circle center={{lat: 41.8755616, lng: -87.6244212}} radius={500000}/>
    </GoogleMap>
    )
}