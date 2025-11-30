import React from "react";
import img from "./imgComputer/Group 78.png";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";
import votart from "./imgComputer/Vector 1(1).png";

export default function StartBagCom() {
  const navigate = useNavigate();

  const handleChoose = () => {
    navigate("/Select");
  };

  return (
    <div style={{
       backgroundImage:
          "linear-gradient(to bottom, #0B4F47, #0067541C, #AAD4C8)",
          height:"100vh"
    }}>
      <div className="politOne"></div>
      <div className="PolitTwo"></div>
      <div className="contanerCenter" style={{ display: "flex",flexDirection:"row" ,justifyContent: "space-around" ,width:"100%",direction:'rtl'}}>
        <img src={img} alt="Main banner" style={{ width: "33%" }} />
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center" ,alignItems:"center"}}>
          <h1 style={{fontSize:"60px"}}>اقرأ وارتقِ بكلمات الله</h1>
          <button onClick={handleChoose} style={{fontSize:'31px',fontWeight:"400" ,width:"300px"}}>
                        <ArrowForwardIcon style={{ color: "#004B40", marginLeft: "5px",width:'27px',height:"27px" }} />

            Get Started
          </button>
        </div>
      </div>
      <img src={votart} alt="Decoration" className="bottom" />
    </div>
  );
}
