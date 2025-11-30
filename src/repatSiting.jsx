import React, { useState } from "react";

export default function RepeatSettings() {
  const [repeatCount, setRepeatCount] = useState(1);

  return (
    <div style={{
      background: "#fff4e6",
      padding: "20px",
      borderRadius: "12px",
      maxWidth: "300px",
      margin: "20px auto",
      textAlign: "right",
      direction: "rtl"
    }}>
      <h3 style={{ marginBottom: "10px" }}>تكرار الآية</h3>
      <label htmlFor="repeat">عدد التكرارات:</label>
      <input
        type="number"
        id="repeat"
        min="1"
        value={repeatCount}
        onChange={(e) => setRepeatCount(Number(e.target.value))}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc"
        }}
      />
    </div>
  );
}
