import React, { useState } from "react";
import Cora from "./cora"; // لاختيار السور
import Agza from "./agza"; // لاختيار الأجزاء
import Kora from "./koraa"; // لاختيار القارئ
import AudioPlayer from "./audui"; // مشغل الآيات
import AllAzkar from "./azker";
import bgImage from"./img/images.jpg"



export default function Slider() {
  const [activeTab, setActiveTab] = useState("audio");

  const [repeatCount, setRepeatCount] = useState(1);
  const [selectedSurah, setSelectedSurah] = useState(1);
  const [selectedReader, setSelectedReader] = useState("ar.alafasy");

  const [sidebarVisible, setSidebarVisible] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "agza":
        return <Agza onSelectSurah={setSelectedSurah} />;
      case "cora":
        return <Cora onSelectSurah={setSelectedSurah} />;
      case "kora":
        return <Kora onSelectReader={setSelectedReader} />;
      case "audio":
        return (
          <AudioPlayer
            repeatCount={repeatCount}
            surahNumber={selectedSurah}
            reader={selectedReader}
          />
        );
        case "azker":
          return (
            <AllAzkar/>
          )
    
       
      default:
        return null;
    }
  };

  const tabs = [
    { key: "audio", label: "الصفحة الرئيسية" },
    { key: "agza", label: "الأجزاء" },
    { key: "cora", label: "السورة" },
    { key: "kora", label: "القارئ" },
    { key :"azker", label :"اذكار "}
  ];

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <button
        style={{
          position: "fixed",
          top: "30px",
          right: "30px",
          fontSize: "25px",
          border: "none",
          zIndex: 1000,
          background: "none",
          cursor: "pointer",
        }}
        onClick={() => setSidebarVisible(!sidebarVisible)}
      >
        ☰
      </button>

      {sidebarVisible && (
        <div
          onClick={() => setSidebarVisible(false)}
          style={{
            position: "fixed",
            top: "0px",
            left: "0px",
            height: "100%",
            width: "100%",
            background: "rgba(0, 0, 0, 0.1)",
            zIndex: 3,
          }}
        >
          <div
            style={{
              maxWidth: "250px",
              width: "100%",
              padding: "10px",
              background: "#1e1e2f",
              color: "#fff",
              height: "100vh",
              position: "fixed",
              top: 0,
              left: 0,
              transform: sidebarVisible ? "translateX(0)" : "translateX(-100%)",
              transition: "transform 0.3s ease-in-out",
              zIndex: 999,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                listStyle: "none",
                padding: "10px",
                alignItems: "flex-start",
              }}
            >
              <li style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                    onClick={(e) => {
                      e.currentTarget.style.background = "blue";
                    }}
              
              >
               <img src={bgImage} alt="صورة الخلفية" 

                  style={{
                    borderRadius: "50%",
                    width: "200px",
                    height: "200px",
                    margin: "20px",
                  }}
               
                />
              </li>

              {tabs.map((tab) => (
                <li
                  key={tab.key}
                  onClick={() => {
                    setActiveTab(tab.key);
                    setSidebarVisible(false);
                  }}
                  style={{
                    padding: "10px 30px",
                    borderRadius: "12px",
                    background:
                      activeTab === tab.key ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
                    color: "#fff",
                    border: activeTab === tab.key ? "2px solid #fff" : "1px solid #ccc",
                    transition: "all 0.3s ease-in-out",
                    width: "75%",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                >
                  {tab.label}
                </li>
              ))}

            
            </ul>
          </div>
        </div>
      )}

      <div
        style={{
          padding: "20px",
          minHeight: "100vh",
          width: "100%",
          position: "relative",
          zIndex: 2,
        }}
      >
        {renderContent()}
      </div>
    </div>
  );
}
