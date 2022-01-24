// import { Button } from 'react-bootstrap'
import React from 'react'
import './RenderTask.css';

export default function RenderTask({arr, handleBookNow}) {
    return (
        <div>{
            arr.length !== 0 ? 
                arr.map((ele, index)=>{
                    return (
                        <div key={index} className="list-box" style={index%2 ? {backgroundColor: "#354046", color: "#fff"} : {backgroundColor: "white"}}>
                            <label>
                                {/* <input type="checkbox" /> */}
                                <span> {index+1}. {ele}</span>
                            </label>
                            {/* <div className="btnDiv"> */}
                                {/* <Button variant="outline-success" onClick={()=>handleDone(index)}>Done</Button> */}
                                {/* <button className="button" onClick={()=>handleBookNow(index)}>Book now</button> */}
                            {/* </div> */}
                        </div>
                    )
                }) :
                <>
                    <br/>
                    <h4>&nbsp; Empty List....</h4> 
                </>
        }</div>
    )
}
