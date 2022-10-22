import Head from 'next/head'
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const words = document.getElementById('words')
    const increment = 0.1
    words.style.fontSize = "1.0rem"
    let fontSizeValue
    while (words.clientHeight < window.innerHeight) {
      fontSizeValue = parseFloat(words.style.fontSize.slice(0, -3))
      words.style.fontSize = `${fontSizeValue + increment}rem`
      //console.log(words.style.fontSize)
    }
    while (words.scrollHeight > window.innerHeight) {
      fontSizeValue = parseFloat(words.style.fontSize.slice(0, -3))
      words.style.fontSize = `${fontSizeValue - (increment)}rem`
    }
    //console.log(words.style.fontSize.slice(0, -4))
  });
  
  return (
    <div className="container" id="canvas">
      <Head>
        <title>LOCALAXIS.XYZ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title" id="words">
          LOCAL AXIS INFINITE BACKFLIP ACROBAT <span style={{ color: '#181818' }}>SPOTIFY APPLE MUSIC</span> INSTAGRAM EMAIL
        </h1>
      </main>


      <style jsx>{`
        .container {
          padding: 0;
        }

        main {
          padding: 0;
          display: block;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 0.9;
        }

        .title,
        .description {
          font-size: 1.0rem;
          word-break: break-all;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          background: black;
          color: white;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}




