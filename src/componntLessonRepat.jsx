import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import votart from "./img/Group 79.png";
import votartTwo from "./img/Vector 1 (3).png";
import quranImg from "./img/Group (4).png";

export default function ComponentLessonRepeat({
  imgContent = quranImg,
  nameContent = "الشيخ سمير مصطفي",
  lastSora = " Last Read",
  n="  Ayah no. 1"
}) {
  return (
    <>
    <div
      style={{
        maxWidth: "370px",
        height: "170px",
        borderRadius: "23px",
        backgroundImage: "linear-gradient(to bottom, #006754 , #87D1A4)",
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
      <div style={{ display: "flex", gap: "5rem", zIndex: "1000" }}>
        <div style={{ marginTop: "15px" }}>
          <p
            style={{
              fontSize: "12px",
              fontWeight: "400",
              fontFamily: "'Inter', sans-serif",
              marginLeft: "15px",
              marginBottom: "0px",
            }}
          >
        { lastSora}
         
          </p>
          <p
            style={{
              direction:'rtl',
              margin: "10px 8px",
              fontSize: "20px",
              fontWeight: "700",
              fontFamily: "'Amiri', serif",
              whiteSpace: "nowrap",
              lineHeight: "2",
            }}
          >
            {nameContent}
          </p>
          <p
            style={{
              fontSize: "12px",
              fontWeight: "400",
              fontFamily: "'Inter', sans-serif",
              marginLeft: "15px",
              marginBottom: "10px",
            }}
          >
          {n}
          </p>

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
          src={votart}
          alt="content visual"
          style={{
            width: "151px", // هنا صححت Width إلى width
            height: "145px",
            position: "absolute",
            left: "64%",
            top: "20%",
            maxWidth: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      {/* الزخرفة */}
      <img
        src={votartTwo}
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
    </>
  );
}
