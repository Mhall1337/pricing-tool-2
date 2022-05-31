import { useState } from "react"
import SearchByLocationRadius from "./searchByLocationRadius"
import TableHead from "./tableHead"
import { GoogleMap, Marker, Circle, useLoadScript } from "@react-google-maps/api"
import { useEffect } from "react"


import React from "react"


const libraries = ["places"]

function Map() {
    //const [place, setPlace] = useState()
    const [centerCircle, setCenterCircle] = useState({lat: 41.8755616, lng: -87.6244212})
    const [originCity, setOriginCity] = useState('')
    const [originState, setOriginState] = useState('')
    const [shipments, setShipments] = useState([])
    const [miles, setMiles] = useState(0)
    const [location, setLocation] = useState([])
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    })
    const mapRef = React.useRef()
    const onMapLoad = React.useCallback((map)=>{
        mapRef.current = map
    },[])
    const panTo = React.useCallback(({lat, lng}) =>{
        mapRef.current.panTo({lat, lng})
    },[])


    useEffect(() => {
        fetch('/locations')
            .then(r => r.json())
            .then(r => setLocation(r))
    }, [])


    if(!isLoaded) return<div>Loading...</div>
    return (
        <div>
            {/* rendering the google map */}
            <GoogleMap zoom={4} center={centerCircle} mapContainerClassName="map-container" onLoad={onMapLoad}>
                {/* ternary that conditionally renders markers */}
               {shipments.length <= 0 ?  <>{location.map((location, index) => {
                    return <Marker key={index} position={{ lat: location.latitude, lng: location.longitude }} />
                })}</>:<>{shipments.map((shipment, index)=>{                   
                    return <Marker key={index} position={{lat: shipment.origin.latitude, lng: shipment.origin.longitude}}/>
                })}</>}
                <Circle center={centerCircle} radius={miles * 1609.34} />
            </GoogleMap>
            <SearchByLocationRadius panTo={panTo} setCenterCircle={setCenterCircle} setShipments={setShipments} miles={miles} setMiles={setMiles} originCity={originCity} originState={originState} setOriginCity={setOriginCity} setOriginState={setOriginState}/>
            <table className='grid-container'>
                <TableHead setShipments={setShipments} shipments={shipments} />
                <tbody>
                    {shipments.map((shipment, index) => {
                        const { commodity, carrier, dispatcher, miles, rate, destination, origin } = shipment
                        return (
                            <tr className="table-row" key={index}>
                                <td className="table-data">{origin.city}</td>
                                <td className="table-data">{origin.state_abbr}</td>
                                <td className="table-data">{commodity}</td>
                                <td className="table-data">{carrier.carrier_name}</td>
                                <td className="table-data">{destination.city}</td>
                                <td className="table-data">{destination.state_abbr}</td>
                                <td className="table-data">{miles}</td>
                                <td className="table-data">{rate}</td>
                                <td className="table-data">{dispatcher.dispatcher_name}</td>
                                <td className="table-data">{dispatcher.dispatcher_phone_number}</td>
                                <td className="table-data">{dispatcher.email}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}
export default Map  