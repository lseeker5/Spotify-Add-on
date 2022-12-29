import SearchBar from '../SearchBar/SearchBar'
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults'
import './App.css';
import React from 'react'

function App() {
  const [searchResults,setSearchResults]=React.useState([
    {
      name:"Fight Back",
      artist:"Neffex",
      album:"IDK",
      id:1,
      
    },
    {
      name:"Learn To Meow",
      artist:"Tiktok",
      album:"Good tt songs",
      id:2,
      
    }
  ])

  const [playlists,setPlaylists]=React.useState([
    {
      name:"We Dont Talk Anymore",
      artist:"Charlie Puth",
      album:"IDK",
      id:3,
      
    },
    {
      name:"Xiao Xing Yun",
      artist:"Hebe Tian",
      album:"?",
      id:4,
      
    }
  ])

  const[playlistName,setPlaylistName]=React.useState("Sad songs")

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
     
      if(playlists[i].id!=ID){
        console.log(playlists[i])
        newPlaylist=[...newPlaylist,playlists[i]]
        console.log(newPlaylist)
      }
    }
    console.log(playlists)
    setPlaylists(newPlaylist)
    
  }

  React.useEffect(()=>{
    console.log(playlists)
  },[playlists])

  

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar/>
        <div className="App-playlist"> 
        <SearchResults tracks={searchResults} removal={false} addSong={addSong} deleteSong={deleteSong}/>
        <Playlist name={playlistName} tracks={playlists} changePlaylistName={changePlaylistName} removal={true} addSong={addSong} deleteSong={deleteSong}/>
        </div>
      </div>
    </div>
  );
}

export default App;
