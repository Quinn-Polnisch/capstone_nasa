import { useState, useEffect } from "react"
import HttpClient from "../HttpClient"
import Back from "../assets/background.png"

const Background = () => {

    const [apod, setApod] = useState({})
    
    useEffect(() => {
        HttpClient.getApod().then(apodData => {
          setApod(apodData.data)
        })
    }, [])
    // console.log(apod);

    if (apod.media_type == "video"){
      return ( Back )
    }
    else { return ( apod.url )}

}

export default Background