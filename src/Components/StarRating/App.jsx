import React from "react";
import { FaStar } from "react-icons/fa"
import './style.css'


export default function StartCount({noOfStars=5})
{
    const[rating,setRating] = React.useState(0);
    const[hover,setHover] = React.useState(0)

    function handleClick(getIndex)
        {
            setRating(getIndex)
        }
        

        function handleMouseMove(getIndex)
        {
            setHover(getIndex)
        }

         function handleMouseLeave()
        {
            setHover(rating)
        }

    return (
        
        <>
        <div className="star-rating">
        {
            [...Array(noOfStars)].map((_,index) => {
                index += 1;
                return <FaStar
                key={index}
                className={index <= (hover || rating) ? "active" : "inactive"}
                onClick = {() => handleClick(index)}
                onMouseMove={() => handleMouseMove(index)}
                onMouseLeave={() => handleMouseLeave()}
                size={40}
                />
            })
        }
        </div>
        
        </>
    )
}