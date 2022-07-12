import React, { useState, useEffect } from "react";
import "./App.css"

import Card from "./Card"

function App() {
const [cards, setCards] = useState([])
const [turn, setTurn] = useState(0)
const [choseFirst, setChoseFirst] = useState(null)
const [choseSecond, setChoseSecond] = useState(null)
const [disabled, setDisable] = useState(false)


const cardsData = [
    {src: require("./img/diamond-ring.png"), matched: false},
    {src: require("./img/potion.png"), matched: false},
    {src: require("./img/samurai.png"), matched: false},
    {src: require("./img/scroll.png"), matched: false},
    {src: require("./img/shield.png"), matched: false},
    {src: require("./img/swords.png"), matched: false},
]


function shuffleCards() {

  const shuffledCards = [...cardsData, ...cardsData]
  .sort(() => Math.random() - 0.5)
  .map((card)=> ({...card, id: Math.random()}))
setTurn(0)
setChoseFirst(null)
setChoseSecond(null)
setCards(shuffledCards)

}

const handleClick = (card) => {
choseFirst ? setChoseSecond(card) : setChoseFirst(card)
}

useEffect(()=> {
 if(choseFirst && choseSecond) {
   setDisable(true)
   if(choseFirst.src === choseSecond.src) {
setCards(prevCard => {
  return prevCard.map(card => {
    if(card.src === choseFirst.src) {
      return {...card, matched: true}
    } else {
      return card
    }
  })
})
     resetTurn()
   } else {
     setTimeout(() => {
       
       resetTurn()
     }, 1000)
   }
 } 
}, [choseFirst, choseSecond])




function resetTurn() {
  setChoseFirst(null)
  setChoseSecond(null)
  setTurn(prevTurn => prevTurn + 1)
  setDisable(false)
}

const img = cards.map(card => <img src={card.src} />)

  return (
    <div className="app">
      <div className="heading">

      <h1>Flip</h1>
      <button onClick={shuffleCards}>Start game</button>
      </div>

      <div className="card-grid"> 
{cards.map(card => (<Card 

key={card.id} 
card={card} 
handleChoice ={handleClick}
flipped={card === choseFirst || card === choseSecond || card.matched}
disabled={disabled}
/>)

  )}
      </div>
<h3>Turn: {turn}</h3>
    </div>
  )
}

export default App