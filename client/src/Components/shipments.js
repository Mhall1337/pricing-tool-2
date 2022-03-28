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
                        <div className="grid-item">
                            {shipment.commodity}
                        </div>
                        <div className="grid-item">{shipment.trailer_type}</div>
                    </div>
                )
            })}

        </div>
    )
}
export default Shipments