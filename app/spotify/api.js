import React from 'react';

function Tst({ posts }) {
  return <p>Im currently listening to: &quot;{posts}&quot;</p>;
}
export default Tst

export async function getServerSideProps() {
  // Instead of fetching your `/api` route you can call the same
  // function directly in `getStaticProps`
  const music = await loadspotify();
  console.log(music)

  // Props returned will be passed to the page component
  return { 
    props: { 
      posts:music,
    }
  }
}



export async function loadspotify() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://kigiri.githubcurl", {
      body: "grant_type=client_credentials&client_id=70adfcf4e5aa488e9d8d86274ab01561&client_secret=f9bd6814af3c49b5b1b71cd5642307ea",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST"
    });
  const data = await res.json();
  const res2 = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
      headers: {
        Authorization: (data.token_type, data.access_token)
      }
    })
   const data2 = await res2.json();
   console.log(data2)
  return data2;
}

