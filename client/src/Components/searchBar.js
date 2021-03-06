
function SearchBar({ filterOriginCity, filterOriginState, filterDestinationCity, filterDestinationState, filterCarrier, resetShipments, setShipments }) {

    return (
        <div className="search-bar">
            <hr></hr>
            <div><strong>Search Shipments</strong></div>
            <label>Origin City: </label>
            <input placeholder="Search Origin City" type='text' name="origin_city" onChange={(e) => filterOriginCity(e)}></input>
            <label> Origin State: </label>
            <input placeholder="Search Origin State" type='text' name="origin_state" onChange={(e) => filterOriginState(e)}></input>
            <label> Destination City: </label>
            <input placeholder="Search Destination City" type='text' name="destination_city" onChange={(e) => filterDestinationCity(e)}></input>
            <label> Destination State: </label>
            <input placeholder="Search Destination State" type='text' name="destination_state" onChange={(e) => filterDestinationState(e)}></input>
            <label> Carrier: </label>
            <input placeholder="Search Carrier" name="carrier" onChange={(e) => filterCarrier(e)}></input>
            <button onClick={resetShipments}>reset</button>
            <hr></hr>
        </div>

    )
}
export default SearchBar