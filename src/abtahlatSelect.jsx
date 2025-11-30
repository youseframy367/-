import React from "react";
import ComponentLessonRepeat from "./componntLessonRepat"; // تأكد إن اسم الملف / التصدير متطابق
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import lisningImg from "./img/Group(1).png";
import { useNavigate } from "react-router-dom";   // 👈 استدعاء useNavigate

// بيانات الخيارات
const optionsList = [
  { name:"الشيخ نصر الدين طوبار" , image: lisningImg },
  { name: "الشيخ سيد النقشبندي",   image: lisningImg },
  { name:"الشيخ محمد عمران"  ,      image: lisningImg },
  { name: "الشيخ طه الفشني",        image: lisningImg },
];


export default function ApthlatSelect() {
  const navigate = useNavigate();   // 👈 Hook للتنقل بين الصفحات

const handleClick = (sheikhName) => {
// في ApthlatSelect
navigate("/ApthlatLisson", { state: { sheikhName } });

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
      }}
    >
      <ComponentLessonRepeat nameContent={item.name} imgContent={item.image}    lastSora="The Greatest Prayers"/>
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
          zIndex: "1000",
        }}
        onClick={() => window.history.back()}
      />
      <ul
        style={{
          display: "flex",
          flexDirection: "column", // ترتيب عمودي
          alignItems: "center", // توسيط العناصر أفقيًا
          gap: "20px", // مسافة بين العناصر
          padding: 0,
          margin: 0,
          width: "100%",
          maxWidth: "370px", // نفس عرض الكمبوننت
        }}
      >
        {getOptions}
      </ul>
    </div>
  );
}
