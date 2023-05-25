import { useState, useEffect } from "react"
import HttpClient from "../HttpClient"

const Background = () => {

    const [apod, setApod] = useState({})
    
    useEffect(() => {
        HttpClient.getApod().then(apodData => {
          setApod(apodData.data)
        })
    }, [])

  return (
    apod.url
  )
}

export default Background