import { useState } from "react"
import SearchByLocationRadius from "./searchByLocationRadius"
import TableHead from "./tableHead"
import { GoogleMap, Marker, Circle } from "@react-google-maps/api"
import { useEffect } from "react"


function Map() {

    const [shipments, setShipments] = useState([])
    const [miles, setMiles] = useState(0)

    const [location, setLocation] = useState([])
    console.log(location.map(lo => lo))
    useEffect(() => {
        fetch('/locations')
            .then(r => r.json())
            .then(r => setLocation(r))
    }, [])


    return (
        <div>
            <GoogleMap zoom={5} center={{ lat: 41.8755616, lng: -87.6244212 }} mapContainerClassName="map-container">
                {location.map((location, index) => {
                    return <Marker key={index} position={{ lat: location.latitude, lng: location.longitude }} />
                })}
                <Circle center={{ lat: 41.8755616, lng: -87.6244212 }} radius={miles * 1000} />
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