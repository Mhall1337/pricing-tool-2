import { useState } from "react"

function SearchBar() {
    const [formVal, setFormVal] = useState({
        origin_city: '*',
        origin_state: '*',
        carrier: '*',
        destination_city: '*',
        destination_state: '*'
    })
    console.log(formVal)
    function handleSearch(e) {
        e.preventDefault()
        setFormVal({
            origin_city: e.target[0].value,
            origin_state: e.target[1].value,
            carrier: e.target[2].value,
            destination_city: e.target[3].value,
            destination_state: e.target[4].value
        })
        e.target.reset()
        fetch('/searchShipments', {
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formVal)
        })
            .then(r => r.json())
            .then(r => {
                if (r.ok) {
                    console.log(r)
                }
            })
    }



    return (
        <div>
            <hr></hr>
            <div>Search</div>
            <form onSubmit={handleSearch} >
                <label>Origin City: </label>
                <input placeholder="Search Origin City" type='text' name="origin_city"></input>
                <label> Origin State: </label>
                <input placeholder="Search Origin State" type='text' name="origin_state" ></input>
                <label> Destination City: </label>
                <input placeholder="Search Destination City" type='text' name="destination_city" ></input>
                <label> Destination State: </label>
                <input placeholder="Search Destination State" type='text' name="destination_state" ></input>
                <label> Carrier: </label>
                <input placeholder="Search Carrier" name="carrier" ></input>
                <input type="submit" value='submit'></input>
            </form >
            <hr></hr>
        </div>

    )
}
export default SearchBar