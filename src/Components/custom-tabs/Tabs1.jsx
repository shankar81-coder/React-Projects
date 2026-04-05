import React, { useState } from "react"



export default function Tab({tabsContent, onChange})
{
    const[currentTabIndex,setCurrentTabIndex] = useState(0)

    function handleOnClick(getIndex)
    {
        setCurrentTabIndex(getIndex)
        onChange(getIndex)
    }

    return(
        <div className="wrapper">
            <div className="heading">
                {
                    tabsContent.map((tabItem,index) => (
                        <div 
                        onClick={()=> handleOnClick(index)} 
                        key={tabItem.label}
                        className={`tab-item ${currentTabIndex === index ? "active" : ""}`}
                        >
                        <span>{tabItem.label}</span>
                        </div>
                    ))
                }
            </div>
            <div className="content">
                {
                    tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
                }
            </div>
        </div>
    )
}
