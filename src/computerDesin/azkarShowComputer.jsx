import { useNavigate, useLocation } from "react-router-dom";
import ComponentLessonRepeat from "../componntLessonRepat";
import duas from "../azkhrInfo.json";
import sibha from "../img/Group 80.png";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import votart from "../img/Vector 1 (3).png";

export default function DuaListCom() {
    const navigate = useNavigate();
  const location = useLocation();
  const { category } = location.state;

  

  return (
    <div style={{
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
      <ArrowBackIcon style={{
        width: "24px",
        height: "24px",
        position: "fixed",
        color:"#fff",
        top: "30px",
        left: "21px",
        zIndex:"1000"
      }}
onClick={() => navigate(-1)}></ArrowBackIcon>
      {/* الهيدر */}
      <div     style={{
  margin: "2% 7%",
  display: "flex",
  alignItems: "center",
  justifyContent:"space-between",
boxShadow:" 0px 20px 10px rgba(0, 103, 84, 0.12)",
  height: "150px",
  borderRadius: "23px",
  backgroundImage: `url(${votart}), linear-gradient(to bottom, #006754 , #87D1A4)`,
  backgroundSize: "100% 100%",     // يخلي الـ vector يتمدد على قد حجم الكارد كله
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center bottom", // يتثبت من تحت عند 0px
  padding: "20px",
  position: "relative",
  overflow: "hidden",
  color: "#fff"
}}
    >
       
        <div style={{ display: "flex", justifyContent: "space-between",width:"100%" }}>
          <div style={{ textAlign: "center", color: "#fff",width:"70%",display:'flex',justifyContent:"center"}}>
            <h1 style={{ fontWeight: 700, fontSize: "32px", }}>{category.category}</h1>
          </div>
          <img style={{ width: "100px", height: "100px",}} src={sibha} alt="Quran" />
        </div>
      </div>

      {/* قائمة الأدعية */}
      <div style={{ padding: "20px", width: "80%",height:"70vh", margin: "0 auto" }}>
        {category.array.map((dua) => (
          <div key={dua.id} style={{
         
         fontFamily:"'Amiri', serif;",
         fontWeight:'700',
         fontSize:"20px",
         color:"#004B40",
         direction:"rtl"
           
          }}>
            <p style={{ fontSize: "20px",fontWeight:"700", lineHeight: "2", color: "#004B40" }}>{dua.text}</p>
           <div style={{width:"100%",height:"1px",background:"#004B40"}}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
