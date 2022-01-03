import React from "react"
import ReactDOM from "react-dom"

function Hero(){
  return(
    <section  className="hero-section">
      <img 
      className="grid-img"
      src="https://i.pinimg.com/originals/90/22/4d/90224dd606a96b407fd8b899ba14d3ce.jpg" alt="grid Image"/>
      <h1 className="hero--text">Online Experiences</h1>
      <p className="hero-details">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </section>
  )
}
export default Hero