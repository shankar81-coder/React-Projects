import React from 'react';
import { createRoot } from "react-dom/client"
// import App from './Components/Accordian/App'
// import App from './Components/RandomColor/App';
// import App from './Components/StarRating/App'
// import App from './Components/ImageSlider/App'
// import LoadMore from './Components/Load-More-btn/LoadMore';
// import App from './Components/Tree-View/App'
// import menus  from './Components/Tree-View/data';
// import App from './Components/QR-project/App'
// import App from './Components/Light-Dark/App'
// import App from './Components/Scroll-Indicator/App'
// import App from './Components/custom-tabs/App'
// import Parent from './Components/custom-popup/parent'
import Git from './Components/git-profile-finder/Git'



const root = createRoot(document.getElementById("root"))
root.render(
/* <App 
// // noOfStars={10}
//     url ={'https://picsum.photos/v2/list'}
//     limit={'10'}
//     page={'1'}
/> */
/* <LoadMore/> */
/* <App menus={menus}/> */ 
/* <App url={'https://dummyjson.com/products?limit=100'}/> */
/* <Parent/> */
<Git/>
)

