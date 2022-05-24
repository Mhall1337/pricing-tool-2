import { useState } from "react"


export default function SearchByLocationRadius({ setShipments, miles, setMiles, originCity, originState, setOriginCity, setOriginState }) {



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
                setShipments([...r])
                setOriginCity('')
                setOriginState('')
                document.querySelector("#root > div > div:nth-child(2) > div.search-bar > form > input[type=text]:nth-child(6)").value = 0
            })
            .catch(e => console.log(e))
    }

    return (
        <div className="search-bar">
            <hr></hr>
           <strong> Search within a radius from Origin:</strong>
            <form onSubmit={searchRadius} >
                <label>Origin City</label>
                <input type="text" value={originCity} onChange={(e) => setOriginCity(e.target.value)} placeholder='Origin City'></input>
                <label>Origin State</label>
                <input type="text" value={originState} onChange={(e) => setOriginState(e.target.value)} placeholder='Origin State'></input>
                <label>Miles</label>
                <input type="text" value={miles} onChange={(e) => setMiles(e.target.value)} placeholder='Miles'></input>
                <input type='submit' value='Search'></input>
            </form>
            <hr></hr>
        </div>
    )
}