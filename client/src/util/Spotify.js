let accessToken
const clientID="97fde84b14fc441f8b1421336027a266"
const redirectURI = "http://localhost:3000/"
import Axios from "axios"


export default Spotify={
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

    search(para){
        const accessToken=Spotify.getAccessToken()
        return Axios.get(`https://api.spotify.com/v1/search?type=track&q=${para}`,{
            headers: {
                Authorization: `Bearer ${accessToken}`}
          }).then(res=>{
            if(!res.tracks){
                return []
            }
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
        if(!playlistName||trackURIs.length){
            return
        }
        const accessToken=Spotify.getAccessToken()
        const headers={Authorization: `Bearer ${accessToken}`}
        let userId

        return Axios.get('https://api.spotify.com/v1/me',{headers: headers}).then(res=>{
            userId=res.id
            return Axios.post(`/v1/users/${userId}/playlists`,{name:name},{headers:headers})
        }).then(res=>{
            const playlistId=res.id
            return Axios.post(`/v1/users/${user_id}/playlists/${playlist_id}/tracks`,{uris:trackURIs},{headers:headers})
        })
    }
    


}