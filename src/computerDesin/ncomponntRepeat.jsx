import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import votart from "./img/Vector 1 (3).png";
import quranImg from "./img/Group (4).png";

export default function ComponentRepeatCom({ imgContent = quranImg, nameContent, lastSora, style }) {
  return (
    <div
       style={{
        maxWidth: "345px",
        height: "170px",
        borderRadius: "23px",
        backgroundImage: "linear-gradient(to left, #006754 , #87D1A4)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "20px ",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        color: "#fff",
      }}
    >
      <div style={{ display: "flex", gap: "4rem", zIndex: "1000" }}>
        <div style={{ marginTop: "15px" }}>
          <p style={{
            fontSize: "12px",
            fontWeight: "400",
            fontFamily: "'Inter', sans-serif",
            marginLeft: "15px",
            marginBottom: "0px"
          }}>{lastSora}</p>
          <h2
            style={{
              margin: "10px 8px",
              fontSize: "24px",
              fontWeight: "700",
              fontFamily: "'Amiri', serif",
              whiteSpace: "nowrap",
              lineHeight: "2"
            }}
          >
            {nameContent}
          </h2>

          <button
            style={{
              fontFamily: "Montserrat, sans-serif",
              padding: "11px",
              borderRadius: "30px",
              border: "none",
              backgroundColor: "#fff",
              color: "#000",
              width: "115px",
              display: "flex",
              alignItems: "center",
              fontWeight: 400,
              fontSize: "12px",
              cursor: "pointer",
            }}
          >
            Continue
            <ArrowForwardIcon style={{ marginLeft: "15px" }} />
          </button>
        </div>

        <img
          src={imgContent}
          alt="content visual"
          style={{
            width: "151px",
            height: "145px",
            maxWidth: "100%",
            objectFit: "contain",
            position: "absolute",
            left: "62%",
            top: "20%",
          }}
        />
      </div>

      <img
        src={votart}
        alt="decoration"
        style={{
          position: "absolute",
          bottom: "0",
          right: "0",
          width: "100%",
          zIndex: 0,
        }}
      />
    </div>
  );
}
