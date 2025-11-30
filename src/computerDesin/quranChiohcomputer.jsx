import React from "react";
import ComponentRepeatCom from "../ncomponntRepeat";
import quranImg from "./imgComputer/quran tasbee 1.png";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "../sourHafiz.css";
import votart from "./imgComputer/Vector 1(1).png";

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




export default function ChiohChoiseCom() {
  const navigate = useNavigate();

 const goToSurah = (item) => {
 sessionStorage.setItem("selectedSheikh", JSON.stringify({
  id: item.id,
  server: item.server,
  name: item.name
}));

  
  navigate("/quranSelct"); // ← بعدين انتقل
};

   


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
         backgroundSize: "cover",        // يغطي الشاشة
    backgroundRepeat: "no-repeat",  // مايكررش الخلفية
    backgroundAttachment: "fixed",  // الخلفية ثابته مع الاسكرول
minHeight:"100%"
       
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
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)", // عمودين
gap:"130px"  ,                   // مسافة بين العناصر
    padding: 0,
    margin: 0,
    width:"100%",
   width: "1000px",                     // تتحكم في العرض الكلي
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
boxShadow: "15px 0px 25px #004B40",
    overflow: "hidden",
        borderRadius: "23px", // الحواف
        zIndex:"100"
      }}
    >
      <ComponentRepeatCom
        nameContent={item.name}
        imgContent={quranImg}
      />
    </li>
  ))}
</ul>

         <img src={votart} alt="Decoration" className="bottom" />

    </div>
  );
}
