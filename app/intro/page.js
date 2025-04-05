'use client';


export default function Intro() {
    return (<div>
        <h1 className="text-5xl font-bold text-center mt-10">Welcome to the Intro Page</h1>
        {/* <VideoSectionOne /> */}
    </div>);
}

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