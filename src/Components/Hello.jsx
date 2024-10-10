import React from 'react'
import '../App.css'
// const name='ROB'
// function Mymessage(){
//   return "all is well"
// }



const Hello = ({name,age,work,emoji,seatnumber,bussNumber,Person}) => {
  return (
    <div>
      {/* passing prop by deconstruction */}
      {/* <p>Hello i am {Mymessage()} : {name}</p> */}
      {/* <h1>Hello my name is {name}:{age}:{work}:{emoji}</h1> */}

      {/* passing array as prop
      <p>Hello the arry is {seatnumber}:</p>
      <p>: Buss number is {bussNumber}</p> */}

      {/* passing Object as props */}
      {/* <p>Hello my name is  {Person.name}:</p><br/>
      <p>Hello my seat number is  {Person.MyseatNumber}</p> */}

    </div>
  )
}

export default Hello
