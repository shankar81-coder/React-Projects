import { useEffect, useState } from "react"
import User from './user'
import './git.css'

export default function GitProfilFinder()
{
    const[username,setUsername] = useState("shankar81-coder")
    const[userData,setUserData] = useState(null)
    const[loading,setLoading] = useState(false)

    async function fecthGitData()
    {
        setLoading(true)
        const res = await fetch(`https://api.github.com/users/${username}`)

        const data = await res.json();
        
        if(data)
        {
            setUserData(data)
            setLoading(false)
            setUsername("")
        }
        
    }


    function handleSubmit()
    {
        fecthGitData() 
    }

    useEffect(() => {
            fecthGitData()
        },[])

    return (
      <div className="github-profile-wrapper">
        <div className="github-profile-container">
          <h1 className="title">GitHub Finder</h1>
          <div className="input-wrapper">
              <input 
              type="text"
              name="search-by-username"
              placeholder="Search Github Username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              />
              <button onClick={handleSubmit}>Search</button>
          </div>
          {
              loading ? (
                  <div className="loading-container">
                      <div className="spinner"></div>
                      <p>Loading Data Please Wait...</p>
                  </div>
              ) : userData !== null ? (
                  <User user={userData}/>
              ) : null
          }
        </div>
      </div>
    )
}