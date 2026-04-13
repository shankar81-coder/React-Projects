import { createContext, useEffect, useState } from "react";
import  featureFlagDataServiceCall  from "./data";
import App from './App'

export const FeatureFlagsContext = createContext(null);

export default function Flag({ children }) {

  const[loading,setLoading] = useState(false)
  const[enabledFlags,setEnabledFlags] = useState({})

  async function fetchFlags()
  {
    try{
      setLoading(true)
      const response = await featureFlagDataServiceCall()
      setEnabledFlags(response)
      setLoading(false)

    }catch(e)
    {
      console.log(e.message)
      setLoading(false)
      throw new Error(e)
    }
  }

  useEffect(()=>{
    fetchFlags()
  },[])

  return (
    <>
      <FeatureFlagsContext.Provider value={{ loading,enabledFlags }}>
        {children}
      </FeatureFlagsContext.Provider>
    </>
  );
}
