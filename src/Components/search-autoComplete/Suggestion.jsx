

export default function Suggestion({data, handleClick})
{
    return(
        <ul className="suggestion-list">
            {
                data && data.length ? 
                data.map((dataItem,index) => <li className="suggestion-item" onClick={handleClick} key={index}>
                    {dataItem}
                </li>)
                : <li className="suggestion-item no-data">No users found</li>
            }
        </ul>
    )
}