import React from 'react'

export default function Color(props) {
  return (
    // <div>Color</div>
    <>
    <h5>color</h5>
    <button style={{margin:"5px",border:"2px solid black",borderRadius:"50px",backgroundColor:"red",height: "20px",
    width: "20px",cursor:"pointer"}} onClick={()=>props.setColor("red")}></button>
    <button style={{margin:"5px",border:"2px solid black",borderRadius:"50px",backgroundColor:"green",height: "20px",
    width: "20px",cursor:"pointer"}}onClick={()=>props.setColor("green")}></button>
    <button style={{margin:"5px",border:"2px solid black",borderRadius:"50px",backgroundColor:"yellow",height: "20px",
    width: "20px",cursor:"pointer"}}onClick={()=>props.setColor("yellow")}></button>
    <button style={{margin:"5px",border:"2px solid black",borderRadius:"50px",backgroundColor:"orange",height: "20px",
    width: "20px",cursor:"pointer"}}onClick={()=>props.setColor("orange")}></button>
    <button style={{margin:"5px",border:"2px solid black",borderRadius:"50px",backgroundColor:"white",height: "20px",
    width: "20px",cursor:"pointer"}}onClick={()=>props.setColor("white")}></button>
    <button style={{margin:"5px",border:"2px solid black",borderRadius:"50px",backgroundColor:"black",height: "20px",
    width: "20px",cursor:"pointer"}}onClick={()=>props.setColor("black")}></button>

    </>
  )
}
