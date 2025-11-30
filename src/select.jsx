import React from "react";
import { useNavigate } from "react-router-dom";
import ComponentRepeat from "./ncomponntRepeat";
import quranImg from "./img/Group (4).png";
import listImg from "./img/Group 79.png";
import lisningImg from "./img/Group(1).png";
import AhdesImg from "./img/Group 80.png";

// بيانات الخيارات
const optionsList = [
  {
    name: "القرآن الكريم",
    image: quranImg,
    path: "/chioh",
  },
  {
    name: "دروس دينيه",
    image: listImg,
    path: "/SelectLisson",
  },
  {
    name: "ابتهالات",
    image: lisningImg,
    path: "/selectApthlat",
  },
  {
    name: "أحاديث نبويه",
    image: AhdesImg,
    path: "/selectAzcar",
  },

 {
    name: "من اذاعه القرءان الكريم",
    image: quranImg,
    path: "/izaheSelect",
  },
  {
    name: "تنميه هادفه",
    image: AhdesImg,
    path: "/tanmia",
  },





];

export default function AllOption() {
  const navigate = useNavigate();

  const getOptions = optionsList.map((item, index) => (
    <li
      key={index}
      style={{
        cursor: "pointer",
        width: "100%",
        maxWidth: "370px",
        listStyle: "none",
      }}
      onClick={() => navigate(item.path)}
    >
      <ComponentRepeat nameContent={item.name} imgContent={item.image}         style={{ margin: "0px  ", width: "98%" }}
/>
    </li>
  ));

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", // توسيط العمود أفقيًا
        padding: "35px 0px",
        width: "100%",
      margin:"0px",
        backgroundImage:
          "linear-gradient(to bottom, #53AEA1 , #D4DFDC , #C5D8D3 , #FFFFFF)",
        overflowX: "hidden",
        overflowY: "auto",
      }}
    >
      
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
