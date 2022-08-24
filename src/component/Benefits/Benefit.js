import React from "react";
import "./Benefit.css"; 
import { cards } from "../../constants";
const Benefit = () => { 
    return(
        <div className="card-container">
        {cards.map((item) => (
            <div className="card" key={item.id}>
                <div className="card-header">
                    <h2>{item.cardHeader}</h2>
                    <p>{item.cardText}</p>
                </div>

                <div className="card-images">
                    <img src={item.image} alt = ""></img>
                </div>
               
            </div>
        ))}
            
        </div>
    )
}
export default Benefit