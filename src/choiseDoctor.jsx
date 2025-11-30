import React from "react";
import ComponentLessonRepeat from "./componntLessonRepat";
import quranImg from "./img/Group (4).png";
import { useNavigate } from "react-router-dom";

const namesChioh = [
  { name: "الشيخ المنشاوى" },
  { name: "الشيخ الحصرى" },
  { name: "الشيخ مصطفي اسماعيل" },
  { name: "الشيخ سيد سعيد" },
  { name: "الشيخ احمد نعينع" },
];

export default function ChiohChoise() {
  const navigate = useNavigate();

  const goToSurah = (sheikhName) => {
    navigate("/hafiz", {
      state: { sheikh: sheikhName }, // بنمرر اسم الشيخ
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "35px 20px",
        width: "100%",
        height: "auto",
        backgroundImage:
          "linear-gradient(to bottom, #53AEA1 , #D4DFDC , #C5D8D3 , #FFFFFF)",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          marginLeft: "50%",
          transform: "translateX(-50%)",
          width: "100%",
        }}
      >
        {namesChioh.map((item, index) => (
          <li
            key={index}
            onClick={() => goToSurah(item.name)}
            style={{ marginBottom: "20px", cursor: "pointer" }}
          >
            <ComponentLessonRepeat nameContent={item.name} imgContent={quranImg} />
          </li>
        ))}
      </ul>
    </div>
  );
}
