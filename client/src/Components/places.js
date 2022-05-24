import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox"
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete"
import "@reach/combobox/styles.css"
import React from "react"

export default function Places() {
    const { value, suggestions: { status, data }, setValue, clearSuggestions } = usePlacesAutocomplete({
        requestOptions: {
            location: { lat: () => 43, lng: () => -79 },
            radius: 100,
        }
    })
    const mapRef = React.useRef()
    const panTo = React.useCallback(({lat, lng}) =>{
        mapRef.current.panTo({lat, lng})
        mapRef.current.setZoom(14)
    },[])
    return (
        <div>
            <div>places</div>
            <Combobox onSelect={ async (address) => { 
                try{
                    const results = await getGeocode({address})
                    const {lat, lng} = await getLatLng(results[0])
                    console.log(lat, lng)
                    console.log(results[0].address_components[0].long_name, results[0].address_components[2].short_name)
                    
                }catch(error){
                    console.log("there was an error")
                }
                 }}>
                <ComboboxInput value={value} onChange={e => setValue(e.target.value)} placeholder="enter address"/>
                <ComboboxPopover>{status === "OK" && data.map(({id, description})=> (<ComboboxOption value={description} key={id}/>))}</ComboboxPopover>
            </Combobox>
        </div>
    )
}
