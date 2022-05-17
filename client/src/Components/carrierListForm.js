import { useEffect } from "react"
import { useState } from "react"

export default function CarrierListForm({ postNote }) {

    const [inputCarrier, setInputCarrier] = useState('')
    const [note, setNote] = useState('')
    const [select, setSelect] = useState([])
    const [carriers, setCarriers] = useState([])


    useEffect(() =>
        fetch("/carriers")
            .then(r => r.json())
            .then(r => {
                setCarriers(r)
                setSelect(r)
            })
        , [])

    //update options for carriers dropdown
    function changeSelect(e) {
        const result = carriers.filter(carrier => carrier.carrier_name.toLowerCase().includes(e.target.value.toLowerCase()))
        setSelect(result)
    }


    return (
        <div className="search-bar" id="carrier-search">
            <hr></hr>
            <form onSubmit={(e) => { postNote(e, note); setNote(''); setInputCarrier('') }} className="carrier-list-form">
                <div>Carrier Name:</div>
                <input type="text" placeholder="Carrier Name" value={inputCarrier} onChange={e => { setInputCarrier(e.target.value); changeSelect(e) }}></input>
                <select>
                    {select.map((carrier, index) => <option key={index}>{carrier.carrier_name}</option>)}
                </select>
                <br></br>
                <br></br>
                <div>Notes: </div>
                <textarea value={note} onChange={e => setNote(e.target.value)}></textarea>
                <input type="submit"></input>
            </form>
            <hr></hr>
        </div>
    )
}