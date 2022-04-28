import { useState } from "react"

export default function CarrierListForm(){

    const [carrier, setCarrier]=useState('')
    const [note, setNote]=useState('')

    return(
        <div>
            <form>
                <label>Carrier Name: </label>
                <input type="text" placeholder="Carrier Name"></input>
                <label>Notes</label>
                <textarea value={note}>needs a value attribute</textarea>
            </form>
        </div>
    )
}