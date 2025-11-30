import React from "react";
import ComponentLessonRepeat from "../componntLessonRepat"; // تأكد إن اسم الملف / التصدير متطابق
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import lisningImg from "../img/Group(1).png";
import { useNavigate } from "react-router-dom";   // 👈 استدعاء useNavigate
import votart from "./imgComputer/Vector 1(1).png";

// بيانات الخيارات
const optionsList = [
  { name:"الشيخ نصر الدين طوبار" , image: lisningImg },
  { name: "الشيخ سيد النقشبندي",   image: lisningImg },
  { name:"الشيخ محمد عمران"  ,      image: lisningImg },
  { name: "الشيخ طه الفشني",        image: lisningImg },
 { name:"الشيخ محمد عمران"  ,      image: lisningImg },
  { name: "الشيخ طه الفشني",        image: lisningImg },


];


export default function ApthlatSelectCom() {
  const navigate = useNavigate();   // 👈 Hook للتنقل بين الصفحات

const handleClick = (sheikhName) => {
  localStorage.setItem("selectedSheikh", sheikhName); 
  navigate("/apthlatLison", { state: { sheikhName } });
};


  const getOptions = optionsList.map((item, index) => (
    <li
      key={index}
            onClick={() => handleClick(item.name)}   // 👈 عند الضغط يتنفذ
      style={{
        cursor: "pointer",
        width: "100%",
        maxWidth: "370px",
        listStyle: "none",
boxShadow: "15px 0px 25px #004B40",
    overflow: "hidden",
        borderRadius: "23px", // الحواف
        zIndex:"100"
      }}
    >
      <ComponentLessonRepeat nameContent={item.name} imgContent={item.image}    lastSora="The Greatest Prayers"/>
    </li>
  ));

  return (
    <div
     style={{
        display: "flex",
        justifyContent:"center",
        padding: "35px 0px",
        width: "100%",
      margin:"0px",
          backgroundImage:
          "linear-gradient(to bottom, #0B4F47, #0067541C, #AAD4C8)",
        overflowX: "hidden",
        overflowY: "auto",
      }}
    >
      <ArrowBackIcon
        style={{
          width: "24px",
          height: "24px",
          position: "fixed",
          color: "#fff",
          top: "30px",
          left: "21px",
          cursor: "pointer",
          zIndex: "1000",
        }}
        onClick={() => window.history.back()}
      />
      <ul
      style={{
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)", // عمودين
gap:"130px"  ,                   // مسافة بين العناصر
    padding: 0,
    margin: 0,
    width:"100%",
   width: "1000px",                     // تتحكم في العرض الكلي
  }}
>
     
        {getOptions}
      </ul>
            <img src={votart} alt="Decoration" className="bottom" />

    </div>
  );
}
