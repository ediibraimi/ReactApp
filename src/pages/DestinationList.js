import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { DestinationContext } from "../context/DestinationContext";
import { Link } from "react-router-dom";


function DestinationList(){
    const{destinations, setDestinations} = useContext(DestinationContext);

    useEffect(()=> {
        const fetchData = async () => {
            const response = await axios.get("https://restcountries.com/v3.1/all");
            console.log("response", response)
            setDestinations(response.data.splice(0,21))
        }
        fetchData()

    }, [])
    return (
    
        <div className="grid grid-cols-3 ">
            {destinations?.map((d) => {
                const path ="/destinationDetails/" + d.name.common
                return (
                    <div
                    key={d.cca3}
                    className="flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-80"
                >
                    <div className="p-4">
                        <h5 className="mb-2 text-slate-800 text-xl font-semibold">
                            {d.name.common}
                        </h5>
                        <p className="text-slate-600 leading-normal font-light">
                            {d.subregion}
                        </p>
                        <button
                            className="rounded-md bg-red-400 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            <Link to={path}>read more</Link>
                        </button>
                    </div>
                </div>
                )
            }
               
            )}
        </div>
    );
}

export default DestinationList;