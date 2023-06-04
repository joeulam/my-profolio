import React from 'react';

export default async function Tst() {
  const music = await loadspotify();
  //var a = music.entries[1].API
  return <p>Im currently listening to: {}</p>;
}

const client_id = "70adfcf4e5aa488e9d8d86274ab01561" // Your client id
const client_secret = "265a505c48184865976f0ada6a90d9a1" // Your secret

export async function loadspotify() {
  var tokenjson = await getSpotifyToken()
  var token = tokenjson.access_token
  const url = `https://api.spotify.com/v1/me/player/currently-playing`;
  var response = await fetch(url, {
    headers: {
        Authorization:`Bearer ${token}`,
    },
});
console.log(response)

}



async function getSpotifyToken() {
  cache: "no-store"
  const url = 'https://accounts.spotify.com/api/token';
  var response = await fetch(url, {
      method: 'POST',
      headers: {
          'code':"AQC00ivmsrRMK99qmGaHDX9eRgpRUjWcAago7L7YO_s8_1Gxk8zX8C8koe5AoSkvE_R8CBjqitfe4OGpckBZ2x75-pwWL5w0faZNZLD-so9HhJdxlaalo6hKc2_ksNc4RImtZSwaeqFfppj-aX8pfJjhPMY4GNrJrvR1Y8zvHhG-wL5XZFmy5DDfiU5IjRYVNWqW4LDNx9QJMaMrsDs",
          'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64')),
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=authorization_code',
      // client_credentials or authorization_code// 
      scope:'user-read-currently-playing',
      json: true
  });
  if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      return jsonResponse
  } else {
      console.log(response.statusText);
      throw new Error(`Request failed! Status code: ${response.status} ${response.statusText}`);
  }
}
