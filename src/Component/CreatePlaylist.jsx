import React from 'react'
import { useLocation } from 'react-router'

export default function CreatePlaylist() {
     const Token=sessionStorage.getItem("accestoken")
     const playlistid=sessionStorage.getItem("playlistid")
     console.log("playlist",playlistid);
     console.log("token",Token);
     
  return (
    <div style={{backgroundColor:"gray"}}>

<h1>Ai ile spotify listesi oluştur.</h1>


    </div>
  )
}
