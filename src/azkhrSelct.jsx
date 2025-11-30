import { useNavigate } from "react-router-dom";
import ComponentLessonRepeat from "./componntLessonRepat";
import duas from "./azkhrInfo.json";
import sibha from "./img/Group 80.png";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function DuaList() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "50px 0",
        backgroundImage: "linear-gradient(to bottom, #53AEA1 , #D4DFDC , #C5D8D3 , #FFFFFF)",
        minHeight: "100vh",
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
          gap: "20px",
          padding: 0,
          margin: 0,
          width: "100%",
          maxWidth: "370px",
        }}
      >
        {duas.map((category) => (
          <li
            key={category.id}
            style={{ listStyle: "none" }}
            onClick={() => navigate(`/Azkar/${category.id}`, { state: { category } })}
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
