import React from "react";
import ComponentLessonRepeat from "./componntLessonRepat";
import quranImg from "./img/Group (4).png";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

const namesChioh = [
  { name: "سهره مع القرأن الكريم" },
  { name: "قطوف من حدائق الايمان" },
  { name: "احاديث الدكتور عبد الله شحاته" },
  { name: "من تسجيلات الاذاعه الخارجيه" },
  { name: "امسيه دينيه" },
  { name: "القرءان الكريم (مجود)" },

];

export default function IzahetQuran() {
  const navigate = useNavigate();

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
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          padding: 0,
          margin: 0,
          width: "100%",
          maxWidth: "370px",
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
            }}
            onClick={() =>
              navigate("/azkarLison", { state: { name: item.name } }) // ✅ بعتنا البيانات هنا
            }
          >
            <ComponentLessonRepeat
              nameContent={item.name}
              imgContent={quranImg}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
