import { useContext } from "react";
import { Link } from "react-router-dom";
import { TravelContext } from "../context/TravelContext";

function TravelList(){
    const {travels, setTravels} = useContext(TravelContext)
    const onDelete = (destination) =>{
        const filteredValue = travels.filter(t=> t.destination !== destination)
        setTravels(filteredValue)

    }

    return (
        <>
        <h1>The Travel list</h1>
        {
            travels?.map(t => {
                return (
                    <div>
                        <p>Destination: {t.destination}</p>
                        <p>Date: {t.date}</p>
                        <p>Group: {t.group}</p>
                        <button><Link to={`/editTravel/${t.destination}`}>Edit</Link></button> <br/>
                        <button onClick={() => onDelete(t.destination)}>Delete</button>


                    </div>
                )
            })
        }
        <button><Link to="/addTravel">Add Travel</Link></button>
        </>
    )

}
export default TravelList;