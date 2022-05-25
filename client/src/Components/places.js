
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox"
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete"
import "@reach/combobox/styles.css"
import React from "react"


export default function Places({panTo, setOriginCity, setOriginState, setCenterCircle}) {
    const { value, suggestions: { status, data }, setValue, clearSuggestions } = usePlacesAutocomplete({
        requestOptions: {
            location: { lat: () => 43, lng: () => -79 },
            radius: 100,
        }
    })
    
    return (
        <div>           
            <Combobox onSelect={ async (address) => { 
                setValue(address, false);
                clearSuggestions()
                try{
                    const results = await getGeocode({address})
                    const {lat, lng} = await getLatLng(results[0])
                    setCenterCircle({lat, lng})
                    setOriginCity(results[0].address_components[0].long_name)
                    setOriginState(results[0].address_components[2].short_name)
                    panTo({lat, lng})
                }catch(error){
                    console.log("there was an error")
                }
                 }}>
                <ComboboxInput value={value} onChange={e => setValue(e.target.value)} placeholder="enter address"/>
                <ComboboxPopover>{status === "OK" && data.map(({index, description})=> (<ComboboxOption value={description} key={index}/>))}</ComboboxPopover>
            </Combobox>
        </div>
    )
}
