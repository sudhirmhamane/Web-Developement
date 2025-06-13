// import { useState } from "react";
// import "./App.css";
// import axios from "axios";

// function App() {
//   const [data, setData] = useState([]);
//   const getData = async () => {
//     const responce = await axios.get("https://picsum.photos/v2/list");
//     setData(responce.data);
//     console.log(data);
//   };
//   return (
//     <>
//       <button
//         onClick={getData}
//         className="rounded p-4 m-4 bg-lime-400 text-black"
//       >
//         Get Data
//       </button>

//       <div className="m-5 p-5 border-e-indigo-950">
//         {data.map(function (elem, idx) {
//           return (
//             <div
//               key={idx}
//               className="bg-gray-500 text-black flex items-center justify-between w-full px-6 py-7 rounded mb-5"
//             >
//               <img className="h-40" src={elem.download_url} alt="" />
//               <h1>
//                 Name:{elem.author},<br />
//                 Width:{elem.width},<br />
//                 Height:{elem.height}
//               </h1>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }

// export default App;

// import React from 'react'
// import {Route,Routes} from 'react-router-dom'
// import About from './pages/About'
// import Home from './pages/Home'
// import Product from './pages/Product'
// import Contact from './pages/Contact'
// import Header from './components/Header'

// const App = () => {
//   return (
//     <>
//       <Header />
//       <Routes>
//       <Route path='/' element={<Home />}/>
//         <Route path='/about' element={<About />}/>
//         <Route path='/product' element={<Product />}/>
//         <Route path='/contact' element={<Contact />}/>
//       </Routes>
//     </> 
//   )
// }

// export default App

import React, { createContext } from 'react'
import {dataContext} from './context/UserContext';

const App = () => {

  const data = createContext(dataContext);
  console.log(data);
  return (
    <div>
      <h1>This is App{data}</h1>
    </div>
  )
}

export default App
