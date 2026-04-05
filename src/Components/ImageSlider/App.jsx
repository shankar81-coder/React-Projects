import React, { useEffect, useState } from "react";
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from 'react-icons/bs'
import '../ImageSlider/style.css'

export default function ImageSlider({url,limit = 5,page})
{
    const[images,setImage] = useState([])
    const[currentSlider,setCurrentSlider] = useState(0)
    const[errorMsg,setErrorMsg] = useState(null)
    const[loading,setLoading] = useState(false)

    async function fetchImages(getUrl)
    {
        try{
            setLoading(true)
            const response = await fetch(getUrl)
            const data = await response.json()

            if(data)
            {
                setImage(data)
                setLoading(false)
            }
        }
        catch(e){
            setErrorMsg(e.message)
            setLoading(false)
           } 
    }

    function handlePrev()
    {
        setCurrentSlider(currentSlider === 0 ? images.length - 1 : currentSlider - 1)
    }

    function handleNext()
    {
        setCurrentSlider(currentSlider === images.length - 1 ? 0 : currentSlider + 1)
    }

    useEffect(()=>{
       if(url !== "") fetchImages(`${url}?page=${page}&limit=${limit}`)
    },[url])



    if(loading)
    {
        return <div>Loading...</div>
    }

    if(errorMsg !== null)
    {
        return <div>Error {errorMsg}</div>
    }


    return(
        <div className="container">
           <BsArrowLeftCircleFill onClick={handlePrev} className="arrow arrow-left"/>
           {
            images && ImageSlider.length ? 
                images.map((imageItem,index) => (
                    <img
                    key={imageItem.id}
                    alt={imageItem.download_url}
                    src={imageItem.download_url}
                    className={currentSlider === index ? 
                        "current-image" 
                        : "current-image hide-current-image"
                     }
                    />
                ))
            : null
           }
           <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleNext}/>
           <span className="circle-indicators"></span>
           {
            images && images.length ? 
            images.map((_,index) => 
            (<button
            key={index}
            className={
                currentSlider === index ? "current-indicator" :
                "current-indicator inactive-indicator"
            }
            onClick={() => setCurrentSlider(index)}
            ></button>
            )
        ) : null   
           }
        </div>
    )
}