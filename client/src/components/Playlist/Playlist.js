import "./Playlist.css"
import TrackList from '../TrackList/TrackList'

export default function Playlist(props){
    const name=props.name
    const handleChange=props.changePlaylistName
    return(
        <div className="Playlist">
            <input defaultValue={name} onChange={(e)=>{handleChange(e)}}/>
            <TrackList tracks={props.tracks} removal={props.removal} addSong={props.addSong} deleteSong={props.deleteSong}/>
            <button className="Playlist-save" onClick={props.onSave}>SAVE TO SPOTIFY</button>
        </div>
    )
}