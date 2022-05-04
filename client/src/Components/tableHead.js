import { useState } from "react"

function TableHead({ setShipments, shipments }) {

const [sortOrder, setSortOrder] = useState(true)

    function sortColumn(e) {
        setSortOrder(!sortOrder)
        let order
        const columnName = e.target.textContent
            switch (columnName) {
                case "Origin City":
                    sortOrder ? order = shipments.sort((a, b) => a.origin.city.localeCompare(b.origin.city)) : order = shipments.sort((a, b) => b.origin.city.localeCompare(a.origin.city))
                    break;
                 case "Origin State":
                   sortOrder ? order = shipments.sort((a, b) => a.origin.state_abbr.localeCompare(b.origin.state_abbr)) : order = shipments.sort((a, b) => b.origin.state_abbr.localeCompare(a.origin.state_abbr))
                    break;
                case "Carrier Name":
                    sortOrder ? order = shipments.sort((a, b) => a.carrier.carrier_name.localeCompare(b.carrier.carrier_name)) : order = shipments.sort((a, b) => b.carrier.carrier_name.localeCompare(a.carrier.carrier_name))
                    break;
                case "Dest. City":
                    sortOrder ? order = shipments.sort((a, b) => a.destination.city.localeCompare(b.destination.city)) : order = shipments.sort((a, b) => b.destination.city.localeCompare(a.destination.city))
                    break;
                case "Dest. State":
                    sortOrder ? order = shipments.sort((a, b) => a.destination.state_abbr.localeCompare(b.destination.state_abbr)) : order = shipments.sort((a, b) => b.destination.state_abbr.localeCompare(a.destination.state_abbr))
                    break;
            }
            
        setShipments([...order])
    }

    return (
        <thead>
            <tr>
                <th onClick={sortColumn}>Origin City</th>
                <th onClick={sortColumn}>Origin State</th>
                <th>Commodity</th>
                <th onClick={sortColumn}>Carrier Name</th>
                <th onClick={sortColumn}>Dest. City</th>
                <th onClick={sortColumn}>Dest. State</th>
                <th>Miles</th>
                <th>Rate</th>
                <th>Dispatcher Name</th>
                <th>Dispatcher Phone Number</th>
                <th>Dispatcher Email Address</th>
            </tr>
        </thead>
    )

}
export default TableHead