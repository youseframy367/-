import React, { useEffect, useState, useRef } from "react";
import Loading from "./loding";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import quranImg from "./img/Group (4).png";
import votart from "./img/Vector 1 (3).png";
import { useLocation, useNavigate } from "react-router-dom";
import startAiatImg from "./img/bismillah-vector-download-vector-bismillah-format-cdr-svg-eps-dodo-5 1 (1).png";
import "./sourHafiz.css";

export default function ShowAiat() {
  const scrollRef = useRef(null);
  const audioRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();
  const surah = location.state?.surah;

  const [ayahs, setAyahs] = useState([]);
  const [translations, setTranslations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [audioLoading, setAudioLoading] = useState(true);
  const [audioSrc, setAudioSrc] = useState(null);

  // Scroll تلقائي
  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollTop += 1.1;
        }
      }, 80);

      return () => clearInterval(interval);
    }, 30000); // تأخير 30 ثانية قبل التحرك

    return () => clearTimeout(timeout);
  }, []);

  // تحميل البيانات والصوت
  useEffect(() => {
    if (!surah) {
      navigate("/hafiz");
      return;
    }

    const sheikhData = JSON.parse(sessionStorage.getItem("selectedSheikh") || "{}");
    const { id: sheikhId, server } = sheikhData;

    const surahNumberFormatted = String(surah.number).padStart(3, "0");
    const audioUrl = sheikhId && server
      ? `https://${server}.mp3quran.net/${sheikhId}/${surahNumberFormatted}.mp3`
      : null;

    if (audioUrl) {
      fetch(audioUrl, { method: "HEAD" })
        .then((res) => {
          if (res.ok) {
            setAudioSrc(audioUrl);
          } else {
            console.warn("⚠️ ملف الصوت غير متاح للشيخ أو السورة المحددة.");
          }
          setAudioLoading(false);
        })
        .catch((err) => {
          console.error("❌ خطأ أثناء التحقق من ملف الصوت:", err);
          setAudioLoading(false);
        });
    } else {
      setAudioLoading(false);
    }

    const getData = async () => {
      try {
        const arabicRes = await fetch(
          `https://api.alquran.cloud/v1/surah/${surah.number}/ar.alafasy`
        );
        const arabicData = await arabicRes.json();

        const transRes = await fetch(
          `https://api.alquran.cloud/v1/surah/${surah.number}/en.asad`
        );
        const transData = await transRes.json();

        setAyahs(arabicData.data.ayahs);
        setTranslations(transData.data.ayahs);
        setLoading(false);
      } catch (error) {
        console.error("❌ فشل في تحميل بيانات السورة:", error);
        setLoading(false);
      }
    };

    getData();
  }, [surah, navigate]);

  // تشغيل الصوت عند أول تفاعل أو scroll
  useEffect(() => {
    if (!audioSrc) return;

    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {
          console.warn("متصفحك منع التشغيل التلقائي للصوت");
        });
      }
      window.removeEventListener("click", playAudio);
      window.removeEventListener("touchstart", playAudio);
      window.removeEventListener("scroll", playAudio);
    };

    // حاول التشغيل مباشرة
    playAudio();

    // لو المتصفح منع، استنى أول تفاعل أو scroll
    window.addEventListener("click", playAudio);
    window.addEventListener("touchstart", playAudio);
    window.addEventListener("scroll", playAudio);

    return () => {
      window.removeEventListener("click", playAudio);
      window.removeEventListener("touchstart", playAudio);
      window.removeEventListener("scroll", playAudio);
    };
  }, [audioSrc]);

  if (loading || audioLoading) return <Loading />;

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to bottom, #53AEA1 , #D4DFDC , #C5D8D3 , #FFFFFF)",
        height: "100vh",
        width: "100%",
        margin: '0px',
        overflow: "hidden"
      }}
    >
      {/* مشغل الصوت مخفي */}
      {audioSrc && <audio ref={audioRef} src={audioSrc} controls style={{ display: "none" }} />}

      {/* الهيدر */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          backgroundImage: "linear-gradient(to bottom, #006754 , #87D1A4)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span></span>
          <div style={{
            display: "flex", flexDirection: "column",
            justifyContent: "center", alignItems: "center",
            lineHeight: ".80", fontFamily: 'Amiri, serif', color: "#fff"
          }}>
            <h1 style={{ fontWeight: '700', fontSize: "32px" }}>{surah.arabic}</h1>
            <img src={startAiatImg} alt="basmala" />
          </div>
          <img style={{ width: "150px", height: "150px", transform: "rotate(-10deg)" }} src={quranImg} alt="Quran" />
        </div>
        <img style={{ margin: "-180px -20px -20px -70px", width: "130%", height: "180px" }} src={votart} alt="decoration" />
      </div>

      <ArrowBackIcon
        style={{
          width: "24px",
          height: "24px",
          position: "absolute",
          color: "#fff",
          top: "32px",
          left: "21px",
        }}
        onClick={() => navigate(-1)}
      />

      {/* عرض الآيات والترجمة */}
      <div
        className="scroll-container"
        ref={scrollRef}
        style={{
          margin: "0px",
          padding: "20px",
          height: "70vh",
          overflow: "scroll",
          scrollBehavior: "smooth"
        }}
      >
        {ayahs.map((ayah, index) => (
          <div key={ayah.number} style={{ marginBottom: "25px", paddingBottom: "10px", borderBottom: "1px solid #ccc" }}>
            <p style={{ direction: "rtl", fontSize: "20px", fontFamily: "Amiri, serif", color: "#004B40", fontWeight: "700" }}>
              {ayah.text} <span style={{ fontSize: "14px", color: "#999" }}>({ayah.numberInSurah})</span>
            </p>
            <p style={{ marginTop: "10px", fontSize: "14px", color: "#444", fontFamily: "'Montserrat', sans-serif", fontWeight: "400" }}>
              {translations[index]?.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
