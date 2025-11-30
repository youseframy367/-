import React, { useState, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import quranImg from "./imgComputer/quran tasbee 1(1).png";
import quranImgTow from "./imgComputer/Group(5).png";
import lisningImg from "./imgComputer/Object.png";
import "../sourHafiz.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import votart from "./imgComputer/Vector 1(1).png"
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
    fontSize: "32px",
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

export default function QuranSelctCom() {
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
      navigate("/aiatAduo", { state: { surah } });
    } else {
      navigate("/showAiat", { state: { surah } });
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
    navigate("/showAiat", { state: { surah: surahToOpen } });
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      padding: "15px 2px",
      width: "100%",
   backgroundImage:
          "linear-gradient(to bottom, #0B4F47, #0067541C, #AAD4C8)", 
    backgroundRepeat: "no-repeat",  // مايكررش الخلفية
        backgroundAttachment: "fixed",  // الخلفية ثابته مع الاسكرول
            backgroundSize: "cover",        // يغطي الشاشة

       height:"auto",
  overflow: "hidden",          
          }}>
      <ArrowBackIcon style={{
        width: "24px",
        height: "24px",
        position: "absolute",
        color: "#fff",
        top: "32px",
        left: "21px"
      }} onClick={() => navigate(-1)} />



            
       

         
        
       
     

 <div style={{
  margin: "2% 7%",
  display: "flex",
  alignItems: "center",
  direction:"ltr",
  height: "170px",
  borderRadius: "23px",
  backgroundImage: `url(${votart}), linear-gradient(to bottom, #006754 , #87D1A4)`,
  backgroundSize: "100% 100%",     // يخلي الـ vector يتمدد على قد حجم الكارد كله
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center bottom", // يتثبت من تحت عند 0px
  padding: "20px",
  position: "relative",
  overflow: "hidden",
  color: "#fff"
}}>
    

        <div style={{ display: "flex", zIndex: "1000",direction:"rtl",gap:"40px",marginTop:"10px" }}>


   <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"25%"}}>
           <p style={{ direction: 'rtl', margin: "10px 8px", fontSize: "20px", fontWeight: "700", fontFamily: "'Amiri', serif" ,whiteSpace: "nowrap"
}}>
  سورة {lastSurah ? lastSurah.arabic : arabicNames[0]}
</p>
            <p style={{ fontSize: "12px", marginLeft: "15px" }}>Ayah no. 1</p>

            </div>

<div style={{height:"150px",width:"2px",background:"#fff",margin:"10px"}}></div>


            <div style={{display:"flex",flexDirection:"column",minWidth:"26%",justifyContent:"center",alignItems:"center"}}>
<p style={{ marginTop: "10px",whiteSpace: "nowrap",fontSize:"24px",fontWeight:"700"
 }}>
  الشيخ {JSON.parse(sessionStorage.getItem("selectedSheikh"))?.name}
</p>
            <p style={{ fontSize: "12px",marginTop:"-5px",whiteSpace: "nowrap"
 }}>Last Read</p>
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
                 <ArrowForwardIcon style={{ marginLeft: "15px" }} />
              Continue
             
            </button>
            </div>
         

  </div>
  <img style={{width:"250px",height:"250px",margin:"15px 10px 10px 40%"}}src={quranImg}></img>
      </div>
   

    

     

<div style={{display:"flex",justifyContent:"space-between"}}>

<div style={{width:"25%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
  <h2 style={{ fontFamily: "'Montserrat', sans-serif", color: "#FAF6EB", marginLeft: "15px" }}>Popular</h2>
      <div style={{ display: "flex",flexDirection:"column", gap: ".9rem", padding: "8px" ,justifyContent:'center'}}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          maxWidth: "163px",
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
</div>



      <div className="scroll-container" style={{ display: "flex", flexDirection: 'column', gap: "10px", height: "70vh", overflowY: "scroll", width: "70%", margin: "1%" }}>

         <div style={{ width: "100%", display: "flex", margin: "15px 10px",fontSize:"32px",fontWeight:"500" }}>
        {["Surah", "Translate", "Play"].map((item) => (
          <button key={item} onClick={() => setActive(item)} style={{
            ...style.btnFilter,
            ...(active === item ? style.activ : {})
          }}>
            {item}
          </button>
        ))}
      </div>
        {surahs.map((surah) => (
          <div key={surah.number} onClick={() => goToSurah(surah)} style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            borderRadius: "10px",
            width: "95%",
            borderBottom: "1px solid #ccc",
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

    </div>
  );
}
