import { useState } from "react";
import server_calls from "../api/server";
import DataTable from "../components/DataTable";
import { setData } from "../components/DataTable";

const EONET = () => {
    const [ dateStart, setDateStart ] = useState("");
    const [ dateEnd, setDateEnd ] = useState("");
    const [ category, setCategory ] = useState("");

    const changeCategory = (event) => {
        setCategory(event.target.value)
    };

    const changeDateStart = (event) => {
        setDateStart(event.target.value)
    };

    const changeDateEnd = (event) => {
        setDateEnd(event.target.value)
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        const data = {
            category,
            dateStart,
            dateEnd,
        }
        console.log(data);
        // console.log(data.category);
        // console.log(data.dateStart);
        // console.log(data.dateEnd);
        const result = await server_calls.getEONET(data.category, data.dateStart, data.dateEnd);
        setData(result);
        console.log(result);
        clearState();
    }

    const clearState = () => {
        setCategory('');
        setDateStart('');
        setDateEnd('');
    };

    const close = () => {
        window.location.reload();
    }

  return (
        <div
            style={{backgroundColor: "rgb(249 115 22)"}}
            className="flex flex-col justify items-center h-screen mx-auto bg-cover bg-fixed">
            <div className="flex flex-col justify-center w-1/2 mt-5">
                <div
                    className="bg-white bg-opacity-50 rounded m-5 py-3 px-5 shadow-lg shadow-indigo-900 text-xl text-center"
                >
                    <div className="text-center m-1">
                        EONET
                    </div>
                    <div className="text-justify m-1">
                        EONET or The Earth Observatory Natural Event Tracker is a prototype API to provide the public
                        with near real time data about natural events and manmade events as well.
                    </div>
                </div>
                    <div
                        className="bg-white bg-opacity-50 rounded m-5 py-3 px-5 text-center
                            text-xl shadow-lg shadow-indigo-900 items-center justify-items-between content-center">
                        <form onSubmit={(onSubmit)}>
                            <div className="m-2 px-2 py-3">
                                <label htmlFor="category" className="m-1">Category:</label>
                                <select value={category} name="category" onChange={changeCategory}
                                    className="m-1 p-1 rounded">
                                    <option value="">Select a Category</option>
                                    <option value="drought">Drought</option>
                                    <option value="dustHaze">Dust Haze</option>
                                    <option value="earthquakes">Earthquakes</option>
                                    <option value="floods">Floods</option>
                                    <option value="landslides">Landslides</option>
                                    <option value="manmade">Manmade</option>
                                    <option value="seaLakeIce">Sea and Lake Ice</option>
                                    <option value="severeStorms">Severe Storms</option>
                                    <option value="snow">Snow</option>
                                    <option value="tempExtremes">Temperature Extremes</option>
                                    <option value="volcanoes">Volcanoes</option>
                                    <option value="waterColor">Water Color</option>
                                    <option value="wildfires">Wildfires</option>
                            </select>
                        </div>
                        <div className="m-2 px-2 py-3">
                            <label htmlFor="dateStart" className="m-1">Start Date:</label>
                            <input name="dateStart" value={dateStart}
                                onChange={changeDateStart} placeholder="YYYY-MM-DD"
                                className="m-1 p-1 rounded"/>
                        </div>
                        <div className="m-2 px-2 py-3">
                            <label htmlFor="dateEnd" className="m-1">End Date:</label>
                            <input name="dateEnd" value={dateEnd}
                            onChange={changeDateEnd} placeholder="YYYY-MM-DD"
                            className="m-1 p-1 rounded"/>
                        </div>
                        <div className="m-2 px-2 py-3">
                            <button type="submit" className="m-1 p-2 rounded bg-white hover:bg-slate-300 ">Submit</button>
                        </div>
                    </form>
                    <div>
                    <button
                        onClick={close}
                        className="bg-white hover:bg-slate-300 rounded m-1 p-2 text-center
                        text-xl items-center justify-items-between content-center">
                            Clear Data
                    </button>
                </div>
                </div>
                    <DataTable />
            </div>
            
        </div>
  )
}

export default EONET