import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./pages/Hero"
import About from "./pages/About"
import Contact from './pages/Contact'

function App() {
return(
  <div className="bg-blue-gradient pt-[10px] pb-[20px] justify-center">

  <Navbar/> 
  <Hero/>
  <About/>
  <Contact/>
  </div>
)
}

export default App
