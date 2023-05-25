import { useState, useEffect } from "react"
import HttpClient from "../HttpClient"

const About = () => {
  const [apod, setApod] = useState({})
    
    useEffect(() => {
        HttpClient.getApod().then(apodData => {
          setApod(apodData.data)
        })
    }, [])
    // apod.title
    // apod.explanation
    return (
      <div
        className="flex flex-col justify items-center h-screen bg-orange-500 bg-cover bg-fixed">
        <div className="flex justify-center w-1/2">
          <h1 className="bg-white bg-opacity-50 m-5 py-3 px-5 rounded text-2xl tracking-wide shadow-lg shadow-indigo-900">
            About
          </h1>
        </div>
        <div className="flex justify-center w-2/3">
          <div className="bg-white bg-opacity-50 rounded m-5 py-3 px-5 text-justify text-xl shadow-lg shadow-indigo-900">
            This is a collection of different NASA APIs. There are two of NASA's many APIs fetured, including
            the Astronomy Picture of the Day or APOD, Home Page Background; and the Earth Observatory Natural Event Tracker or 
            EONET.
          </div>
        </div>
        <div className="flex justify-center w-2/3">
          <div className="flex flex-col bg-white items-center bg-opacity-50 rounded text-xl m-5 py-3 px-5 shadow-lg shadow-indigo-900">
            <div className="m-1">
              APOD
            </div>
            <div className="text-justify m-1">
              Title: {apod.title}
            </div>
            <div className="text-justify m-1">
              Description: {apod.explanation}
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default About