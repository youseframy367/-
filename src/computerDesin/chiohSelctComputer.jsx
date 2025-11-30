import React from "react";
import { useNavigate } from "react-router-dom";
import ComponentLessonRepeat from "../componntLessonRepat"; // تأكد إن اسم الملف / التصدير متطابق
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import listImg from "./imgComputer/Group 79(1).png";

// بيانات الخيارات
const optionsList = [
  { name: "الشيخ سمير مصطفى", image: listImg },
  { name: "المهندس ايمن عبد الرحيم", image: listImg },
  { name: "الشيخ محمد متولي الشعراوي", image: listImg },
  { name: "الداعيه احمد عامر", image: listImg },
  {name:"ياسر ممدوح",image:listImg}
];

export default function ChiohSelctCom() {
  const navigate = useNavigate();

  const goToSurah = ( name) => {
    navigate("/lisonDoc", {
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
    </div>
  );
}
