import React from "react";
import './App.css' ;
import { Brand,Cta,Navbar } from "./components";
import{ Footer,Blog,Possibility,Features,What,Header } from './containers';

const App=()=>{
  return(
    <div className="App">
      {/* <h1>Horizon-Iceberg</h1> */}
      <div className="gradient__bg">
        <Navbar/>
        <Header />
      </div>
      {/* <Brand/> */}
      <What/>
      <Blog/>
      <Features/>
      <Possibility/>
      <Cta/>
      
      <Footer/>
    </div>
  )
}



export default App;
