import React from "react";
import Fruits from "./Fruits";
const Fruit = () => {
  // rendering array or list/arry in react//
  //   const fruits = ["Apple", "Mango", "Bannana", "Grapes", "Pineapple"];

  // rendering array of object//
  const fruits = [
    {
      name: "apple",
      price: "15",
      emoji: "🍎   ",
      soldout:false,
    },
    {
      name: "pine apple",
      price: "22",
      emoji: "🍍  ",
      soldout:true,
    },
    {
      name: "greaps",
      price: "35",
      emoji: "🍇 ",
      soldout:false,
    },
    {
      name: "bannana",
      price: "25",
      emoji: "🍌  ",
      playback: "15",
      soldout:true,
    },
  ];

  return (
    <div>
      {/* rendering array and list in react map*/}
      {/* {fruits.map(fruites =>(
        <ul>
        <li key={fruites}>{fruites}</li>
        </ul>
      ))} */}
      {/* rendering aray of object 
        key should be always be in outer most element
        key value should be unique
      
      */}

      {/* {fruits.map((fruit) => (
        <ul key={fruit.name}>
          
            <h1 >
             <li> {fruit.name}</li>
             <li> {fruit.price}</li>
             <li> {fruit.emoji}</li>
            </h1>
          
        </ul>
      ))} */}
      {/* fruit component rendering */}
     {fruits.map((fruit)=>(
        <Fruits
          key={fruit.name}
          name={fruit.name}
          emoji={fruit.emoji}
          price={fruit.price}
          soldout={fruit.soldout}
        />
      
     ))}
    </div>
  );
};

export default Fruit;
