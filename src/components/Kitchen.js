import React from "react"
import Sink from "./sink"
import Oven from "./oven"

function Kitchen (){
  return  <div className="kitchen">
        <h1>Kitchen</h1>
        <div>
            <Oven />
            <Sink />
        </div>
    </div>
}

export default Kitchen