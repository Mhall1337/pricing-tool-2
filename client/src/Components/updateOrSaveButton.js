import { useState } from "react"

export default function UpdateOrSaveButton({note}) {
    const [button, setButton] = useState(true)


    let value
    button ? value = <button onClick={() => setButton(false)}>update</button> : value = <div><textarea></textarea><button onClick={() => setButton(true)}>save</button></div>

    return (
        <div>
            <div>{note.note}</div>
            {value}
        </div>
    )
}