import React from 'react';
import ReactDOM from 'react-dom';

function Card(props) {
  let statusData
if(props.OpenSlot>0)
  statusData="SOLD"
  else
  statusData="ONLINE"
  
  return (
    <div className="Card--class">
      <div>
      <span className="card--badge">
        {statusData}
        </span>
        <img
          className="Card-Image"
          src={props.CardImage}
          alt="Image of Swimmer"
        />
      </div>
      <section className="Details">
        <img
          className="star-image"
          src="https://media.istockphoto.com/photos/large-gold-star-against-white-background-picture-id177012223?b=1&k=20&m=177012223&s=170667a&w=0&h=7jEDBVFIMb9ozxLKR53iNg_xn8DDjnx_t7pHRbJAol4="
          at="star Image"
        />
        <span style={{paddingLeft:"8px"}}>5.0</span>
        <span style={{color:"#918E9B",paddingLeft:"5px" }}> (6).USA</span>
        <p>Life Lessons with {props.Name}</p>
        <p><b>From ${props.Price}</b> /person</p>
        </section>
    </div>
  );
}
export default Card;
