import TrackList from "../TrackList/TrackList"
import "./SearchResults.css"

export default function SearchResults(props){
    const tracks=props.tracks
    return(
        <div className="SearchResults">
            <h2>Results</h2>
            <TrackList tracks={tracks} removal={props.removal} addSong={props.addSong} deleteSong={props.deleteSong}/>
        </div>
    )
}