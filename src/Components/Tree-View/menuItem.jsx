import MenuList from "./menuList";
import React from 'react'
import { FaMinus,FaPlus } from "react-icons/fa";

export default function MenuItem({item})
{
    const[currentChild,setCurentChild] = React.useState({})

    function handleToggle(getLabel)
    {
        setCurentChild({
            ...currentChild,
            [getLabel]: !currentChild[getLabel],
        })
    }


    return (
        
    <li>
    <div style={{display: "flex" ,gap:'20px'}}>
       <p>{item.label}</p>
        {
        item && item.children && item.children.length > 0 ? 
        <span 
        onClick={() => handleToggle(item.label)}
        >
        {currentChild[item.label] ? <FaMinus color='#fff' size={35}/> : <FaPlus color='#fff' size={35}/>}
        </span> 
        : null
        }
    </div>
       {
        item && item.children && item.children.length > 0 && currentChild[item.label]?
            <MenuList list={item.children}/>
        : null
       }
    </li>
    
    )
} 