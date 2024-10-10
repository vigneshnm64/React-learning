import React from "react";
import Hello from "./Components/hello";
import Fruit from "./Components/Fruit"
import Fruits from "./Components/Fruits";
import ConditonalComponents from "./Components/ConditonalComponents";
import Cod from "./Components/Cod";
import Message from "./Components/Message";
import Counter from "./Components/Counter";
import Form from "./Components/Form";
const App = () => {
  // passing array to props//
  // const MyseatNumber = [1, 4, 6];
  // const BussNumber = [12, 15, 22];
  
  // passing object to prop//
  // const person={
  //    name:"veena",
  //    age:25,
  //    work:"Housewife",
  //    MyseatNumber:[1, 4, 6],

  //    name:"Aruna",
  //    age:25,
  //    work:"Housewife",
  //    BussNumber:[12, 15, 22],
  // }
  return (
    <div>
      {/* <Hello
        name="mike"
        age="15"
        work="student"
        emoji="Hi"
        // passing array to props//
        seatnumber={MyseatNumber}
        bussNumber={BussNumber}
      />
      <Hello
        name="anu"
        age="22"
        work="collage student"
        emoji="Hello"
        seatnumber={MyseatNumber}
        bussNumber={BussNumber}
      />
       */}
       {/* deconstruction of prop object */}
       {/* <Hello Person={person}/> */}
       {/* <Fruit/> */}
       {/* <ConditonalComponents/> */}
       {/* <Cod /> */}
       {/* <Message/> */}
       {/* <Counter/> */}
       <Form />
    </div>
  );
}; 

export default App;
