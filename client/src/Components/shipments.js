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

            {shipments.map((shipment, index) => {
                return (
                    <div className='grid-container' key={index} >
                        <div className="grid-item">Commodity: {shipment.commodity}</div>
                        <div className="grid-item">Trailer Type:{shipment.trailer_type}</div>
                        <div className="grid-item">Miles:{shipment.miles}</div>
                        <div className="grid-item">Rate: {shipment.rate}</div>
                        <div className="grid-item">Driver Name: {shipment.driver_name}</div>
                        <div className="grid-item">Driver Phone Number: {shipment.driver_phone_number}</div>
                    </div>
                )
            })}

        </div>
    )
}
export default Shipments