// AzkarShow.js
import React, { useEffect, useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useLocation } from "react-router-dom";
import startAiatImg from "./img/bismillah-vector-download-vector-bismillah-format-cdr-svg-eps-dodo-5 1 (1).png";
import quranImg from "./img/Group (4).png";
import votart from "./img/Vector 1 (3).png";
import sibha from "./img/Group 80.png";
import "./sourHafiz.css";

export default function AzkarShow() {
  const navigate = useNavigate();
  const location = useLocation();
  const { category } = location.state;

  

  return (
    <div style={{
   backgroundImage: "linear-gradient(to bottom, #53AEA1 , #D4DFDC , #C5D8D3 ,#FFFFFF )",
         minHeight: "100vh",
      width: "100%",
      margin: 0
    }}>
      {/* الهيدر */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        backgroundImage: "linear-gradient(to bottom, #006754 , #87D1A4)",
                overflow: "hidden",
              
position:"relative"
      }}>
        <ArrowBackIcon
          style={{ width: "24px", height: "24px", color: "#fff", cursor: "pointer", position: "absolute", top: "15px", left: "15px" }}
          onClick={() => navigate(-1)}
        />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ textAlign: "center", color: "#fff" }}>
            <h1 style={{ fontWeight: 700, fontSize: "32px",minWidth:"200px" }}>{category.category}</h1>
          </div>
          <img style={{ width: "110px", height: "110px",}} src={sibha} alt="Quran" />
        </div>
        <img style={{ margin: "-180px -20px -20px -70px", width: "130%", height: "180px" }} src={votart} alt="decoration" />
      </div>

      {/* قائمة الأدعية */}
      <div style={{ padding: "20px", Width: "90%", margin: "0 auto" }}>
        {category.array.map((dua) => (
          <div key={dua.id} style={{
         
         fontFamily:"'Amiri', serif;",
         fontWeight:'700',
         fontSize:"20px",
         color:"#004B40"
           
          }}>
            <p style={{ fontSize: "20px", lineHeight: "2", color: "#004B40",direction:"rtl",fontWeight:"700" }}>{dua.text}</p>
                      <div style={{width:"100%",height:"1px",background:"#004B40"}}></div>

          </div>
        ))}
      </div>
    </div>
  );
}
