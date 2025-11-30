import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ComponentLessonRepeat from "../componntLessonRepat";
import bigAdio from "../img/Polygon 1 (1).png";
import smolAdio from "../img/Polygon 2.png";
import lisningImg from "../img/Group(1).png";
import "../sourHafiz.css";
import votart from "../img/Group 79.png";
import votartTwo from "../img/Vector 1 (3).png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Chioh from"../ContextDate/apthlat"
import imgNext from "./imgComputer/Group 22.png"


const chioh =Chioh;


const convertToEmbedUrl = (url) => {
  try {
    const parsedUrl = new URL(url);

    // لو الرابط فيه playlist
    if (parsedUrl.searchParams.get("list")) {
      return `https://www.youtube.com/embed/videoseries?list=${parsedUrl.searchParams.get("list")}`;
    }

    // لو الرابط لفيديو عادي
    let videoId;
    if (parsedUrl.hostname.includes("youtu.be")) {
      videoId = parsedUrl.pathname.slice(1);
    } else if (parsedUrl.searchParams.get("v")) {
      videoId = parsedUrl.searchParams.get("v");
    }

    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }

    return url;
  } catch {
    return "";
  }
};

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
    cursor: "pointer",
    position: "relative",
  },
  activ: {
    fontWeight: "700",
  },
};

export default function ApthlatLisonCom(){
const [lastLesson, setLastLesson] = useState(null);

useEffect(() => {
  const savedLesson = localStorage.getItem("lastLesson");
  if (savedLesson) {
    setLastLesson(JSON.parse(savedLesson));
  }
}, []);



  const [active, setActive] = useState("Lesson");
  const navigate = useNavigate();
const location = useLocation();
const { sheikhName } = location.state || {};
const savedSheikh = localStorage.getItem("selectedSheikh");
const finalSheikhName = sheikhName || savedSheikh;
const sheikh = finalSheikhName ? chioh[finalSheikhName] : null;

console.log(sheikh)
if (!sheikh) {
  return <p style={{textAlign:"center",color:"red",fontSize:"40px"}}>من فضلك اختر شيخ أولاً</p>;
}

const goToSurah = (lesson) => {
  const data = {
    ...lesson,
    url: convertToEmbedUrl(lesson.url),
  };

  if (lesson.url.includes("playlist")) {
    // لو Playlist هنروح لصفحة القوائم
    navigate("/playlist", { state: data });
  } else {
    // لو فيديو عادي
    localStorage.setItem("audioData", JSON.stringify(data));
    navigate("/vadio", { state: data });
  }
};


  // فلترة القائمة
  let filteredLessons = sheikh?.lison || [];
  if (active === "Name") {
    filteredLessons = [...filteredLessons].sort((a, b) =>
      (a.title || "").localeCompare(b.title || "")
    );
  } else if (active === "Play") {
    filteredLessons = filteredLessons.filter((l) =>
      l.url.includes("playlist")
    );
  }

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
        onClick={() => window.history.back()}
      />

    
{lastLesson ? (
     <div style={{
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
     <div style={{ display: "flex",flexDirection:"row",direction:"rtl", zIndex: "1000" ,width:'100%'}}>
<div style={{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    margin:"15px 10px 10px 40%"
}}>
          <img style={{width:"100px",height:"100px",}}src={lisningImg}></img>
</div>

        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"10px",width:"30%"}} >

 <p
            style={{
              fontSize: "12px",
              fontWeight: "400",
              fontFamily: "'Inter', sans-serif",
              marginLeft: "15px",
              marginBottom: "10px",
            }}
          >
            Ayah no. 1
          </p>


            <p
            style={{
              direction:'rtl',
              margin: "10px 8px",
              fontSize: "20px",
              fontWeight: "700",
              fontFamily: "'Amiri', serif",
              whiteSpace: "nowrap",
              lineHeight: "2",
            }}
          >
       {//اسم الدرس الخير اللى متخزن//
      }
     {lastLesson.title}
          </p>

          <p
            style={{
              fontSize: "12px",
              fontWeight: "400",
              fontFamily: "'Inter', sans-serif",
              marginLeft: "15px",
              marginBottom: "0px",
            }}
          >
            Last Read
          </p>
        
           </div>



<div style={{height:"150px",width:"2px",background:"#fff",margin:"10px"}}></div>


          <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
      width:"20%",
            direction:"rtl"
          }}>
{lastLesson && (



  <button
            style={{
              fontFamily: "Montserrat, sans-serif",
              padding: "11px",
              borderRadius: "30px",
              border: "none",
              backgroundColor: "#004B40",
              color: "#DDD",
              width: "125px",
              display: "flex",
              alignItems: "center",
              justifyContent:"space-around",
              fontWeight: 400,
              fontSize: "12px",
              fontWeight:"400",
              cursor: "pointer",
    boxShadow: "13px 13px 25px #006754" // ✅ تم التصحيح          
            }}
         onClick={() => goToSurah({ ...lastLesson, sheikhName: lastLesson.sheikhName || sheikh?.name })}>
            {//الزرار اللى هيوديه على الصفحه اللى هتعرض الدرس
            }
         
    <img 
  src={imgNext} 
  alt="next"
  style={{
    color:"#E2F6F8",
    border: "none",
    display: "inline-block",
    marginLeft:"8px"
  }} 
/>
   Continue
          </button>


          )}
        </div>

      </div>

    
    </div>
) : null}
     <div style={{display:"flex",justifyContent:"space-between"}}>
    <div style={{width:"25%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>

      <h2 style={{ fontFamily: "'Montserrat', sans-serif", color: "#FAF6EB",marginLeft:"15px" }}>
        Start listening
      </h2>

      <div style={{ display: "flex", gap: ".9rem", padding: "8px" ,justifyContent:'center',flexDirection:"column"}}>
        <div
         style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          maxWidth: "155px",
          height: "191px",
          borderRadius: "23px",
          background: "#F5FAF4"
        }}
        >
          <h3 style={{ color: "#004B40", marginTop: "10px" }}>Video</h3>
          <div
            style={{
              position: "relative",
              width: "80.6px",
              height: "80px",
              margin: "50px 10px 10px 60px",
            }}
          >
            <img src={bigAdio} alt="quran" style={{ width: "100%", height: "100%", display: "block" }} />
            <img
              src={smolAdio}
              alt="small"
              style={{
                position: "absolute",
                top: "50%",
                left: "56%",
                transform: "translate(-50%, -50%)",
                width: "52px",
                height: "60px",
              }}
            />
          </div>
        </div>

        <div
         style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          maxWidth: "155px",
          height: "191px",
          borderRadius: "23px",
          background: "#F5FAF4"
        }}
        >
          <h3 style={{ color: "#004B40", marginTop: "10px" }}>Listening</h3>
          <img
            src={lisningImg}
            alt="listening"
            style={{
              width: "90px",
              height: "90px",
              margin: "30px 10px 10px 60px",
            }}
          />
        </div>

      </div>

</div>
      <div className="scroll-container" style={{ display: "flex", flexDirection: 'column', gap: "10px", height: "70vh", overflowY: "scroll", width: "70%", margin: "1%" }}>

      {/* أزرار الفلترة */}
      <div style={{ width: "100%", display: "flex", margin: "15px 10px" }}>
        {["Lesson", "Play", "Name"].map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            style={{
              ...style.btnFilter,
              ...(active === item ? style.activ : {}),
            }}
            className={active === item ? "activ" : ""}
          >
            {item}
          </button>
        ))}
      </div>

      {/* قائمة الدروس */}
      <div
        className="scroll-container"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          position: "sticky",
          top: "10px",
          height: "70vh",
          overflowY: "scroll",
          padding: "10px 0px",
          margin:"0px"
          

        }}
      >
        {filteredLessons.map((lesson, idx) => (
          <div
            key={idx}
onClick={() => {
  // تخزين الدرس في localStorage
  localStorage.setItem("lastLesson", JSON.stringify({ 
    ...lesson, 
    sheikhName: sheikh?.name 
  }));

  // بعد التخزين نكمل الفنكشن العادية
  goToSurah({ ...lesson, sheikhName: sheikh?.name });
}}
             style={{
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
              <p
                style={{
                  background: "#87D1A4",
                  color: "#fff",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "9px",
                }}
              >
                {idx + 1}
              </p>

              <div
                style={{
                  lineHeight: ".5",
                  margin: "10px 20px",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                <p
                  style={{
                    maxWidth: "200px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    margin: 0,
                    padding: 0,
                    lineHeight: "1.2",
                    fontSize: "14px",
                    color: "#000",
                    fontWeight: "500",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  {lesson.titleEn}
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: "400",
                    color: "#858585",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  {lesson.duration || "غير متوفرة"} Minute
                </p>
              </div>
            </div>

           <h2
  style={{
    margin: 0,
    color: "#066C58",
    direction:"rtl",
    fontFamily: "'Amiri', serif",
    fontSize: "20px",
    fontWeight: "700",
    maxWidth: "200px",
    whiteSpace: "nowrap",       // يمنع النزول لسطر جديد
    overflow: "hidden",         // يخفي النص الزيادة
    textOverflow: "ellipsis"    // يظهر الثلاث نقاط ...
  }}
>
              {lesson.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
}
