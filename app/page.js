import Head from 'next/head';
export default function Home() {
  return (
    
    <div>

      <Head>
        <title>Joey Lam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main class="background-color:black;">
        <h1>
          Im Joey Lam
        </h1>
        <h3>
          A passionate student from New York Interested in robotics,
          web development, Cybersecurity and machine learning.
        </h3>
        <div>
          <img src='../GitHub.png'></img>
          <img src='../Instagram.png'></img>
          <img src='../LinkedIn.png'></img>
          <img src='../Email.png'></img>

        </div>
        <h3>
          Im currently listening to:{"spotifyapi"}
        </h3>
        <h3>
          Im currently doing: {"discordapi"}
        </h3>
      </main>

      
    </div>
  )
}
