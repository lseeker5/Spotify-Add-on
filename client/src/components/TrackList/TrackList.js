import "./TrackList.css"
import Track from "../Track/Track"
import React from 'react'

export default function TrackList(props){
    const[tracks,setTracks]=React.useState([])
    React.useEffect(()=>{
        setTracks(props.tracks)      
    },[props.tracks])

    React.useEffect(()=>{
        //console.log(tracks)
    },[tracks])

    
    
    const TrackList=tracks.map((track)=>{   
        return <Track key={props.tracks.id} details={track} removal={props.removal} addSong={props.addSong} deleteSong={props.deleteSong}/>
    })
    return(
        <div className="TrackList">
            {TrackList}
        </div>
    )
}