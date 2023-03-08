import React from "react"
import Header from "Components/Header"
import {Routes,Route} from "react-router-dom"
import Cart from "Pages/Cart"
import Photos from "Pages/Photos"


function App(){
  return(
    <div>
    <Header/>
    <h1>Home Page</h1>
    <Routes>
      <Route exact path="/" element={<Photos/>}/>
      <Route path="/Cart" element={<Cart/>}/>
    </Routes>
    </div>
  )
}
export default App