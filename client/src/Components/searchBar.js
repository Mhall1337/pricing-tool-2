
import { useState } from "react"

function SearchBar() {
    const [originCity, setOriginCity] = useState('')
    const [originState, setOriginState] = useState('')
    const [carrier, setCarrier] = useState('')
    const [destCity, setDestCity] = useState('')
    const [destState, setDestState] = useState('')
    function handleSearch(e) {
        e.preventDefault()
        fetch(`http://localhost:3000/search/?origin_city=${originCity}&origin_state=${originState}&carrier=${carrier}&destination_city=${destCity}&destination_state=${destState}`)
            .then(r => r.json())
            .then(r => console.log(r))

        //e.target.reset()
    }




    return (
        <div>
            <hr></hr>
            <div>Search</div>
            <form onSubmit={handleSearch} >
                <label>Origin City: </label>
                <input placeholder="Search Origin City" type='text' name="origin_city" value={originCity} onChange={(e) => setOriginCity(e.target.value)}></input>
                <label> Origin State: </label>
                <input placeholder="Search Origin State" type='text' name="origin_state" value={originState} onChange={(e) => setOriginState(e.target.value)}></input>
                <label> Destination City: </label>
                <input placeholder="Search Destination City" type='text' name="destination_city" value={destCity} onChange={(e) => setDestCity(e.target.value)}></input>
                <label> Destination State: </label>
                <input placeholder="Search Destination State" type='text' name="destination_state" value={destState} onChange={(e) => setDestState(e.target.value)}></input>
                <label> Carrier: </label>
                <input placeholder="Search Carrier" name="carrier" value={carrier} onChange={(e) => setCarrier(e.target.value)}></input>
                <input type="submit" value='submit'></input>
            </form >
            <hr></hr>
        </div>

    )
}
export default SearchBar