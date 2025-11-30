import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import quranImg from "../img/Group (4).png";
import votart from "../img/Vector 1 (3).png";
import listImg from "./imgComputer/Group 79(1).png";
import votartTwo from "../img/Vector 1 (3).png";
import lisningImg from "../img/Group(1).png";

export default function PlaylistPageCom() {
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
      display: "flex",
      flexDirection: "column",
      padding: "15px 2px",
      width: "100%",
   backgroundImage:
          "linear-gradient(to bottom, #0B4F47, #0067541C, #AAD4C8)", 
            backgroundSize: "cover",        // يغطي الشاشة
    backgroundRepeat: "no-repeat",  // مايكررش الخلفية
    backgroundAttachment: "fixed",  // الخلفية ثابته مع الاسكرول
       height:"100vh",
  overflow: "hidden",          
          }}
    >
    {/* الهيدر */}
{/* الهيدر */}
<div
 style={{
  margin: "2% 7%",
  display: "flex",
  alignItems: "center",
  direction:"ltr",
  height: "150px",
  borderRadius: "23px",
  backgroundImage: `url(${votartTwo}), linear-gradient(to bottom, #006754 , #87D1A4)`,
  backgroundSize: "100% 100%",     // يخلي الـ vector يتمدد على قد حجم الكارد كله
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center bottom", // يتثبت من تحت عند 0px
  padding: "20px",
  position: "relative",
  overflow: "hidden",
  color: "#fff"
}}>



  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",width:"100%" }}>
   
  <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:'15%'}}>
      
        <img style={{width:'90px',height:"90px"}}src={lisningImg}></img>
        </div> 
   
   
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
                marginLeft: "9%",
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
 <div style={{
        display: "flex", justifyContent: "center", alignItems: "center",width:"100%",
      }}>        <iframe
          ref={iframeRef}
         
            height="400"
          src={playlistUrl}
          title={title}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{
            width:"86%",
          
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
