import React, { useState } from 'react'
import data from './data'

export default function App()
{
    const[selected,setSelected] = useState(null)
    const[enableMutli,setEnableMulti] = useState(false)
    const[multiple,setMutltiple] = useState([])

    function handleSingleSelection(getItemId)
    {
        setSelected(getItemId === selected ? null : getItemId)
    }
    function hanndleMutli(getItemId)
    {
        let cpMultiple = [...multiple]
        const getIndex = cpMultiple.indexOf(getItemId);
        console.log(getIndex)
        if(getIndex === -1) cpMultiple.push(getItemId)
        
        else{
            cpMultiple.splice(getIndex,1)
        }
    
        
        setMutltiple(cpMultiple)
        console.log(multiple)
    }
    return(
        <>
        <div className="wrapper">
            <button onClick={() => setEnableMulti(!enableMutli)}>
                Enable Multi Selection
            </button>
            <div className="accordian">
                {
                    data && data.length > 0 ? 
                    
                    data.map((dataItem) => {
                        return (
                            <div 
                            className="item"
                            onClick={enableMutli ? () => hanndleMutli(dataItem.id) : 
                                      () => handleSingleSelection(dataItem.id)}
                            key={dataItem.id}>
                                <div className="title">
                                    <h3>{dataItem.question}</h3>
                                    <span>+</span>
                                </div>
                                {
                                enableMutli ? multiple.indexOf(dataItem.id) !== -1 && (
                                    <div className='content'>{dataItem.answer}</div>
                                ) :  selected === dataItem.id ? 
                                    <div>{dataItem.answer}</div>
                                    : null
                                }
                                {/* /* {
                                    selected === dataItem.id ? 
                                    <div>{dataItem.answer}</div>
                                    : null
                                } */ }
                            </div>
                        )
                    })
                
                    : <div>Data not Found!</div>
                }
            </div>
        </div>
        </>
    )
}
