import React from 'react'
import Welocme from './Welocme';
import Cod from './Cod';
const ConditonalComponents = () => {
    // const display=false;
    // if(display){
    //      {/* conditonal Rendering */}
    //      return
    //         <div>
    //           <h3>This is a condtional Component</h3>
    //         </div>
    //     
    // } else{
            // return
    //     <div>
    //       <h3>Code evey day</h3>
    //     </div>
    // }
// conditonal redering Component//
    // if(display){
    //     return<Welocme/>
        
    // }else{
    //     return <Cod/>
        
    // }
// Conditional Rendering Using Element Variables//
// let messageOne=<h1>This is message one</h1>
// let messageTwo=<h1>This is message Two</h1>  
// const display=false;
// if(display){
//     return messageOne
// } else{
//     return messageTwo
// }
// return once not twice//
// let message;
// const display=true;
// if(display){
//     message=<h1>This is message one</h1>
// }else{
//     message=<h1>This is message Two</h1> 
// }
// return message

// terinnay operator rendering//
const display=true;
return display ? <Welocme/> : <Cod/>

}


export default ConditonalComponents
