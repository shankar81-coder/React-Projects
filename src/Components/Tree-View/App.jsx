import React from "react";
import '../Tree-View/style.css'
import MenuList from "./menuList";

export default function Menu({menus = []})
{
    
    return (
            <div className="tree-view-container">
        
           <MenuList list={menus}/>
        
    </div>
    )
}
