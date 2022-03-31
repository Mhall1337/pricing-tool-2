function TableHead({ setShipments, shipments }) {
    function sort(e) {
        const columnName = e.target.textContent
        const sortedShipments = shipments.sort(function (a, b) {
            let nameA
            let nameB
            switch (columnName) {
                case "Origin City":
                    nameA = a.origin.city.toUpperCase()
                    nameB = b.origin.city.toUpperCase()
                    break;
                case "Origin State":
                    nameA = a.origin.state_abbr.toUpperCase()
                    nameB = b.origin.state_abbr.toUpperCase()
                    break;
                case "Carrier Name":
                    nameA = a.carrier.carrier_name.toUpperCase()
                    nameB = b.carrier.carrier_name.toUpperCase()
                    break;
                case "Dest. City":
                    nameA = a.destination.city.toUpperCase()
                    nameB = b.destination.city.toUpperCase()
                    break;
                case "Dest. State":
                    nameA = a.destination.state_abbr.toUpperCase()
                    nameB = b.destination.state_abbr.toUpperCase()
                    break;
            }
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
        <thead>
            <tr>
                <th className="grid-item" onClick={sort}>Origin City</th>
                <th className="grid-item" onClick={sort}>Origin State</th>
                <th className="grid-item">Commodity</th>
                <th className="grid-item" onClick={sort}>Carrier Name</th>
                <th className="grid-item" onClick={sort}>Dest. City</th>
                <th className="grid-item" onClick={sort}>Dest. State</th>
                <th className="grid-item">Miles</th>
                <th className="grid-item">Rate</th>
                <th className="grid-item">Dispatcher Name</th>
                <th className="grid-item">Dispatcher Phone Number</th>
                <th className="grid-item">Dispatcher Email Address</th>
            </tr>
        </thead>
    )

}
export default TableHead