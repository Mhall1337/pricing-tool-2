import Places from "./places"


export default function SearchByLocationRadius({ setShipments, miles, setMiles, originCity, originState, setOriginCity, setOriginState, panTo, setCenterCircle }) {


    function searchRadius(e) {
        e.preventDefault()
        fetch('/radius', {
            method: 'POST',
            headers: {
                'Content-Type': "application/JSON"
            },
            body: JSON.stringify({
                originCity,
                originState,
                miles
            })
        })
            .then(r => r.json())
            .then(r => {
                setShipments([...r])
                setOriginCity('')
                setOriginState('')
                document.querySelector("#root > div > div:nth-child(2) > div.search-bar > form > input[type=text]:nth-child(6)").value = 0
            })
            .catch(e => console.log(e))
    }

    return (
        <div className="search-bar">
            <hr></hr>
            <strong> Search within a radius from Origin: </strong>
                <Places panTo={panTo} setOriginCity={setOriginCity} setOriginState={setOriginState} setCenterCircle={setCenterCircle} />
            <form onSubmit={searchRadius} >
                <label>Miles from origin: </label>
                <input type="text" value={miles} onChange={(e) => setMiles(e.target.value)} placeholder='Miles'></input>
                <input type='submit' value='Search'></input>
            </form>
            <hr></hr>
        </div>
    )
}