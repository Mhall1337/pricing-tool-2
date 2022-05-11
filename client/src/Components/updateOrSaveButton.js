import { useState } from "react"

export default function UpdateOrSaveButton(){
    const [button, setButton] = useState(true)

    
    let value
    button ? value = <button onClick={()=>setButton(false)}>update</button> : value = <button onClick={()=>setButton(true)}>save</button>

   return value
}