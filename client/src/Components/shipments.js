
function Shipments(){
    function viewShipments(){
        fetch('http://localhost:3000/shipments')
        .then(r => r.json())
        .then(r =>console.log(r))
      }
      return(
          <div>Shipments
              <button onClick={viewShipments()}>click</button>
          </div>
      )
}   
export default Shipments