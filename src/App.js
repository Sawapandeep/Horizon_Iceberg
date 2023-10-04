import React from "react";
import './App.css' ;
import { Brand,Cta,Navbar } from "./components";
import{ Footer,Blog,Possibility,Features,What,Header } from './containers';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
const App=()=>{
  return(
    <div className="App">
      {/* <h1>Horizon-Iceberg</h1> */}
      <div className="gradient__bg">
        <Navbar/>
      </div>
      <div className="gradient__bg ">
        <Header />
      </div>
     
      <Brand/>
      {/* <What/> */}
      <Blog/>
    
    {/* <BrowserRouter>
      <Routes>
      
          <Route path="/" component={ Blog } />
         
        
      </Routes>
    </BrowserRouter> */}
      {/* <Features/> */}
      {/* <Possibility/> */}
      <Cta/>
      
      <Footer/>
    </div>
  ) 
}



export default App;
