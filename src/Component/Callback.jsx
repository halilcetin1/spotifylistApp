import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Callback() {
  const navigate = useNavigate();
const baseURL = import.meta.env.VITE_Base_Url;
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      const data =new FormData();
      data.append("code",code);
     console.log(code);
      
      axios.post(`${baseURL}/Spotify/callback`, data)
        .then(res => {
         
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