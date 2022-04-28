import { useState } from "react"

export default function CarrierListForm(){

    const [carrier, setCarrier]=useState('')
    const [note, setNote]=useState('')
    console.log(carrier)
    console.log(note)

    return(
        <div>
            <form>
                <label>Carrier Name: </label>
                <input type="text" placeholder="Carrier Name" value={carrier} onChange={e=>setCarrier(e.target.value)}></input>
                <label>Notes</label>
                <textarea value={note} onChange={e=>setNote(e.target.value)}>needs a value attribute</textarea>
                <input type="submit"></input>
            </form>
        </div>
    )
}