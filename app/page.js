'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { keyframes } from '@emotion/react';
import { Box } from "@mui/material";

const glowAnimation = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(156, 39, 176, 0.3), 0 0 10px rgba(156, 39, 176, 0.2);
  }
  50% {
    box-shadow: 0 0 10px rgba(156, 39, 176, 0.5), 0 0 20px rgba(156, 39, 176, 0.3);
  }
  100% {
    box-shadow: 0 0 5px rgba(156, 39, 176, 0.3), 0 0 10px rgba(156, 39, 176, 0.2);
  }
`;

const VideoSectionOne = () => {
  const videoRef = useRef(null);

  return (
    <div style={{ 
      width: '100%', 
      maxWidth: '640px',  
      margin: '0 auto',   
    }}>
      <div style={{ 
        position: 'relative',
        paddingTop: '56.25%', 
        overflow: 'hidden',
        boxShadow: '0 0 20px 5px rgba(156, 39, 176, 0.7)',
        borderRadius: '15px'
      }}>
        <video 
          ref={videoRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain',  
          }}
          autoPlay
          muted
          playsInline
          loop>
          <source src="/video/FirstVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <style>
        {`
          @keyframes glow {
            from {
              box-shadow: 0 0 10px 2px rgba(0, 255, 255, 0.4);
            }
            to {
              box-shadow: 0 0 20px 5px rgba(0, 255, 255, 1);
            }
          }
        `}
      </style>
    </div>
  );
};


export default function Home() {
  return (
    <Box>
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>app/page.js</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
    </Box>
  );
}
