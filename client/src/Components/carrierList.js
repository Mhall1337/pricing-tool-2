import { useEffect, useState } from "react"
import CarrierListForm from "./carrierListForm"

export default function CarrierList() {

    const [notes, setNotes] = useState([])

    useEffect(()=>
    fetch('/carrier_notes')
    .then(r => r.json())
    .then(r => {
        setNotes(r)
    })
    ,[])

    function handleDeleteCarrierNote(id){
        const notesAfterDelete = notes.filter(note => note.id !== id)
        setNotes(notesAfterDelete)
        fetch(`/carrier_notes/${id}`,{
            method: "DELETE"
        })
        .catch(error => console.log(error))
    }

    function handleUpdateCarrierNote(id){
        fetch(`/carrier_notes/${id}`,{
            method: 'PATCH',
            headers:{
                "content-type": "application/JSON"
            },
            body: JSON.stringify({})
        })
    }

    return (
        <div className="carrier-list-container">Carrier List
        <CarrierListForm setNotes={setNotes} notes={notes}/>
            <div>{
                notes.map((note, index) =>
                    <div key={index}>
                        <div >{note.carrier.carrier_name}</div>
                        <textarea >{note.note}</textarea>
                        <button onClick={() =>handleDeleteCarrierNote(note.id)}>delete</button>
                    </div>
                )
            }</div>
        </div>
    )
}