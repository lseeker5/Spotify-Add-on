import "./Track.css"
import React from 'react'

export default function Track(props){

    const track=props.details
    const name=track.name
    const artist=track.artist
    const isRemoval=props.removal
    const addSong=props.addSong
    const id=props.details.id
    const deleteSong=props.deleteSong

    
    const[buttonText,setButtonText]=React.useState("")
    React.useEffect(()=>{
        if(isRemoval){
        setButtonText("-")
    }
    else{
        setButtonText("+")
    }},[])
    
    function handleClick(e,val,item){
        if(item){
           deleteSong(id)
        }
        else{
            
            //console.log(val)
            addSong(val)

        }
    }

    return(
        <div className="Track">
            <div className="Track-information">
                <h3>{name}</h3>
                <p>{artist}</p>
            </div>
            <button className="Track-action" onClick={(e)=>{handleClick(e,track,isRemoval,id)}}
            >{buttonText}</button>
        </div>
    )
}