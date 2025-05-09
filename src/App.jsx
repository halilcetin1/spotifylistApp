import React from "react";
import { FaSpotify } from "react-icons/fa";
import { Route,Routes } from "react-router";
import Callback from "./Component/Callback";

const App = () => {
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
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#191414", // Spotify koyu teması
        color: "white",
        padding: "2rem",
      }}
    >
      <h1 style={{ marginBottom: "2rem", fontSize: "2rem" }}>
        Yapay Zeka ile Spotify Listesi Oluştur
      </h1>
      <button
        onClick={handleLogin}
        style={{
          backgroundColor: "#1DB954",
          color: "white",
          border: "none",
          padding: "0.8rem 1.5rem",
          fontSize: "1.1rem",
          borderRadius: "30px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          cursor: "pointer",
          transition: "0.3s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
      >
        <FaSpotify size={24} />
        Giriş Yap ve Liste Oluştur
      </button>
<Routes>
  <Route path="/callback" element={<Callback/>}></Route>
</Routes>

    </div>
  );
};




export default App
