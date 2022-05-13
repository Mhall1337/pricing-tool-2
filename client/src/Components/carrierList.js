import { useEffect, useState } from "react"
import CarrierListForm from "./carrierListForm"
import UpdateOrSaveButton from "./updateOrSaveButton.js"

export default function CarrierList() {

    const [notes, setNotes] = useState([])

    //  console.log(inputVal)

    useEffect(() =>
        fetch('/carrier_notes')
            .then(r => r.json())
            .then(r => {
                setNotes(r)
            })
        , [])


    function handleDeleteCarrierNote(id) {
        const notesAfterDelete = notes.filter(note => note.id !== id)
        setNotes(notesAfterDelete)
        fetch(`/carrier_notes/${id}`, {
            method: "DELETE"
        })
            .catch(error => console.log(error))
    }

    function handleUpdateCarrierNote(e, id) {
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

    return (
        <div className="carrier-list-container">
            <CarrierListForm setNotes={setNotes} notes={notes} />
            <h2 className="comments-title">Comments</h2>
            <div className="comments-list">{
                notes.map((note, index) =>
                    <div key={index} className="comments-list-item">
                        <label>Carrier Name:</label>
                        <div>{note.carrier.carrier_name}</div>
                        {/* <textarea value={note.note} onChange={(e) => setinputVal(e.target.value)}></textarea> */}
                        <div >Comments:
                        <UpdateOrSaveButton note={note} handleUpdateCarrierNote={handleUpdateCarrierNote}/>
                        </div>
                        <button onClick={() => handleDeleteCarrierNote(note.id)}>delete</button>
                        <hr></hr>
                    </div>
                )
            }</div>
        </div>
    )
}