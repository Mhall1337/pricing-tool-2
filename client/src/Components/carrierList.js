import { useState } from "react"

export default function CarrierList() {

    const [notes, setNotes] = useState([])

    function getCarrierNotes() {
        fetch('http://localhost:3000/carrier_notes')
            .then(r => r.json())
            .then(r => {
                setNotes(r)
                console.log(r)
            })
    }

    return (
        <div className="carrier-list-container">Carrier List
            <button onClick={getCarrierNotes}>get</button>
            <div>{
                notes.map((note, index) =>
                    <div key={index}>
                        <div >{note.carrier.carrier_name}</div>
                        <div >{note.note}</div>
                    </div>
                )
            }</div>
        </div>
    )
}