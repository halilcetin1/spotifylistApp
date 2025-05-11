import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Callback() {
  const navigate = useNavigate();
const basUrl="https://spotifylistappserver.onrender.com/api"
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
console.log(code);

    if (code) {
      const data =new FormData();
      data.append("code",code);
      
      axios.post(`${basUrl}/Spotify/callback`, data)
        .then(res => {
          console.log("Token alındı:", res.data);
         
          sessionStorage.setItem("accestoken", res.data.access_token);
          sessionStorage.setItem("playlistid", res.data.playlist_id);
          navigate("/playlist-create");
        })
        .catch(err => {
          alert("bir hata oluştu");
          console.error("Token alma hatası", err);
        });
    }
  }, []);

  return <div>Giriş yapılıyor...</div>;
}

export default Callback;