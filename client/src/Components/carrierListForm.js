import { useEffect } from "react"
import { useState } from "react"

export default function CarrierListForm() {

    const [inputCarrier, setInputCarrier] = useState("")
    const [note, setNote] = useState('')
    const [select, setSelect] = useState([])
    const [carriers, setCarriers] = useState([])

    useEffect(() =>
        fetch("http://localhost:3000/carriers")
            .then(r => r.json())
            .then(r => setCarriers(r))
        , [])

    function changeSelect() {
        const result = carriers.filter(carrier => carrier.carrier_name.toLowerCase().includes(inputCarrier.toLowerCase()))
        setSelect(result)
    }

    function postNote(e) {
        e.preventDefault()
        const selectCarrier = e.target[1][0].value

        fetch("http://localhost:3000/carriers", {
            method: "POST",
            headers: {
                'Content-Type': "application/JSON"
            },
            body: JSON.stringify({
                note,
                selectCarrier
            })
        })
        .then(r => r.json())
        .then(r => console.log(r))
    }

    return (
        <div>
            <form onChange={changeSelect} onSubmit={postNote}>
                <label>Carrier Name: </label>
                <input type="text" placeholder="Carrier Name" value={inputCarrier} onChange={e => setInputCarrier(e.target.value)}></input>
                <select>
                    {select.map((carrier, index) => <option key={index}>{carrier.carrier_name}</option>)}
                </select>
                <label>Notes</label>
                <textarea value={note} onChange={e => setNote(e.target.value)}>needs a value attribute</textarea>
                <input type="submit"></input>
            </form>
        </div>
    )
}