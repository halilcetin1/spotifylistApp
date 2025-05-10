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
      //code
      axios.post(`${basUrl}/Spotify/callback`, data)
        .then(res => {
          console.log("Token alındı:", res.data);
          // JWT token varsa localStorage'a kaydet
          localStorage.setItem("spotify_access_token", res.data.access_token);
          navigate("/playlist");
        })
        .catch(err => {
          console.error("Token alma hatası", err);
        });
    }
  }, []);

  return <div>Giriş yapılıyor...</div>;
}

export default Callback;