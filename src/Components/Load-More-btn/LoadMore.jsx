import React, { useEffect, useState } from 'react'
import '../Load-More-btn/style.css'

export default function LoadMore()
{
    const[loading,setLoading] = useState(false)
    const[products,setProducts] = useState([])
    const[count,setCount] = useState(0)
    const[disable,setDisable] = useState(false)

    async function fetchProducts()
    {
        setLoading(true)
        try{
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`)
            const data = await response.json()
            if(data && data.products && data.products.length)
            {
                setProducts((prevData) => [...prevData, ...data.products])
                setLoading(false)
                console.log(data)
            }
        }catch(e)
        {
            console.log(e)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts()
    },[count])

    useEffect(() => {
        if(products.length === 100) setDisable(true)
    },[products]) 

    if(loading)
    {
        return <div>Loading..!</div> 
    }

    return <div className='container'>
      <div className='product-container'> 
        {
            (products && products.length > 0) ?
               products.map((getProduct) => (
                <div key={getProduct.id} className='product'>
                    <img src={getProduct.thumbnail}/>
                    <p>{getProduct.title}</p>
                </div>
               
            ))       
            : null}
      </div>
      <div className="button">
        <button 
        disabled={disable} 
        onClick={() => setCount(count + 1)}>
            Load More Products
            </button>
        {
            disable ? <p>you have reached 100 products</p> : null
        }
      </div>
    </div>
}