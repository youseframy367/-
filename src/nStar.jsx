import React from "react";
import "./nstyleBagStart.css"
import img from "./img/Group (4).png";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";
import votart from "./img/Vector 1 (3).png"
import { Link } from "react-router-dom";




export default function StartBag(){

  const navigate = useNavigate();

  const handleChoose = () => {
    // لو حابب تبعت اسم الشيخ المختار:
    navigate("/AllOption");
  };




        return(
            <>
            <div className="politOne"></div>
            <div className="PolitTwo"></div>
            <div className="contanerCenter">
                <h1>اقرأ وارتقِ بكلمات الله</h1>
                <img src={img}></img>
 
                <button onClick={handleChoose}>
                    Get Started
                    <ArrowForwardIcon style={{ color: "#004B40", marginLeft: "5px" }} />
                </button>
        

            </div>
            
         <img src={votart}className="bottom"></img>
            
            </>
        )
}