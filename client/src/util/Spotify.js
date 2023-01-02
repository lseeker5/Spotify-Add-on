import Axios from "axios"
let accessToken
const clientID="97fde84b14fc441f8b1421336027a266"
const redirectURI = "http://localhost:3000/"



const Spotify={
    getAccessToken(){
        if(accessToken){
            return accessToken
        }
        const accessTokenMatch=window.location.href.match(/access_token=([^&]*)/)
        const expiresInMatch=window.location.href.match(/expires_in=([^&]*)/)

        if(accessTokenMatch&&expiresInMatch){
            accessToken=accessTokenMatch[1]
            const expiresIn=expiresInMatch[1]
            window.setTimeout(()=>{accessToken=""},expiresIn*1000)
            window.history.pushState('Access Token',null,'/')
            return accessToken
        }

        else{
            window.location.replace(`https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`)

        }
        
    },

    search(term){
        const accessToken=Spotify.getAccessToken()
        //use accesstoken to search for songs
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(response => {
      return response.json();})
        // return Axios.get(`https://api.spotify.com/v1/search?type=track&q=${term}`,{
        //     headers: {
        //         Authorization: `Bearer ${accessToken}`}
        //   })
          .then(res=>{
            if(!res.tracks){
                return []
            }
            //get the necessary info from all the shit that is given back
            return res.tracks.items.map((track)=>{
                return({
                    id:track.id,
                    name:track.name,
                    artist:track.artists[0].name,
                    album:track.album.name,
                    uri:track.uri
                })
                
            })
          })
    },

    savePlaylist(name,trackURIs){
        if(!name||trackURIs.length){
            return
        }
        const accessToken=Spotify.getAccessToken()
        const headers={Authorization: `Bearer ${accessToken}`}
        let userId
        return fetch('https://api.spotify.com/v1/me', {headers: headers}
        ).then(response => response.json()
        ).then(jsonResponse => {
          userId = jsonResponse.id;
          return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
            headers: headers,
            method: 'POST',
            body: JSON.stringify({name: name})
          }).then(response => response.json()
          ).then(jsonResponse => {
            const playlistId = jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
              headers: headers,
              method: 'POST',
              body: JSON.stringify({uris: trackURIs})
            });
          });
        });
        //get userid
        // return Axios.get('https://api.spotify.com/v1/me',{headers: headers}).then(res=>{
        //     userId=res.id
        //     //use userid to create new playlist and get playlist id
        //     return Axios.post(`/v1/users/${userId}/playlists`,{name:name},{headers:headers})
        // }).then(res=>{
        //     const playlistId=res.id
        //     //use userid and playlistid to put tracks into the playlist
        //     return Axios.post(`/v1/users/${userId}/playlists/${playlistId}/tracks`,{uris:trackURIs},{headers:headers})
        // })
    }
    


}

export default Spotify