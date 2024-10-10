import React,{useState} from 'react'
// state handling using Use state //
// counter incrementing and Decremnting value//
const Counter = () => {
const [Count,Setcount]=useState(0)
const [incrementBy,setIncrement]=useState(1)
const [Colours,SetColour]=useState("Red")
function Increment(){
    Setcount(Count + incrementBy)
}
function Decrement(){
    Setcount(Count - incrementBy)
}

function Reset(){
    Setcount(Count==0+" "+"The cont value is reset")
}

function increase(){
    setIncrement(incrementBy+1)
}


function decrease(){
    setIncrement(incrementBy-1)
}

function Red(){
    SetColour("Red")
}

function Green(){
    SetColour("Green")
}
  return (
    <div>
      <h1>Count Valu is:{Count}</h1>
      <button onClick={Increment}>Incriment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>

      <h1>we are incriment the value by:{incrementBy}</h1>
      <button onClick={increase}>Increment By</button>
      <button onClick={decrease}>Decrement By</button>

      <h1>we are setting colour:{Colours}</h1>
      <button onClick={Red}>The colour is red</button>
      <button onClick={Green}>The colour is Green</button>
    </div>
  )
}

export default Counter
