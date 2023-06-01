
export default function Home({posts}) {
  return (
    
    <div class="bg-black">

      <head>
        <title>Joey Lam</title>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <main>
        <navbar class="nav">
          <img src="../HomePage.png"/>
          <img src="../User.png"/>
          <img src="../Document.png"/>
        </navbar>

        <div class="body">
          <h1 class="name">
            Im <span class="text-[#FF3364]">Joey</span> <span class="text-[#52BECC]">Lam</span>
          </h1>
          <h3>
            A passionate student from New York Interested in robotics,
            web development, Cybersecurity and machine learning.
          </h3>
          <div class="mt-10 mb-10">
            <h2 class="text-xl">My socials</h2>
            <div class="socials">
              <img src='../GitHub.png'></img>
              <img src='../Instagram.png'></img>
              <img src='../LinkedIn.png'></img>
              <img src='../Email.png'></img>

            </div>
          </div>
          
          <h3>
            Im currently listening to:{posts}
          </h3>
          <h3 class="mt-5">
            Im currently doing: {"discordapi"}
          </h3>
      
        </div>

      </main>
    
    </div>
  )
}
export const getServerSideProps = async () => {
  // Instead of fetching your `/api` route you can call the same
  // function directly in `getStaticProps`
  const music = await loadspotify();
  console.log(music)

  // Props returned will be passed to the page component
  return { 
    props: { 
      posts:music,
    },
    revalidate: 10, 
  };
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