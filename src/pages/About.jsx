import { useState, useEffect } from "react"
import HttpClient from "../HttpClient"

const About = () => {
  const [apod, setApod] = useState({})
  // const [video, setVideo] = useState(false)

  // if (apod.media_type == "video"){
  //   setVideo(!video)
  // }

    
    useEffect(() => {
        HttpClient.getApod().then(apodData => {
          setApod(apodData.data)
        })
    }, [])

    // apod.title
    // apod.explanation
    return (
      <div
        style={{backgroundColor: "rgb(249 115 22)"}}
        className="flex flex-col justify items-center mx-auto bg-cover bg-fixed">
        <div className="flex justify-center w-1/2">
          <h1 className="bg-white bg-opacity-50 m-5 py-3 px-5 rounded text-2xl tracking-wide shadow-lg shadow-indigo-900">
            About
          </h1>
        </div>
        <div className="flex justify-center w-2/3">
          <div className="bg-white bg-opacity-50 rounded m-5 py-3 px-5 text-justify text-xl shadow-lg shadow-indigo-900">
            This is a collection of different NASA APIs. There are two of NASA's many APIs featured, including
            the Astronomy Picture of the Day or APOD, Home Page Background; and the Earth Observatory Natural Event Tracker or 
            EONET.  If the APOD happens to be a video the home screen background will be orange.
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
            <div className="text-justify m-1">
              Media Type: {apod.media_type} <br /> 
              <a href={apod.url}>APOD URL Link</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default About