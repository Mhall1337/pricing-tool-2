import { useState } from "react"
import SearchByLocationRadius from "./searchByLocationRadius"
import TableHead from "./tableHead"
import { GoogleMap, Marker, Circle, useLoadScript } from "@react-google-maps/api"
import { useEffect } from "react"

import {GOOGLE_MAPS_API_KEY} from "../config.js"


function Map() {
    //const [place, setPlace] = useState()
    const [shipments, setShipments] = useState([])
    const [miles, setMiles] = useState(0)
    const [location, setLocation] = useState([])
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: GOOGLE_MAPS_API_KEY,
        libraries: ["places"],
    })


    useEffect(() => {
        fetch('/locations')
            .then(r => r.json())
            .then(r => setLocation(r))
    }, [])


    if(!isLoaded) return<div>Loading...</div>
    return (
        <div>
            {/* <Places setPlace={(position)=>{
                setPlace(position)
            }}/> */}
            <GoogleMap zoom={4} center={{ lat: 41.8755616, lng: -87.6244212 }} mapContainerClassName="map-container">
                {/* ternary that conditionally renders markers */}
               {shipments.length <= 0 ?  <>{location.map((location, index) => {
                    return <Marker key={index} position={{ lat: location.latitude, lng: location.longitude }} />
                })}</>:<>{shipments.map((shipment, index)=>{                   
                    return <Marker key={index} position={{lat: shipment.origin.latitude, lng: shipment.origin.longitude}}/>
                })}</>}
                <Circle center={{ lat: 41.8755616, lng: -87.6244212 }} radius={miles * 1609.34} />
            </GoogleMap>
            <SearchByLocationRadius setShipments={setShipments} miles={miles} setMiles={setMiles} />
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