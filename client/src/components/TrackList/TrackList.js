import "./TrackList.css"
import Track from "../Track/Track"
import React from 'react'

export default function TrackList(props){
    const[tracks,setTracks]=React.useState([])
    React.useEffect(()=>{
        setTracks(props.tracks)
    },[])
    
    
    const TrackList=tracks.map((track)=>{
        
        return <Track key={props.tracks.id} details={track}/>
    })
    return(
        <div className="TrackList">
            {TrackList}
        </div>
    )
}