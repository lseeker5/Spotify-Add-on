import "./Track.css"
import React from 'react'

export default function Track(props){

    const track=props.details
    console.log(track)
    const name=track.name
    const artist=track.artist

    const[isRemoval,setIsRemoval]=React.useState(true)
    const[buttonText,setButtonText]=React.useState("")

    function renderAction(){
        if(isRemoval){
            setButtonText("-")
        }
        else{
            setButtonText("-")
        }

        setIsRemoval(prev=>!prev)
    }

    return(
        <div className="Track">
            <div className="Track-information">
                <h3>{name}</h3>
                <p>{artist}</p>
            </div>
            <button className="Track-action" onClick={renderAction}>{buttonText}</button>
        </div>
    )
}