import React from "react";
import { useNavigate } from "react-router-dom";
import ComponentLessonRepeat from "../componntLessonRepat"; // تأكد إن اسم الملف / التصدير متطابق
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import votart from "./imgComputer/Vector 1(1).png";

import listImg from "../img/Group 79.png";

// بيانات الخيارات
const optionsList = [
  { name: "الدحيح", image: listImg },
  { name: "الدحيح", image: listImg },
  { name: "الدحيح", image: listImg },
  { name: "الدحيح", image: listImg },
   { name: "الدحيح", image: listImg },
  { name: "الدحيح", image: listImg },
];

export default function TanmaiaCom() {
  const navigate = useNavigate();

  const goToSurah = ( name) => {
    navigate("/tanmiaLison", {
      state: { name },
    });
  };

  const getOptions = optionsList.map((item, index) => (
    <li
      key={index}
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
      onClick={() => goToSurah( item.name)}
    >
      <ComponentLessonRepeat
        nameContent={item.name}
        imgContent={item.image}
      />
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
        height:"auto"
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
          zIndex:"1000"
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
