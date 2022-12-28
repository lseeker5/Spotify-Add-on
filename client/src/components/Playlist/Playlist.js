import "./Playlist.css"
import TrackList from '../TrackList/TrackList'

export default function Playlist(props){
    return(
        <div className="Playlist">
            <input defaultValue={"New Playlist"}/>
            <TrackList tracks={props.tracks}/>
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    )
}