import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bgImage from "./img/48f03a35-a4da-4132-a45f-87ddb7cf3789-1024x576.webp";

// دالة لإحضار رابط الصوت حسب القارئ
const getAudioUrl = (ayah, reader) => {
  const bitrate = reader === "ar.abdulbasitmurattal" ? 192 : 128;
  return `https://cdn.islamic.network/quran/audio/${bitrate}/${reader}/${ayah.number}.mp3`;
};

export default function AudioPlayer({  surahNumber = 1, reader = "ar.alafasy" }) {
  const [verses, setVerses] = useState([]);
  const [surahName, setSurahName] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const repeatRef = useRef(0);
  const audioRef = useRef(null);
  const [repeatCount, setRepeatCount] = useState(1);

  // تحميل السورة
  useEffect(() => {
    async function fetchSurah() {
      try {
        const res = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/quran-uthmani`);
        const data = await res.json();
        if (data.status === "OK") {
          setVerses(data.data.ayahs);
          setSurahName(data.data.name);
          setCurrentIndex(0);
        }
      } catch (err) {
        console.error("خطأ في تحميل السورة:", err);
      }
    }

    fetchSurah();
  }, [surahNumber]);

  // تشغيل الآية تلقائياً
  useEffect(() => {
    if (!verses.length || !verses[currentIndex]) return;

    repeatRef.current = 0;

    if (audioRef.current) {
      audioRef.current.load();
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("تعذر التشغيل التلقائي:", err);
        });
      }
    }
  }, [currentIndex, verses, repeatCount, surahNumber, reader]);




const buttonStyle = {
  padding: "10px 15px",
  background: "#0066cc",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold"
};


  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
        margin: "0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: "0px",
        left: "0px",
      }}
    >
      {verses.length > 0 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            gap: "2rem",
            width: "90%",
            height: "60%",
            margin: "20px auto",
            padding: "20px",
            background: "rgba(0, 0, 0, 0.5)",
            color: "#fff",
            borderRadius: "20px",
          }}
        >
          <span
            style={{
              fontWeight: "bold",
              marginBottom: "40px",
              display: "block",
              fontSize: "1.6rem",
            }}
          >
            {surahName || "جاري التحميل..."}
          </span>

          <AnimatePresence mode="wait">
            <motion.p
              key={verses[currentIndex]?.number}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              style={{
                fontSize: "1.3rem",
                lineHeight: "2.2rem",
                textAlign: "center",
                direction: "rtl",
                fontFamily: "'Noto Naskh Arabic', 'Amiri', serif",
                fontWeight: "bold",
                color: "#fff",
                padding: "15px 25px",
                borderRadius: "16px",
                maxWidth: "800px",
              }}
            >
              ({verses[currentIndex]?.numberInSurah}) {verses[currentIndex]?.text}
            </motion.p>
          </AnimatePresence>

          <audio
            ref={audioRef}
            controls
            onEnded={() => {
              if (repeatRef.current < repeatCount - 1) {
                repeatRef.current += 1;
                audioRef.current.play();
              } else {
                repeatRef.current = 0;
                if (currentIndex < verses.length - 1) {
                  setCurrentIndex((prev) => prev + 1);
                }
              }
            }}
          >
            <source
              src={verses.length > 0 ? getAudioUrl(verses[currentIndex], reader) : ""}
              type="audio/mp3"
            />
            المتصفح لا يدعم تشغيل الصوت
          </audio>

          <div style={{ marginBottom: "50px", display: "flex", gap: "20px" }}>
            <button
              onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              style={buttonStyle}
            >
              السابق
            </button>
            <button
              onClick={() => setCurrentIndex((prev) => Math.min(verses.length - 1, prev + 1))}
              disabled={currentIndex === verses.length - 1}
            style={buttonStyle}
            >
              التالي
            </button>
              <select

 
    value={currentIndex}
    onChange={(e) => setCurrentIndex(Number(e.target.value))}
 style={buttonStyle}  >
    {verses.map((ayah, idx) => (
      <option key={ayah.number} value={idx}>
        آية ({ayah.numberInSurah})
      </option>
    ))}
  </select>

     <input
                  id="repeatCount"
                  type="number"
                  min="1"
                  value={repeatCount}
                  onChange={(e) => setRepeatCount(Number(e.target.value))}
style={{ ...buttonStyle, border: "none", outline: "none",width:"40px" }}

                />
          </div>

   




        </div>
      )}
    </div>
  );
}
