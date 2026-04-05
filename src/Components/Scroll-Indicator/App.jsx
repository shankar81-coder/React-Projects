import { useEffect, useState } from "react";
import '../Scroll-Indicator/style.css'

export default function ScrollIndicator({url})
{
    const[data,setData] = useState([])
    const[scroll,setScroll] = useState(0)
    const[loading,setLoading] = useState(false)
    const[error,setError] = useState('')

    async function fetchData(getUrl)
    {
        try{
            setLoading(true)
            const response = await fetch(getUrl)
            const data = await response.json()
            console.log(data)

            if(data && data.products && data.products.length > 0)
            {
                setData(data.products)
                setLoading(false)
            }
        }catch(e)
        {
            console.log(e);
            setError(e.message)
        }
    }

    function handleScroll()
    {
        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - 
                            document.documentElement.clientHeight
        setScroll((howMuchScrolled / height) * 100)
    }

    useEffect(() => {
        fetchData(url)
    },[url])

    useEffect(() => {
        window.addEventListener('scroll',handleScroll)

        return ()=>{
            window.removeEventListener('scroll',handleScroll)
        }
    },[])

    if(loading)
    {
        return <div>Loading....</div>
    }

    if(error)
    {
        return <div>{error.message}</div>
    }

    return (
        <div className="container">
            <div className="top-container">
            <h1>Custom Scroll Indicator</h1>
            <div className="scroll-container">
                <div className="current-progress" 
                style={{width: `${scroll}%`}}>
                </div>
            </div>
            </div>
            <div className="data-container">
                {
                    data && data.length > 0 ? 
                    data.map((item) => 
                        <p>{item.title}</p>
                    )
                    : null 
                }
            </div>
        </div>
    )
}
