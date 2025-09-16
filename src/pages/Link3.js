
import React, { useEffect, useRef, useState } from "react";
import "./Home.css";

const slides = [
  {
    url: "https://cdn.britannica.com/88/2088-004-ACC4C5D3/Last-Supper-wall-painting-restoration-Leonardo-da-1999.jpg",
    caption: "Leonardo da Vinci's Last Supper",
  },
  {
    url: "https://smarthistory.org/wp-content/uploads/2022/11/52083520739_1e5b3aa6d6_6k-scaled.jpg",
    caption: "The Last Supper - Italy Museum",
  },
  {
    url: "https://t3.ftcdn.net/jpg/06/01/52/24/360_F_601522408_MNucM5iYPyTndUUhH4q3D6RaMq7e8d.jpg",
    caption: "The Last Supper - Artwork",
  },
];

const videos = [
  { id: "PO5Ce1X5YAM", caption: "Video 1: Jesus-Movie 1979" },
  { id: "VSpVf4ykj4M", caption: "Video 2: For Kids" },
  { id: "997ni1xcmKw", caption: "Video 3: English" },
   { id: "e507-bjF_0I", caption: "Video 4: Jerusalem" }, 
];

function Link3() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const players = useRef([]);

  // Slideshow auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // YouTube Iframe API setup
  useEffect(() => {
    const loadYT = () => {
      if (!window.YT) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
      } else {
        onYouTubeIframeAPIReady();
      }

      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    };

    const onYouTubeIframeAPIReady = () => {
      videos.forEach((video, idx) => {
        players.current[idx] = new window.YT.Player(`ytplayer-${idx}`, {
          videoId: video.id,
          events: {
            onStateChange: (event) => {
              if (event.data === window.YT.PlayerState.PLAYING) {
                // Pause all other videos
                players.current.forEach((player, i) => {
                  if (i !== idx && player && player.getPlayerState() === window.YT.PlayerState.PLAYING) {
                    player.pauseVideo();
                  }
                });
              }
            },
          },
        });
      });
    };

    loadYT();
  }, []); // Empty dependency array avoids the ESLint warning

  return (
    <div className="home">
      <div className="slideshow">
        {slides.map((slide, idx) => (
          <div key={idx} className={`slide ${idx === currentIndex ? "active" : ""}`}>
            <img src={slide.url} alt={`Slide ${idx}`} />
            <div className="slide-caption">{slide.caption}</div>
          </div>
        ))}
      </div>

      <section className="videos">
        <h2>Featured Videos</h2>
        <div className="video-container">
          {videos.map((video, idx) => (
            <div key={idx} className="video-card">
              <div id={`ytplayer-${idx}`} style={{ width: "350px", height: "200px" }}></div>
              <p className="video-caption">{video.caption}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Link3;

