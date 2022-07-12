import React from "react";
import Vimg from "./img/v.png"



function Card({card, handleChoice, flipped, disabled}) {

const handleClick = () => {
  if(!disabled) {
handleChoice(card)
  }


}
console.log(card.src)


    return (

  <div className="card" key={card.id}>
    <div className={flipped ? "flipped" : ""}>
      <img src={card.src} className="front" alt="front"/>
      <img src={Vimg} className="back" onClick={handleClick} alt="back"/>
      </div>

  </div>
    )
}

export default Card