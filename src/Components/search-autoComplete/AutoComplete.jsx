import { useEffect, useState } from "react";
import Suggestion from "./Suggestion";
import "./auto.css";

export default function SearchAutoComplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const[searchParam,setSearchParam] = useState('')
  const[showUsers,setShowUsers] = useState(false)
  const[filteredUsers,setFilteredUsers] = useState([])

  function handleChange(event)
  {
    const query = event.target.value.toLowerCase();
    setSearchParam(query)
    if(query.length > 1)
    {
        const filteredData = users && users.length ? 
                users.filter((item) => item.toLowerCase().indexOf(query) > -1)
        : []
        setFilteredUsers(filteredData)
        setShowUsers(true)
    }else{
        setShowUsers(false)
    }
  }

  async function fetchUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      console.log(data);

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
      setError(e);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(users,filteredUsers)

  function handleClick(event) {
    setSearchParam(event.target.innerText)
    setShowUsers(false)
    setFilteredUsers([])
  }

  return (
    <div className="search-autocomplete-container">
      {loading ? <div className="loading">Loading please Wait...</div> : null}
      <input 
        value={searchParam}
        className="search-input"
        type="text" 
        name="search-users" 
        placeholder="Search Users Here..." 
        onChange={handleChange}
      />
      {showUsers ? <Suggestion handleClick={handleClick} data={filteredUsers}/> : null}
    </div>
  );
}
