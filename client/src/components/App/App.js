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
      id:1
    },
    {
      name:"Learn To Meow",
      artist:"Tiktok",
      album:"Good tt songs",
      id:2
    }
  ])

  const [playlists,setPlaylists]=React.useState([
    {
      name:"Sad Songs",
      artist:["We Dont Talk Anymore","Little Do You Know","If I Die Young"],
      id:1
    },
    {
      name:"Best Nightcore ",
      artist:["We Dont Talk Anymore","Little Do You Know","If I Die Young"],
      id:2
    }
  ])


  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar/>
        <div className="App-playlist"> 
        <SearchResults tracks={searchResults}/>
        <Playlist tracks={playlists}/>
        </div>
      </div>
    </div>
  );
}

export default App;
