import { useEffect, useState } from "react"
import SearchBar from "./searchBar"
import TableHead from "./tableHead"

function Shipments() {  
    const [shipments, setShipments] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/shipments')
            .then(r => r.json())
            .then(r => setShipments(r))
            .catch(error => console.log(error))
    }, [])
    
    
    return (
        <div>
            <h3>Shipments</h3>
            <SearchBar setShipments={setShipments} shipments={shipments}/>
            <table className='grid-container'>
                <TableHead setShipments={setShipments} shipments={shipments}/>
                <tbody>
                    {shipments.map((shipment, index) => {
                        const { commodity, carrier, dispatcher, miles, rate, destination, origin } = shipment
                        return (
                            <tr key={index}>
                                <td>{origin.city}</td>
                                <td>{origin.state_abbr}</td>
                                <td>{commodity}</td>
                                <td>{carrier.carrier_name}</td>
                                <td>{destination.city}</td>
                                <td>{destination.state_abbr}</td>
                                <td>{miles}</td>
                                <td>{rate}</td>
                                <td>{dispatcher.dispatcher_name}</td>
                                <td>{dispatcher.dispatcher_phone_number}</td>
                                <td>{dispatcher.email}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default Shipments