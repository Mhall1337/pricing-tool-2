import { useState } from "react"


export default function SearchByLocationRadius({ setShipments }) {

    const [originCity, setOriginCity] = useState('')
    const [originState, setOriginState] = useState('')
    const [miles, setMiles] = useState(0)

    function searchRadius(e) {
        e.preventDefault()
        fetch('/radius', {
            method: 'POST',
            headers: {
                'Content-Type': "application/JSON"
            },
            body: JSON.stringify({
                originCity,
                originState,
                miles
            })
        })
            .then(r => r.json())
            .then(r =>{
                console.log(r)
                setShipments([...r])
            })
            .catch(e => console.log(e))
    }

    return (
        <div className="search-bar">
           <strong> Search in a radius from Origin:</strong>
            <form onSubmit={searchRadius} >
                <label>Origin City</label>
                <input type="text" value={originCity} onChange={(e) => setOriginCity(e.target.value)} placeholder='Origin City'></input>
                <label>Origin State</label>
                <input type="text" value={originState} onChange={(e) => setOriginState(e.target.value)} placeholder='Origin State'></input>
                <label>Miles</label>
                <input type="text" value={miles} onChange={(e) => setMiles(e.target.value)} placeholder='Miles'></input>
                <input type='submit' value='click me'></input>
            </form>
        </div>
    )
}