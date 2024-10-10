import React from "react";

const Fruits = ({ name, emoji, price,soldout }) => {
  return (
    // <div>
    //   <li>
    //     {/* rendered from fruit.jsx
    //  {emoji}
    //  {name}
    //  {price} */}

    //     {/* conditonally rendering list items */}
    //     {price > 5 ? (
    //       <h1>
    //         {emoji}
    //         {name}
    //         {price}
    //       </h1>
    //     ) : (
    //       ""
    //     )
    //   </li>
    // </div>
    <>
    {/* Conditionally Rendering A Message Using Ternary */}
     <li>
      {name}{emoji}{price}{soldout ? "soldout":""}
     </li>
    
    </>
  );
};

export default Fruits;
