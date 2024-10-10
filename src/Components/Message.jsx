import React from 'react'

function Message() {
    function hadleclick(){
        console.log("Button clicked")
    }
  return (
    <div>
    {/* Event Handlers */}

    <button onClick={hadleclick}>Click hear to get message</button>
    </div>
  )
}

export default Message