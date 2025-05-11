import React from 'react'
import { FaSpotify } from "react-icons/fa";
export default function Home() {


 const handleLogin = () => {
    const clientId = "d3227bf513b84681ad6883d49308d1a8";
    const redirectUri = "https://spotifyapp.halilcetin.online/callback"; // Veya production domain
    const scope = "playlist-modify-public playlist-modify-private";

    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&scope=${encodeURIComponent(scope)}`;

    window.location.href = authUrl;
  };

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:"200px"}}>

    <h1 style={{ marginBottom: "2rem", fontSize: "2rem" }}>
        Yapay Zeka ile Spotify Listesi Oluştur
      </h1>
      <button
        onClick={handleLogin}
        style={{
         
          border: "none",
          padding: "0.8rem 1.5rem",
          fontSize: "1.1rem",
          borderRadius: "30px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          cursor: "pointer",
          transition: "0.3s",
          backgroundColor:"green",
          width:200,
          color:"white"
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
      >
        <FaSpotify size={24} />
        Giriş Yap ve Liste Oluştur
      </button>
<h1 style={{cursor:"pointer",marginTop:"100px"}}><a href="https://halilcetin.online">Halil Çetin</a></h1>
    </div>
  )
}
