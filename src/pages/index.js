import React , { useState, useEffect, useRef } from "react"
import NavBar from "../components/Navbar"
import Home from "./Home/Home"
import "./index.css";

 
import BIRDS from 'vanta/dist/vanta.birds.min'

 
const IndexPage = () => {
 
    return(
       <main  >

        <NavBar />
        <Home />
       </main>
    )

}
 

export default IndexPage

export const Head = () => <title>Home Page</title>
