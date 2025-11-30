import React, { useState, useEffect } from "react";

export default function Cora({ onSelectSurah }) {
  const [surahsList, setSurahsList] = useState([]);
  const [surahNumber, setSurahNumber] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    async function fetchSurahs() {
      try {
        const res = await fetch("https://api.alquran.cloud/v1/surah");
        const data = await res.json();
        if (data.status === "OK") {
          setSurahsList(data.data);
        }
      } catch (err) {
        console.error("خطأ في تحميل قائمة السور:", err);
      }
    }

    fetchSurahs();
  }, []);

  const handleSurahClick = (number) => {
    setSurahNumber(number);
    if (onSelectSurah) {
      onSelectSurah(number); // 🔁 تمرير السورة المختارة للأب
    }
  };
  const styles = {
    container: {
      width: "100%",
      marginTop:"0px",
      maxWidth: "600px",
      backgroundColor: "#fff8dc",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      direction: "rtl",
      fontFamily: "sans-serif",
      maxHeight: "100vh",      // 👈 لتحديد أقصى ارتفاع
      overflowY: "auto",      // 👈 لتمكين التمرير
    },
    header: {
      padding: "16px",
      fontSize: "18px",
      fontWeight: "bold",
      backgroundColor: "#fff3b0",
      borderBottom: "1px solid #eee",
      textAlign: "center",
      position: "sticky",
      top: 0,
      zIndex: 1
    },
    list: {
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
    listItem: (isHovered, isSelected) => ({
      padding: "12px 20px",
      borderBottom: "1px solid #eee",
      cursor: "pointer",
      backgroundColor: isSelected
        ? "#ffe58f"
        : isHovered
        ? "#fef9c3"
        : "transparent",
      transition: ".3s ease",
    }),
  };


  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#fefefe",
      }}
    >
      <div style={styles.container}>
        <div style={styles.header}>اختر السورة</div>
        <ul style={styles.list}>
          {surahsList.map((s, i) => (
            <li
              key={s.number}
              style={styles.listItem(i === hoveredIndex, s.number === surahNumber)}
              onClick={() => handleSurahClick(s.number)}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {s.name} ({s.englishName})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
