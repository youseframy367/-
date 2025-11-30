import React, { useState, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import quranImg from "./img/Group (4).png";
import quranImgTow from "./img/Group(4).png";
import lisningImg from "./img/Group(1).png";
import "./sourHafiz.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import votart from "./img/Group 79.png";
import votartTwo from "./img/Vector 1 (3).png";
import { useNavigate } from "react-router-dom";

const arabicNames = [
  "الفاتحة", "البقرة", "آل عمران", "النساء", "المائدة", "الأنعام", "الأعراف", "الأنفال", "التوبة", "يونس",
  "هود", "يوسف", "الرعد", "إبراهيم", "الحجر", "النحل", "الإسراء", "الكهف", "مريم", "طه",
  "الأنبياء", "الحج", "المؤمنون", "النور", "الفرقان", "الشعراء", "النمل", "القصص", "العنكبوت", "الروم",
  "لقمان", "السجدة", "الأحزاب", "سبأ", "فاطر", "يس", "الصافات", "ص", "الزمر", "غافر",
  "فصلت", "الشورى", "الزخرف", "الدخان", "الجاثية", "الأحقاف", "محمد", "الفتح", "الحجرات", "ق",
  "الذاريات", "الطور", "النجم", "القمر", "الرحمن", "الواقعة", "الحديد", "المجادلة", "الحشر", "الممتحنة",
  "الصف", "الجمعة", "المنافقون", "التغابن", "الطلاق", "التحريم", "الملك", "القلم", "الحاقة", "المعارج",
  "نوح", "الجن", "المزمل", "المدثر", "القيامة", "الإنسان", "المرسلات", "النبأ", "النازعات", "عبس",
  "التكوير", "الانفطار", "المطففين", "الانشقاق", "البروج", "الطارق", "الأعلى", "الغاشية", "الفجر", "البلد",
  "الشمس", "الليل", "الضحى", "الشرح", "التين", "العلق", "القدر", "البينة", "الزلزلة", "العاديات",
  "القارعة", "التكاثر", "العصر", "الهمزة", "الفيل", "قريش", "الماعون", "الكوثر", "الكافرون", "النصر",
  "المسد", "الإخلاص", "الفلق", "الناس"
];

const englishNames = [
  "Al-Fatiha", "Al-Baqarah", "Aal-E-Imran", "An-Nisa", "Al-Ma'idah", "Al-An'am", "Al-A'raf", "Al-Anfal", "At-Tawbah", "Yunus",
  "Hud", "Yusuf", "Ar-Ra'd", "Ibrahim", "Al-Hijr", "An-Nahl", "Al-Isra", "Al-Kahf", "Maryam", "Ta-Ha",
  "Al-Anbiya", "Al-Hajj", "Al-Mu’minun", "An-Nur", "Al-Furqan", "Ash-Shu’ara", "An-Naml", "Al-Qasas", "Al-Ankabut", "Ar-Rum",
  "Luqman", "As-Sajda", "Al-Ahzab", "Saba", "Fatir", "Ya-Sin", "As-Saffat", "Sad", "Az-Zumar", "Ghafir",
  "Fussilat", "Ash-Shura", "Az-Zukhruf", "Ad-Dukhan", "Al-Jathiya", "Al-Ahqaf", "Muhammad", "Al-Fath", "Al-Hujurat", "Qaf",
  "Adh-Dhariyat", "At-Tur", "An-Najm", "Al-Qamar", "Ar-Rahman", "Al-Waqi’a", "Al-Hadid", "Al-Mujadila", "Al-Hashr", "Al-Mumtahina",
  "As-Saff", "Al-Jumu’a", "Al-Munafiqun", "At-Taghabun", "At-Talaq", "At-Tahrim", "Al-Mulk", "Al-Qalam", "Al-Haqqah", "Al-Ma'arij",
  "Nuh", "Al-Jinn", "Al-Muzzammil", "Al-Muddaththir", "Al-Qiyama", "Al-Insan", "Al-Mursalat", "An-Naba", "An-Nazi’at", "Abasa",
  "At-Takwir", "Al-Infitar", "Al-Mutaffifin", "Al-Inshiqaq", "Al-Buruj", "At-Tariq", "Al-A’la", "Al-Ghashiyah", "Al-Fajr", "Al-Balad",
  "Ash-Shams", "Al-Lail", "Ad-Duha", "Ash-Sharh", "At-Tin", "Al-‘Alaq", "Al-Qadr", "Al-Bayyina", "Az-Zalzalah", "Al-‘Adiyat",
  "Al-Qari’a", "At-Takathur", "Al-‘Asr", "Al-Humazah", "Al-Fil", "Quraish", "Al-Ma’un", "Al-Kawthar", "Al-Kafirun", "An-Nasr",
  "Al-Masad", "Al-Ikhlas", "Al-Falaq", "An-Nas"
];

const ayahCounts = [7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 123, 111, 43, 52, 99, 128, 111, 110, 98, 135,
  112, 78, 118, 64, 77, 227, 93, 88, 69, 60, 34, 30, 73, 54, 45, 83, 182, 88, 75, 85,
  54, 53, 89, 59, 37, 35, 38, 29, 18, 45, 60, 49, 62, 55, 78, 96, 29, 22, 24, 13,
  14, 11, 11, 18, 12, 12, 30, 52, 52, 44, 28, 28, 20, 56, 40, 31, 50, 40, 46, 42,
  29, 19, 36, 25, 22, 17, 19, 26, 30, 20, 15, 21, 11, 8, 8, 19, 5, 8, 8, 11,
  11, 8, 3, 9, 5, 4, 7, 3, 6, 3, 5, 4, 5, 6
];

const style = {
  btnFilter: {
    border: "none",
    color: "#066C58",
    fontSize: "16px",
    fontWeight: "500",
    width: "calc(100% / 3)",
    display: "flex",
    justifyContent: "start",
    padding: "10px",
    fontFamily: "'Montserrat', sans-serif",
    background: "transparent",
    cursor: "pointer"
  },
  activ: {
    fontWeight: "700"
  }
};

const surahs = arabicNames.map((name, index) => ({
  arabic: name,
  english: englishNames[index],
  ayahs: ayahCounts[index],
  number: index + 1
}));

export default function Hafiz() {
  const [active, setActive] = useState("Surah");
  const [lastSurah, setLastSurah] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedSurah = localStorage.getItem("lastSurah");
    if (savedSurah) {
      setLastSurah(JSON.parse(savedSurah));
    }
  }, []);

  const goToSurah = (surah) => {
    localStorage.setItem("lastSurah", JSON.stringify(surah));
    if (active === "Play") {
      navigate("/audio", { state: { surah } });
    } else {
      navigate("/surah", { state: { surah } });
    }
  };

  const continueLastSurah = () => {
    let surahToOpen;
    if (lastSurah) {
      surahToOpen = lastSurah;
    } else {
      surahToOpen = {
        arabic: arabicNames[0],
        english: englishNames[0],
        ayahs: ayahCounts[0],
        number: 1
      };
    }
    navigate("/surah", { state: { surah: surahToOpen } });
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      padding: "15px 2px",
      width: "100%",
      backgroundImage: "linear-gradient(to bottom, #53AEA1 , #D4DFDC , #C5D8D3 , #FFFFFF)",
      margin:'0px'
    }}>
      <ArrowBackIcon style={{
        width: "24px",
        height: "24px",
        position: "absolute",
        color: "#fff",
        top: "32px",
        left: "21px"
      }} onClick={() => navigate(-1)} />

      <h1 style={{ textAlign: "center", fontFamily: "Poppins, sans-serif", color: "#FAF6EB" }}>Hafiz</h1>

      <div style={{
        margin: "2%",
        display: "flex",
        alignItems: "center",
        height: "170px",
        borderRadius: "23px",
        backgroundImage: "linear-gradient(to bottom, #006754 , #87D1A4)",
        padding: "20px",
        position: "relative",
        overflow: "hidden",
        color: "#fff"
      }}>
        <div style={{ display: "flex", gap: "5rem", zIndex: "1000" }}>
          <div>
            <p style={{ fontSize: "12px", marginLeft: "15px" }}>Last Read</p>
           <p style={{ direction: 'rtl', margin: "10px 8px", fontSize: "20px", fontWeight: "700", fontFamily: "'Amiri', serif" }}>
  سورة {lastSurah ? lastSurah.arabic : arabicNames[0]}
</p>

            <p style={{ fontSize: "12px", marginLeft: "15px" }}>Ayah no. 1</p>
            <button
              style={{
                fontFamily: "Montserrat, sans-serif",
                padding: "11px",
                borderRadius: "30px",
                border: "none",
                backgroundColor: "#fff",
                color: "#000",
                width: "115px",
                display: "flex",
                alignItems: "center",
                fontSize: "12px",
                cursor: "pointer"
              }}
              onClick={continueLastSurah}
            >
              Continue
              <ArrowForwardIcon style={{ marginLeft: "15px" }} />
            </button>
          </div>
          <img src={votart} alt="content visual" style={{
            width: "151px",
            height: "145px",
            position: "absolute",
            left: "64%",
            top: "20%",
            objectFit: "contain"
          }} />
        </div>
        <img src={votartTwo} alt="decoration" style={{
          position: "absolute",
          bottom: "0",
          right: "0",
          width: "100%"
        }} />
      </div>

      <h2 style={{ fontFamily: "'Montserrat', sans-serif", color: "#FAF6EB", marginLeft: "15px" }}>Popular</h2>
      <div style={{ display: "flex", gap: ".9rem", padding: "8px" ,justifyContent:'center'}}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          maxWidth: "155px",
          height: "191px",
          borderRadius: "23px",
          background: "#F5FAF4"
        }}>
          <h3 style={{ color: "#004B40", marginTop: "10px" }}>Quran</h3>
          <img src={quranImgTow} alt="quran" style={{ width: "90px", height: "60px", margin: "50px 5px 10px 50px" }} />
        </div>

        <div style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          maxWidth: "155px",
          height: "191px",
          borderRadius: "23px",
          background: "#F5FAF4"
        }}>
          <h3 style={{ color: "#004B40", marginTop: "10px" }}>Listening</h3>
          <img src={lisningImg} alt="listening" style={{ width: "90px", height: "90px", margin: "30px 5px 10px 50px" }} />
        </div>
      </div>

      <div style={{ width: "100%", display: "flex", margin: "15px 10px" }}>
        {["Surah", "Translate", "Play"].map((item) => (
          <button key={item} onClick={() => setActive(item)} style={{
            ...style.btnFilter,
            ...(active === item ? style.activ : {})
          }}>
            {item}
          </button>
        ))}
      </div>

      <div className="scroll-container" style={{ display: "flex", flexDirection: 'column', gap: "10px", height: "70vh", overflowY: "scroll", width: "95%", margin: "1%" }}>
        {surahs.map((surah) => (
          <div key={surah.number} onClick={() => goToSurah(surah)} style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            borderRadius: "10px",
            width: "95%",
            border: "1px solid #ccc",
            cursor: "pointer"
          }}>
            <div style={{ display: "flex" }}>
              <p style={{
                background: "#87D1A4",
                color: "#fff",
                width: "36px",
                height: "36px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "9px"
              }}>{surah.number}</p>
              <div style={{ lineHeight: ".5", margin: "10px 20px" }}>
                <p style={{ fontSize: "14px" }}>{surah.english}</p>
                <p style={{ fontSize: "12px" }}>{surah.english} ({surah.ayahs})</p>
              </div>
            </div>
            <div style={{
              fontFamily: "'Amiri', serif",
              color: "#076C58",
              fontSize: "20px",
              fontWeight: "700"
            }}>{surah.arabic}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
