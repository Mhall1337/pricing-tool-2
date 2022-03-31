function TableHead({setShipments, shipments}) {

    function sort(e) {
        console.log(e.target.textContent)
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
            <thead>
                <tr>
                    <th className="grid-item" onClick={sort}>Origin City</th>
                    <th className="grid-item" onClick={sort}>Origin state</th>
                    <th className="grid-item">Commodity</th>
                    <th className="grid-item" onClick={sort}>Carrier Name</th>
                    <th className="grid-item" onClick={sort}>Dest. City</th>
                    <th className="grid-item" onClick={sort}>Dest. state</th>
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