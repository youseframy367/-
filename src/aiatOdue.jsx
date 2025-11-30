import React, { useEffect, useRef, useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RepeatIcon from '@mui/icons-material/Repeat';
import { useNavigate } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';

import quranImg from "./img/Group (4).png";
import votart from "./img/Vector 1 (3).png";
import startAiatImg from "./img/bismillah-vector-download-vector-bismillah-format-cdr-svg-eps-dodo-5 1 (1).png";
import "./sourHafiz.css";
import { useLocation, } from "react-router-dom";

export default function Audio() {
  const [sheikhName, setSheikhName] = useState("اسم القارئ");
  const [isRepeat, setIsRepeat] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioSrc, setAudioSrc] = useState(null);
  const [surahName, setSurahName] = useState("سورة");

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

const [isFavorite, setIsFavorite] = useState(false);

  const audioRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const sheikhData = JSON.parse(sessionStorage.getItem("selectedSheikh") || "{}");
    const surahData = location.state?.surah || JSON.parse(sessionStorage.getItem("selectedSurah") || "{}");

    if (!sheikhData.id || !sheikhData.server || !surahData.number) {
      console.error("⚠️ بيانات ناقصة.");
      navigate("/hafiz");
      return;
    }

    setSheikhName(sheikhData.name || "اسم القارئ");

    const formattedNumber = String(surahData.number).padStart(3, "0");
    const url = `https://${sheikhData.server}.mp3quran.net/${sheikhData.id}/${formattedNumber}.mp3`;

    setAudioSrc(url);
    setSurahName(surahData.arabic || "سورة");
  }, [location, navigate]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div style={{
      backgroundImage: "linear-gradient(to bottom, #53AEA1 , #D4DFDC , #C5D8D3 , #FFFFFF)",
      height: "100vh", width: "100%", margin: '0px'
    }}>
      {/* الهيدر */}
      <div style={{
        display: "flex", flexDirection: "column", margin: "0px", padding: "20px",
        backgroundImage: "linear-gradient(to bottom, #006754 , #87D1A4)",overflow:"hidden"
      }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
         <span></span>
          <div style={{
            display: "flex", flexDirection: "column",
            justifyContent: "center", alignItems: "center",
            lineHeight: ".80", fontFamily: 'Amiri, serif', color: "#fff"
          }}>

            <h1 style={{ fontWeight: '700', fontSize: "32px" }}>{surahName}</h1>
            <img src={startAiatImg} alt="basmala" />
          </div>
          <img style={{ width: "150px", height: "150px", transform: "rotate(-10deg)" }} src={quranImg} alt="Quran" />
        </div>
        <img style={{ margin: "-180px -20px -20px -70px", width: "130%", height: "180px" }} src={votart} alt="decoration" />
      </div>
 <ArrowBackIcon
       
            style={{ width: "24px", height: "24px", margin: "10px", color: "#fff", cursor: 'pointer',position:"absolute",top:"10px",left:"10px" }}
               onClick={() => navigate(-1)}
          ></ArrowBackIcon>
      <div style={{
        display: "flex", justifyContent: "center", alignItems: "center"
      }}>
        <img style={{ width: "70%", margin: "0px" }} src={quranImg} alt="Quran Image" />
      </div>

      {/* مشغل الصوت */}
      <div style={{
        display: "flex", flexDirection: "column", alignItems: "center"
      }}>
        <div style={{ width: "90%", margin: "10px 40px" }}>
          <h2 style={{ fontFamily: "Amiri, serif", color: "#004B40" }}>{sheikhName}</h2>
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center"
          }}>
            <p style={{fontFamily: "Amiri, serif", fontSize: "16px", color: "#8A9A9D",fontWeight:"700" }}>ترتيل</p>
<div onClick={() => setIsFavorite(!isFavorite)} style={{ cursor: "pointer" }}>
    {isFavorite ? (
        <FavoriteIcon style={{ color: '#004B40' }} />
      ) : (
        <FavoriteBorderIcon style={{ color: '#004B40' }} />
      )}
</div>
          </div>
        </div>

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

        {/* زر التكرار وزر التشغيل في نفس السطر */}
 <RepeatIcon
            onClick={() => setIsRepeat(!isRepeat)}
            style={{
              color: isRepeat ? "#006754" : "#ccc",
              fontSize: "32px",
              cursor: "pointer",
              width:"fitContent",
              margin:" 30px 20px 20px -400px"
            }}
          />


         
          <button
            onClick={togglePlay}
            style={{
              backgroundColor: "#006754", border: "none", borderRadius: "50%",
              width: "60px", height: "60px",marginTop:"-50px",
              display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer"
            }}
          >
            {isPlaying ? (
              <PauseIcon style={{ color: "white", fontSize: "30px" }} />
            ) : (
              <PlayArrowIcon style={{ color: "white", fontSize: "30px" }} />
            )}
          </button>
        
      </div>
  
    </div>
  );
}
