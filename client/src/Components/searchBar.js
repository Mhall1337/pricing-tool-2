import { useState } from "react"

function SearchBar() {
    const [formVal, setFormVal] = useState({
        origin_city: '',
        origin_state: '',
        carrier: '',
        destination_city: '',
        destination_state: ''
    })
    function handleSearch(e){
        console.log(e.target.values)
    }
    
    return (
        <div>
            <hr></hr>
            <div>Search</div>
            <form>
                <label>Origin City: </label>
                <input placeholder="Search Origin City" type='text'></input>
                <label> Origin State: </label>
                <input placeholder="Search Origin State" type='text'></input>
                <label> Destination City: </label>
                <input placeholder="Search Destination City" type='text'></input>
                <label> Destination State: </label>
                <input placeholder="Search Destination State" type='text'></input>
                <label> Carrier: </label>
                <input placeholder="Search Carrier"></input>
                <input type="submit"></input>
            </form>
            <hr></hr>
        </div>

    )
}
export default SearchBar