import React, { useState } from "react";
import Home from "./Home";
import axios from "axios";

const CreatePlaylist = () => {
  const basUrl="https://spotifylistappserver.onrender.com/api"

  const [artistText, setArtistText] = useState("");
  const [styleText, setStyleText] = useState("");
  const [error, setError] = useState("");
const token=sessionStorage.getItem("accestoken");
const playlistid=sessionStorage.getItem("playlistid");
if(!token||!playlistid){
return <Home/>
}
  

  const handleSubmit = async() => {
    if (!artistText.trim() || !styleText.trim()) {
      setError("Lütfen boş alanları doldurun");
    } else {
      const formdata=new FormData();
      formdata.append("artists",artistText);
      formdata.append("style",styleText);
      formdata.append("accesToken",token);
      formdata.append("playListId",playlistid);
const res= await axios.post(`${basUrl}/RunnApp/run`,formdata);
console.log(res);
console.log(res.data);



      setError("");
    
     
    }
  };

  const containerStyle = {
    minHeight: "100vh",
    backgroundColor: "#191414",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  };

  const boxStyle = {
    backgroundColor: "#1e1e1e",
    borderRadius: "20px",
    padding: "30px",
    maxWidth: "400px",
    width: "100%",
    color: "white",
    boxShadow: "0 0 20px rgba(0,0,0,0.4)",
  };

  const labelStyle = {
    fontSize: "14px",
    marginBottom: "8px",
    display: "block",
    color: "#ccc",
  };

  const textAreaStyle = {
    width: "100%",
    backgroundColor: "#2a2a2a",
    borderRadius: "12px",
    padding: "12px",
    color: "white",
    border: "none",
    marginBottom: "20px",
    resize: "none",
    fontSize: "14px",
  };

  const buttonStyle = {
    width: "100%",
    backgroundColor: "#1DB954",
    color: "#191414",
    border: "none",
    padding: "12px",
    fontWeight: "bold",
    borderRadius: "12px",
    cursor: "pointer",
    fontSize: "16px",
  };

  const errorStyle = {
    color: "red",
    marginTop: "10px",
    fontSize: "13px",
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h2 style={{ textAlign: "center", marginBottom: "20px", fontSize: "22px" }}>
          🎶 Müzik Listesi Oluştur
        </h2>

        <label style={labelStyle} htmlFor="artists">
          🎤 Sanatçı İsimleri
        </label>
        <textarea
          id="artists"
          rows="4"
          placeholder="Örnek: Tarkan, Sezen Aksu..."
          value={artistText}
          onChange={(e) => setArtistText(e.target.value)}
          style={textAreaStyle}
        />

        <label style={labelStyle} htmlFor="style">
          🎵 Müzik Tarzı
        </label>
        <textarea
          id="style"
          rows="2"
          placeholder="Örnek: Pop, Rock, Jazz..."
          value={styleText}
          onChange={(e) => setStyleText(e.target.value)}
          style={textAreaStyle}
        />

        <button style={buttonStyle} onClick={handleSubmit}>
          Oluştur
        </button>

        {error && <div style={errorStyle}>{error}</div>}
      </div>
    </div>
  );
};

export default CreatePlaylist;








