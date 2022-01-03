import React from "react";
import "./style.css";
import Nav from "./Nav"
import Hero from "./Hero"
import Card from "./Card"
import Details from "./Details"
export default function App() {
  return (
    <div class="App-class">
      <Nav/>
      <Hero/> 
      <div className="Cards-display">
        
      {Details.map(item=>{
        return(
        <Card
        CardImage={item.CardImage}
        Name={item.Name}
        Price={item.Price}
        OpenSlot={item.OpenSlot}/>
        )
      })}
      </div>
    </div>
  );
}
