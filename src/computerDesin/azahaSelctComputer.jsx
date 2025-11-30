import React from "react";
import ComponentLessonRepeat from "../componntLessonRepat";
import quranImg from "../img/Group (4).png";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import votart from "./imgComputer/Vector 1(1).png";

const namesChioh = [
  { name: "سهره مع القرأن الكريم" },
  { name: "قطوف من حدائق الايمان" },
  { name: "احاديث الدكتور عبد الله شحاته" },
  { name: "من تسجيلات الاذاعه الخارجيه" },
  { name: "امسيه دينيه" },
  { name: "القرءان الكريم (مجود)" },

];

export default function IzahetSelctCom() {
  const navigate = useNavigate();

  return (
    <div
      style={{
    display: "flex",
    flexDirection: "column",
    justifyContent:"center",
    alignItems: "center",
    padding: "35px 0px",
    width: "100%",
    margin: 0,
    minHeight: "100vh", // يبدأ من طول الشاشة ويتمدد مع المحتوى
    background: "linear-gradient(to bottom, #0B4F47, #0067541C, #AAD4C8)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%", // يغطي الصفحة بالكامل بدون تكرار
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
        onClick={() => navigate(-1)}
      />

      <ul
        style={{
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)", // عمودين
gap:"130px"  ,                   // مسافة بين العناصر
    padding: 0,
    margin: "0 auto",
    width:"100%",

    maxWidth:"1000px"
  }}
      >
        {namesChioh.map((item, index) => (
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
            onClick={() =>
              navigate("/azaheLison", { state: { name: item.name } }) // ✅ بعتنا البيانات هنا
            }
          >
            <ComponentLessonRepeat
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
