import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import quranImg from "./img/Group (4).png";
import votart from "./img/Vector 1 (3).png";
import listImg from "./img/Group 79.png";

export default function PlaylistPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, url, name } = location.state || {};

  const iframeRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const sendCommand = (func, args = []) => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func, args }),
        "*"
      );
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      sendCommand("pauseVideo");
    } else {
      sendCommand("playVideo");
    }
    setIsPlaying(!isPlaying);
  };

  const skipTime = (seconds) => {
    sendCommand("seekTo", [seconds, true]);
  };

  const playlistUrl = url?.includes("youtube.com")
    ? `${url}${url.includes("?") ? "&" : "?"}enablejsapi=1`
    : url;

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #53AEA1 , #D4DFDC , #C5D8D3 , #FFFFFF)",
        minHeight: "100vh",
        width: "100%",
        margin: 0,
        overflowX: "hidden", // يمنع التحريك يمين وشمال
      }}
    >
    {/* الهيدر */}
{/* الهيدر */}
<div
  style={{
    display: "flex",
    flexDirection: "column",
    margin: "0px",
    padding: "20px 20px",
    backgroundImage: "linear-gradient(to bottom, #006754 , #87D1A4)",
    width: "100%",
    overflow: "hidden", // يمنع أي خروج للمحتوى
    height:"160PX"
  }}
>
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        lineHeight: "1.6",
        fontFamily: "Amiri, serif",
        color: "#fff",
      }}
    >
     <div
              style={{
                marginLeft: "15%",
                minWidth: "200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "200px",
                }}
              >
                {title}
              </h2>
              <p
                style={{
                  margin: 0,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "200px",
                }}
              >
                {name}
              </p>
            </div>
    </div>
    <img
      style={{
        width: "100px",
        height: "130px",
        margin: " 20px 50PX ",
        zIndex: "1000",
        objectFit: "cover", // يمنع خروج الصورة
      }}
      src={listImg}
      alt="Quran"
    />
  </div>
  <img
    style={{
      width: "100%", // يملأ العرض بدون كسر
      height: "180px",
      objectFit: "cover",
      margin: "-160PX -20px", // تعديل المسافة بدل السالب الكبير
    }}
    src={votart}
    alt="decoration"
  />
</div>

      {/* زر الرجوع */}
      <ArrowBackIcon
        style={{
          width: "24px",
          height: "24px",
          position: "absolute",
          color: "#fff",
          top: "32px",
          left: "21px",
          cursor: "pointer",
        }}
        onClick={() => navigate(-1)}
      />

      {/* عرض الـ Playlist */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <iframe
          ref={iframeRef}
          width="100%"
          height="400"
          src={playlistUrl}
          title={title}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{
            maxWidth: "800px",
            width: "90%",
            borderRadius: "17px",
            marginTop: "20px",
          }}
        ></iframe>
      </div>

      {/* الكنترول */}
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => skipTime(-10)}
          style={{
            background: "#006754",
            color: "#fff",
            border: "none",
            padding: "10px 15px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          -10s
        </button>
        <button
          onClick={togglePlay}
          style={{
            background: "#006754",
            color: "#fff",
            border: "none",
            padding: "10px 15px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </button>
        <button
          onClick={() => skipTime(10)}
          style={{
            background: "#006754",
            color: "#fff",
            border: "none",
            padding: "10px 15px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          +10s
        </button>
      </div>
    </div>
  );
}
