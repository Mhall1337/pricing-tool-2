import { useEffect, useState } from "react"
import SearchBar from "./searchBar"
function Shipments() {
    const [shipments, setShipments] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/shipments')
            .then(r => r.json())
            .then(r => setShipments(r))
            .catch(error => console.log(error))
    }, [])

    function sort() {
     const sortedShipments = shipments.sort(function (a, b) {
            const nameA = a.carrier.carrier_name.toUpperCase()
            const nameB = b.carrier.carrier_name.toUpperCase()
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0
        })
        setShipments([...sortedShipments])
    }
    return (
        <div>
            <h3>Shipments</h3>
            <SearchBar />
            <table className='grid-container'>
                <thead>
                    <tr>
                        <th className="grid-item">Origin City</th>
                        <th className="grid-item">Origin state</th>
                        <th className="grid-item">Commodity</th>
                        <th className="grid-item" onClick={sort}>Carrier Name</th>
                        <th className="grid-item">Dest. City</th>
                        <th className="grid-item">Dest. state</th>
                        <th className="grid-item">Miles</th>
                        <th className="grid-item">Rate</th>
                        <th className="grid-item">Dispatcher Name</th>
                        <th className="grid-item">Dispatcher Phone Number</th>
                        <th className="grid-item">Dispatcher Email Address</th>
                    </tr>
                </thead>
                <tbody>
                    {shipments.map((shipment, index) => {
                        //console.log(shipment)
                        const { commodity, carrier, dispatcher, miles, rate } = shipment
                        return (
                            <tr key={index}>
                                <td>Origin City</td>
                                <td>Origin state</td>
                                <td>{commodity}</td>
                                <td>{carrier.carrier_name}</td>
                                <td>Dest City</td>
                                <td>Dest state</td>
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