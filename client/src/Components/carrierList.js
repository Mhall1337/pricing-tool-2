import { useState } from "react"

export default function CarrierList(){

    const [notes, setNotes] = useState([])

    function getCarrierNotes(){
        fetch('http://localhost:3000/carrier_notes')
        .then(r => r.json())
        .then(r => console.log(r))
    }

    return(
        <div className="carrier-list-container">Carrier List
        <button onClick={getCarrierNotes}>get</button>
        </div>
    )
}