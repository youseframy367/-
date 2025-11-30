import React from "react";
import { useNavigate } from "react-router-dom";
import ComponentLessonRepeat from "./componntLessonRepat"; // تأكد إن اسم الملف / التصدير متطابق
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import listImg from "./img/Group 79.png";

// بيانات الخيارات
const optionsList = [
  { name: "الدحيح", image: listImg },
  { name: "الدحيح", image: listImg },
  { name: "الشيخ محمد متولي الشعراوي", image: listImg },
  { name: "الداعيه احمد عامر", image: listImg },
];

export default function Tanmaia () {
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
        justifyContent: "center", // توسيط العمود أفقيًا
        padding: "50px 0px",
        width: "100%",
        height: "100vh",
        backgroundImage:
          "linear-gradient(to bottom, #53AEA1 , #D4DFDC , #C5D8D3 , #FFFFFF)",
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
          zIndex:"1000"
        }}
        onClick={() => window.history.back()}
      />
      <ul
        style={{
          display: "flex",
          flexDirection: "column", // ترتيب عمودي
          alignItems: "center",    // توسيط العناصر أفقيًا
          gap: "20px",              // مسافة بين العناصر
          padding: 0,
          margin: 0,
          width: "100%",
          maxWidth: "370px",       // نفس عرض الكمبوننت
        }}
      >
        {getOptions}
      </ul>
    </div>
  );
}
