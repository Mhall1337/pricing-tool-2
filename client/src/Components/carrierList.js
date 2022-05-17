import { useEffect, useState } from "react"
import CarrierListForm from "./carrierListForm"
import UpdateOrSaveButton from "./updateOrSaveButton.js"

export default function CarrierList() {

    const [notes, setNotes] = useState([])


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
            body: JSON.stringify({ updatedNote: e.target[0].value })
        })
            .then(r => r.json())
            .then(r => console.log(r))
    }

    function postNote(e, note) {
        e.preventDefault()
        const selectCarrier = e.target[1][0].value

        fetch("/carrier_notes", {
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
            .then(r => {
                if(r.ok){
                console.log(r)
                setNotes([...notes, r])
            }
        })
    }

    return (
        <div className="carrier-list-container">
            <CarrierListForm setNotes={setNotes} notes={notes} postNote={postNote} />
            <div className="comments-list">{
                notes.map((note, index) =>
                    <div key={index} className="comments-list-item">
                        <hr></hr>
                        <h3><u>Carrier: {note.carrier.carrier_name}</u></h3>
                        <UpdateOrSaveButton note={note} handleUpdateCarrierNote={handleUpdateCarrierNote} />
                        <button onClick={() => handleDeleteCarrierNote(note.id)}>delete</button>
                        <hr></hr>
                    </div>
                )
            }</div>
        </div>
    )
}