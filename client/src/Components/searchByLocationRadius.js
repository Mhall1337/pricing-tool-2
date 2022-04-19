import { useState } from "react"
export default function SearchByLocationRadius(){
    const [originCity, setOriginCity] = useState('')
    const [originState, setOriginState] = useState('')
    const [miles, setMiles] = useState(0)

    function searchRadius(){
        fetch('/radius',{
            method: 'POST',
            headers:{
                'Content-Type': "application/json"
            },
            body: {
                originCity,
                originState,
                miles
            }
        })
        .then(r => r.json())
        .then(r => console.log(r))
    }

    return(
        <div>
            Search in a radius from Origin:
            <form>
                <lable>Origin City</lable>
                <input type="text" value={originCity} onChange={(e)=>setOriginCity(e.target.value)} placeholder='Origin City'></input>
                <lable>Origin State</lable>
                <input type="text" value={originState} onChange={(e)=>setOriginState(e.target.value)} placeholder='Origin State'></input>
                <lable>Miles</lable>
                <input type="text" value={miles} onChange={(e)=>setMiles(e.target.value)} placeholder='Miles'></input>
                <input type='submit' value='click me'></input>
            </form>
        </div>
    )
}