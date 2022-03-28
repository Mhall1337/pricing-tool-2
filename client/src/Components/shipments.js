import { useEffect, useState } from "react"

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
            <table className='grid-container'>
                            <th className="grid-item">Commodity</th>
                            <th className="grid-item">Trailer Type</th>
                            <th className="grid-item">Miles</th>
                            <th className="grid-item">Rate</th>
                            <th className="grid-item">Driver Name</th>
                            <th className="grid-item">Driver Phone Number</th>
            {shipments.map((shipment, index) => {
                return (
                 <tr key={index}>
                     <td>{shipment.commodity}</td>
                     <td>{shipment.trailer_type}</td>
                     <td>{shipment.miles}</td>
                     <td>{shipment.rate}</td>
                     <td>{shipment.driver_name}</td>
                     <td>{shipment.driver_phone_number}</td>
                 </tr>
                )
            })}
            </table>
        </div>
    )
}
export default Shipments