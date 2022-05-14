import { useState } from "react"

export default function UpdateOrSaveButton({ note, handleUpdateCarrierNote }) {
    const [button, setButton] = useState(true)
    const [textArea, setTextArea] = useState(note.note)

    //changes state to reflect updated note, sends textArea value and note.id to handleUpdateCarrierNote function in carrierList.js, and changes state to remove textbox
    function saveUpdatedNote(e, id) {
        e.preventDefault()
        handleUpdateCarrierNote(e, id)
        setButton(true)
    }

    //ternary for conditional rendering to update carrier notes and buttons to update and save
    let value
    button ? value = (
        <button onClick={() => setButton(false)}>update</button>
    )
        : value = (
            <div>
                <form onSubmit={(e) => saveUpdatedNote(e, note.id)}>
                    <textarea value={textArea} onChange={(e)=>setTextArea(e.target.value)}></textarea>
                    <input type="submit" value="Save Changes"></input>
                </form>
                <button onClick={() => setButton(true)}>Discard Changes</button>
            </div>
        )

        //renders carrier note and conditional rendering for textarea and save/discard/update buttons
    return (
        <div>
            <div className="comment">{textArea}</div>
            {value}
        </div>
    )
}