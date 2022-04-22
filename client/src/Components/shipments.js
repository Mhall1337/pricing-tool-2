import { useEffect, useState } from "react"
import SearchBar from "./searchBar"
import TableHead from "./tableHead"

function Shipments() {
    const [shipments, setShipments] = useState([])
    const [filterShipments, setFilterShipments] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/shipments')
            .then(r => r.json())
            .then(r => {setShipments(r); setFilterShipments(r)})
            .catch(error => console.log(error))
    }, [])

    function filterOriginCity(e) {
        const result = shipments.filter(shipment => shipment.origin.city.toLowerCase().includes(e.target.value.toLowerCase()))
        setShipments(result)
    }
    function filterOriginState(e){
        const result = shipments.filter(shipment => shipment.origin.state_abbr.toLowerCase().includes(e.target.value))
        setShipments(result)
    }
    function filterDestinationCity(e){
        const result = shipments.filter(shipment => shipment.destination.cit.toLowerCase().includes(e.target.value))
        setShipments(result)
    }
    function filterDestinationState(e){
        const result = shipments.filter(shipment => shipment.destination.state_abbr.toLowerCase().includes(e.target.value))
        setShipments(result)
    }
    function filterCarrier(e){
        const result = shipments.filter(shipment => shipment.carrier.carrier_name.toLowerCase().includes(e.target.value))
        setShipments(result)
    }
    function resetShipments(){
        setShipments(filterShipments)
        document.querySelector("#root > div > div:nth-child(2) > div > input[type=text]:nth-child(5)").value = ""
        document.querySelector("#root > div > div:nth-child(2) > div > input[type=text]:nth-child(7)").value = ""
        document.querySelector("#root > div > div:nth-child(2) > div > input[type=text]:nth-child(9)").value = ""
        document.querySelector("#root > div > div:nth-child(2) > div > input[type=text]:nth-child(11)").value = ""
        document.querySelector("#root > div > div:nth-child(2) > div > input:nth-child(13)").value = ""
    }


    return (
        <div>
            <h3>Shipments</h3>
            <SearchBar filterOriginCity={filterOriginCity} filterOriginState={filterOriginState} shipments={shipments} filterDestinationCity={filterDestinationCity} filterDestinationState={filterDestinationState} filterCarrier={filterCarrier} resetShipments={resetShipments} setShipments={setShipments} />
            <table className='grid-container'>
                <TableHead setShipments={setShipments} shipments={shipments} />
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