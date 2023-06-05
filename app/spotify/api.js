import React from 'react';

export default async function Tst() {
  const music = await loadspotify();
  //var a = music.entries[1].API
  if(music.is_playing){
    return <p>Im currently listening to: {music.item.name}</p>;
  }
  else{
    return <p>Im currently listening to nothing</p>
  }
}


  const clientId = '70adfcf4e5aa488e9d8d86274ab01561'; // Replace with your Spotify client ID
  const redirectUri = 'http://localhost:3000/callback'; // Replace with your redirect URI
  const clientSecret = '265a505c48184865976f0ada6a90d9a1'
  const refresh_token = 'AQAfp3qUGQ1-hrJKBWQq18yBwdgLP--YFnu8WmkEObI1zoLnDKzk6ZKL6I9gmPf6QLS6GKEAqzeiVvGQDPhdF1LKIQsvjsGMCwld3xpEozBNQhJSnHnr7q_sRwHmqRaXhpQ'
  const acctok = 'BQAtaPEaz_mApHEr3xDQin-3doOFd3ngFb9ExLhJ-09BmfOrqjmSPe5BC2LLSDlHnLC0cdnM6FDWm2RiB72BHrMB0MBfSg2aTidClpWCtoWj0jkPGr9NFxItIEGihEXoNw2RV3s3mWqxLnB5YGQB8O7Mh6YXtYweAiO8PJdcoZlNdPKacrfFst0NQ0U6CLxHky9NWsTlXOc'
async function auth() {
  cache: "no-store"
  const url = 'https://accounts.spotify.com./api/token';
  var response = await fetch(url, {
      method: 'POST',
      headers: {
          'Authorization': 'Basic ' + (Buffer.from(clientId + ':' + clientSecret).toString('base64')),
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token,
      }),
      cache: 'no-store',
      revalidate: 10
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

export async function loadspotify() {
  var token = await auth()
  const url = `https://api.spotify.com./v1/me/player/currently-playing`;
  var response = await fetch(url, {
    headers: {
        Authorization:`Bearer ${token.access_token}`,
    },
});
if (response.ok) {
  const jsonResponse = await response.json();
  console.log(jsonResponse);
  return jsonResponse
}}