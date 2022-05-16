import { useState } from "react"
import SearchByLocationRadius from "./searchByLocationRadius"
import TableHead from "./tableHead"
function Map() {

    const [shipments, setShipments] = useState([])

    return (
        <div>
            <iframe className="map"
                width="600"
                height="450"
                //loading="lazy"
                //allowfullscreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAqIzuqJD63roTs9NVIQz_cama-o_wk-UA
    &q=Birmingham+Zoo,Birmingham+AL">
            </iframe>
            <SearchByLocationRadius setShipments={setShipments} />
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