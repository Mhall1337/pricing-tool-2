import { useState } from "react"

export default function UpdateOrSaveButton({ note }) {
    const [button, setButton] = useState(true)
    const [textArea, setTextArea] = useState(note.note)
    
    function saveUpdatedNote(e, id){
        e.preventDefault()
        setButton(true)
        //console.log(e.target[0].value)
        fetch(`/carrier_notes/${id}`, {
            method: 'PATCH',
            headers: {
                "content-type": "application/JSON"
            },
            body: JSON.stringify({updatedNote: e.target[0].value})
        })
        .then(r => r.json())
        .then(r => console.log(r))
    }

//ternary for conditional rendering to update carrier notes and buttons to update and save
    let value
    button ? value = (
        <button onClick={() => setButton(false)}>update</button>
    ) 
    : value = (
        <div>
            <form onSubmit={(e)=>saveUpdatedNote(e, note.id)}>
            <textarea>{textArea}</textarea>
            <input type="submit" value="Save Changes"></input>
            </form>
            <button onClick={() => setButton(true)}>Discard Changes</button>
        </div>
    )

    return (
        <div>
            <div>{note.note}</div>
            {value}
        </div>
    )
}