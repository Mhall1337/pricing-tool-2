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
        <div className="carrier-list-container">Carrier List
            <CarrierListForm setNotes={setNotes} notes={notes} />
            <div>{
                notes.map((note, index) =>
                    <div key={index}>
                        <label>Carrier Name:</label>
                        <div>{note.carrier.carrier_name}</div>
                        {/* <textarea value={note.note} onChange={(e) => setinputVal(e.target.value)}></textarea> */}
                        <label>Carrier Note:</label>
                        <UpdateOrSaveButton note={note} handleUpdateCarrierNote={handleUpdateCarrierNote}/>
                        <button onClick={() => handleDeleteCarrierNote(note.id)}>delete</button>
                        <hr></hr>
                    </div>
                )
            }</div>
        </div>
    )
}