import React, { useState } from "react";
// input handling//
const Form = () => {
  //   const [name, setName] = useState("");

  // setting multiple input field//

  const [name, setName] = useState({ 
    firestName: "",
    lastName: "",
  });


  function handleClick(e){
    e.preventDefault();
    console.log(name)

  }

  //   function handleChange(e) {
  //     // console.log(e.target.value);
  //     setName(e.target.value)
  //   }
  return (
    <div>
        {name.firestName} - {name.lastName}
      <form>
        <input
          //   onChange={function demo(e) {
          //     return handleChange(e);
          //   }}
          //will do with function Handel change//
          // onChange={(e)=>handleChange(e)}

          // No change is Required//
          //   onChange={(e)=>setName(e.target.value)}
          //   type="text"
          //   value={name}

          // we are using spread operator ...name to avoid value error//
          onChange={(e) => setName({ ...name, firestName: e.target.value })}
          type="text"
          value={name.firestName}
        />{" "}


        <input
          type="text"
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          value={name.lastName}
        />

        <button onClick={(e)=>handleClick(e)}>Add</button>
      </form>
    </div>
  );
};

export default Form;
