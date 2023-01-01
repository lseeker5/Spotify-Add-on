import SearchBar from '../SearchBar/SearchBar'
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults'
import './App.css';
import React from 'react'
import Spotify from '../../util/Spotify';

function App() {
  const [searchResults,setSearchResults]=React.useState([])

  const [playlists,setPlaylists]=React.useState([])

  const[playlistName,setPlaylistName]=React.useState("New Playlist")

  function changePlaylistName(e){
    setPlaylistName(e.target.value)
  }

  function addSong(song){
    //console.log(song)
    setPlaylists([...playlists,song])
    
  }

  function deleteSong(ID){
    let newPlaylist=[]
    
    for(let i=0;i<playlists.length;i++){
     
      if(playlists[i].id!==ID){
        console.log(playlists[i])
        newPlaylist=[...newPlaylist,playlists[i]]
        //console.log(newPlaylist)
      }
    }
    //console.log(playlists)
    setPlaylists(newPlaylist)
    
  }

  // React.useEffect(()=>{
  //   console.log(playlists)
  // },[playlists])

  function savePlaylist(){
    const trackURIs=playlists.map((track)=>{return track.uri})
    Spotify.savePlaylist(playlistName,trackURIs)
  }

  function search(term){
    Spotify.search(term).then(res=>setSearchResults(res)).then(()=>{
      setPlaylistName("New Playlist")
      setPlaylists([])
    })
    
  }
  

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar search={search}/>
        <div className="App-playlist"> 
        <SearchResults tracks={searchResults} removal={false} addSong={addSong} deleteSong={deleteSong}/>
        <Playlist name={playlistName} tracks={playlists} changePlaylistName={changePlaylistName} removal={true} addSong={addSong} deleteSong={deleteSong} onSave={savePlaylist}/>
        </div>
      </div>
    </div>
  );
}

export default App;
