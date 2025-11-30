import { useNavigate } from "react-router-dom";
import ComponentLessonRepeat from "../componntLessonRepat";
import duas from "../azkhrInfo.json";
import sibha from "../img/Group 80.png";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function DuaListCom() {
  const navigate = useNavigate();

  return (
    <div
    style={{
  display: "flex",
  justifyContent: "center",
  padding: "35px 0px",
  width: "100%",
  margin: "0px",
  backgroundImage: "linear-gradient(to bottom, #0B4F47 0%, #0D5F55 35%, #117268 70%, #1A8A7E 100%)",
  overflowX: "hidden",
  overflowY: "auto",
  height: "auto",
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
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)", // عمودين
gap:"130px"  ,                   // مسافة بين العناصر
    padding: 0,
    margin: 0,
    width:"100%",
   width: "1000px",                     // تتحكم في العرض الكلي
  }}
>


        {duas.map((category) => (
          <li
            key={category.id}
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
            onClick={() => navigate(`/azkarShow/${category.id}`, { state: { category } })}
          >
            <ComponentLessonRepeat
              nameContent={category.category}
              lastSora=""
              n=""
              imgContent={sibha}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
