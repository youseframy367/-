import React from "react";
import ComponentRepeat from "./ncomponntRepeat";
import quranImg from "./img/Group (4).png";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./sourHafiz.css";

const namesChioh = [


  { name: "السديس", id: "sds", server: "server11" },
  { name: "الغامدي", id: "s_gmd", server: "server7" },
  { name: "الشريم", id: "shur", server: "server7" },
  { name: "مهدي البدير", id: "s_bud", server: "server6" },
  { name: "محمد جبرائيل", id: "jbrl", server: "server8" },
  { name: "ماهر المعيقلي", id: "maher", server: "server12" },


  {name :"احمد ابن على العجمى",id :"ajm" , server:"server10"},
  {name:"العيون الكوشى",id:"koshi",server:"server11"},
{name:"احمد نعيم",id:"ahmad_nu",server:"server11"},
{name:"اسلام صبحى",id:"islam/Rewayat-Hafs-A-n-Assem",server:"server14"},
{name:"بدر التوركى",id:"bader/Rewayat-Hafs-A-n-Assem",server:"server10"},
{name:"خالد الجليل",id:"jleel",server:"server10"},
{name:"سعد الغامدى",id:"s_gmd",server:"server7"},
{name:"سعود الشريم",id:"shur",server:"server7"},
{name:"صالح الهبدان",id:"habdan",server:"server6"},
{name:"عبد الباسط عبد الصمد",id:"basit",server:"server7"},
{name:"عبد الله بصفر",id:"bsfr",server:"server6"},
{name:"فارس عباد",id:"frs_a",server:"server8"},
{name:"محمد الطبلاوى",id:"tblawi",server:"server12"},
{name:"محمد ايوب",id:"ayyoub2/Rewayat-Hafs-A-n-Assem",server:"server16"},
{name:"محمد صديق المنشاوى",id:"minsh",server:"server10"},
{name:"محمود خليل الحصرى",id:"husr",server:"server13"},
{name:"محمود على البنا",id:"bna",server:"server8"},
{name:"مشارى العفاسى",id:"afs",server:"server8"},
{name:"مصطفى اسماعيل",id:"mustafa/Almusshaf-Al-Mojawwad",server:"server8"},
{name:"ناصر القطامى",id:"qtm",server:"server6"},
{name:"ياسر الدوسرى",id:"yasser",server:"server11"},
{name:"ادريس ابكر",id:"abkr",server:"server6"},
{name:"احمد الحذيفى",id:"ahmad_huth",server:"server8"},
{name:"محمد رفعت",id:"refat",server:"server14"},
{name:"احمد نعينع",id:"ahmad_nu",server:"server11"},
];




export default function ChiohChoise() {
  const navigate = useNavigate();

 const goToSurah = (item) => {
 sessionStorage.setItem("selectedSheikh", JSON.stringify({
  id: item.id,
  server: item.server,
  name: item.name
}));

  
  navigate("/hafiz"); // ← بعدين انتقل
};

   


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
      className="scroll-container"
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
        {namesChioh.map((item, index) => (
          <li
            key={index}
            onClick={() => goToSurah(item)}
      style={{
        cursor: "pointer",
        width: "100%",
        maxWidth: "370px",
        listStyle: "none",
      }}
          >
       <ComponentRepeat
        nameContent={item.name}
        imgContent={quranImg}
      />
    </li>
  ))}
</ul>
   
    </div>
  );
}
