import React from 'react'
import '../custom-tabs/style.css'
import Tab from './Tabs1'

export default function customTab()
{
    function RandomComponent()
    {
        return <div><h1>Some random content</h1></div>
    }

    function handleChange(currentTabIndex)
    {
        console.log(currentTabIndex)
    }

    const tabs = [
        {
            label: 'Tab 1',
            content: <div>This is content for tab 1</div>
        },
        {
            label: 'Tab 2',
            content: <div>This is content for tab 2</div>
        },
        {
            label: 'Tab 3',
            content: <RandomComponent/>
        }
    ]
    return(
            <Tab tabsContent={tabs}
                 onChange={handleChange}
            />
    )
}
