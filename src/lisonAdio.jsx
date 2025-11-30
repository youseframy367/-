import React, { useEffect, useRef, useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteIcon from '@mui/icons-material/Favorite';
import listImg from "./img/Group 79.png";
import { useNavigate, useLocation } from "react-router-dom";
import quranImg from "./img/Group (4).png";
import votart from "./img/Vector 1 (3).png";
import "./sourHafiz.css";

export default function LisonAudio() {
  const [sheikhName, setSheikhName] = useState("اسم القارئ");
  const [isRepeat, setIsRepeat] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioSrc, setAudioSrc] = useState(null);
  const [surahName, setSurahName] = useState("اسم السورة");
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isVideo, setIsVideo] = useState(false);

  const audioRef = useRef(null);
  const videoRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let data = location.state;

    if (data) {
      localStorage.setItem("audioData", JSON.stringify(data));
    } else {
      const savedData = localStorage.getItem("audioData");
      if (savedData) {
        data = JSON.parse(savedData);
      }
    }

    if (data) {
      setSheikhName(data.name || "اسم القارئ");
      setSurahName(data.title || "اسم السورة");
      setAudioSrc(data.url || null);

      if (data.url && data.url.includes("youtube.com")) {
        setIsVideo(true);
      } else {
        setIsVideo(false);
      }
    }
  }, [location.state]);

  useEffect(() => {
    if (!isVideo && audioSrc && audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [audioSrc, isVideo]);

  const togglePlay = () => {
    if (isVideo) {
      const iframe = videoRef.current;
      if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage(
          JSON.stringify({
            event: "command",
            func: isPlaying ? "pauseVideo" : "playVideo",
            args: []
          }),
          "*"
        );
      }
    } else {
      if (!audioRef.current) return;
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
    setIsPlaying(!isPlaying);
  };

  const skipTime = (seconds) => {
    if (isVideo) {
      videoRef.current.contentWindow.postMessage(
        JSON.stringify({
          event: "command",
          func: "seekTo",
          args: [currentTime + seconds, true]
        }),
        "*"
      );
    } else {
      if (audioRef.current) {
        audioRef.current.currentTime += seconds;
      }
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleTimeUpdate = () => {
    if (!isVideo) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (!isVideo) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    if (!isVideo) {
      const newTime = parseFloat(e.target.value);
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  return (
    <div style={{
      backgroundImage: "linear-gradient(to bottom, #53AEA1 , #D4DFDC , #C5D8D3 , #FFFFFF)",
      height: "100vh", width: "100%", margin: '0px',overflow:"hidden",
    }}>
      {/* الهيدر */}
      <div style={{
        display: "flex", flexDirection: "column", margin: "0px", padding: "20px 20px",
        backgroundImage: "linear-gradient(to bottom, #006754 , #87D1A4)",width:"100%",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
        
          <div style={{
            display: "flex", flexDirection: "column",
            justifyContent: "center", alignItems: "center",
            lineHeight: "1", fontFamily: 'Amiri, serif', color: "#fff"
          }}>
            <h1 style={{ fontWeight: '700', fontSize: "32px",marginLeft:"20%", whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",direction:"rtl",
                  maxWidth: "200px", }}>{surahName}</h1>
          </div>
          <img style={{ width: "100px", height: "130px",         margin: " 20px 50PX ", zIndex: "1000" }} src={listImg} alt="Quran" />
        </div>
        <img style={{ margin: "-180px -20px -20px -70px", width: "140%", height: "180px" }} src={votart} alt="decoration" />
      </div>

        <ArrowBackIcon
        style={{
          width: "24px",
          height: "24px",
          position: "absolute",
          color: "#fff",
          top: "32px",
          left: "31px",
          cursor: "pointer",
        }}
        onClick={() => navigate(-1)}
      />

      {/* عرض صورة أو فيديو */}
      <div style={{
        display: "flex", justifyContent: "center", alignItems: "center",width:"100%",
      }}>
        {isVideo ? (
          <iframe
            ref={videoRef}
            width="90%"
            height="300"
            src={`${audioSrc}?enablejsapi=1&controls=0`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="YouTube Video"
            style={{ borderRadius: "17px", overflow: "hidden", margin: "15px" }}
          ></iframe>
        ) : (
          <img style={{ width: "70%", margin: "0px" }} src={quranImg} alt="Quran Image" />
        )}
      </div>

      {/* مشغل الصوت/الفيديو */}
      <div style={{
        display: "flex", flexDirection: "column", alignItems: "center"
      }}>
        <div style={{ width: "90%", margin: "10px 40px" }}>
          <h2 style={{ fontFamily: "Amiri, serif", color: "#004B40" }}>{surahName}</h2>
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center"
          }}>
            <p style={{ fontFamily: "Amiri, serif", fontSize: "16px", color: "#8A9A9D", fontWeight: "700" }}>{sheikhName}</p>
            <div onClick={() => setIsFavorite(!isFavorite)} style={{ cursor: "pointer" }}>
              {isFavorite ? (
                <FavoriteIcon style={{ color: '#004B40' }} />
              ) : (
                <FavoriteBorderIcon style={{ color: '#004B40' }} />
              )}
            </div>
          </div>
        </div>

        {!isVideo && (
          <audio
            ref={audioRef}
            src={audioSrc}
            onEnded={() => {
              if (isRepeat) {
                audioRef.current.currentTime = 0;
                audioRef.current.play();
              } else {
                setIsPlaying(false);
              }
            }}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
          />
        )}

        {!isVideo && (
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center", width: "80%", marginTop: "10px"
          }}>
            <span style={{ fontSize: "12px", marginRight: "10px" }}>{formatTime(currentTime)}</span>
            <input
              type="range"
              min="0"
              max={duration}
              step="0.1"
              value={currentTime}
              onChange={handleSeek}
              style={{ flex: 1 }}
            />
            <span style={{ fontSize: "12px", marginLeft: "10px" }}>{formatTime(duration)}</span>
          </div>
        )}

        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginTop: "20px" }}>
          {/* رجوع */}
          <button
            onClick={() => skipTime(-10)}
            style={{
              backgroundColor: "#006754", border: "none", borderRadius: "50%",
              width: "50px", height: "50px", color: "white", cursor: "pointer"
            }}
          >
            -10s
          </button>

          {/* تشغيل / إيقاف */}
          <button
            onClick={togglePlay}
            style={{
              backgroundColor: "#006754", border: "none", borderRadius: "50%",
              width: "60px", height: "60px", display: "flex", alignItems: "center",
              justifyContent: "center", cursor: "pointer"
            }}
          >
            {isPlaying ? (
              <PauseIcon style={{ color: "white", fontSize: "30px" }} />
            ) : (
              <PlayArrowIcon style={{ color: "white", fontSize: "30px" }} />
            )}
          </button>

          {/* تقديم */}
          <button
            onClick={() => skipTime(10)}
            style={{
              backgroundColor: "#006754", border: "none", borderRadius: "50%",
              width: "50px", height: "50px", color: "white", cursor: "pointer"
            }}
          >
            +10s
          </button>
        </div>
      </div>
    </div>
  );
}
