import React, { useState, useEffect, useRef } from "react";

function RightRef({ data }) {
  const textareaRef = useRef("");
  const [textValue, setTextValue] = useState("");

  // Her data değiştiğinde, textValue'yi güncelle
  useEffect(() => {
    if (data.length > 1) {
      setTextValue((prevText) => prevText + data[0] + "\n");
      // Scrollbar'ı kaldırmak için textarea'nın style'ını güncelle
      textareaRef.current.style.overflowY = "hidden";
      // Yeni veri geldiğinde textarea'yı aşağı doğru kaydır
      textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
    }
  }, [data]);

  return (
    <>
      <textarea
        ref={textareaRef}
        value={textValue || "Yükleniyor...\n"}
        name=""
        id=""
        cols="30"
        rows="13"
        style={{ overflowY: "hidden", resize: "none" }} // scrollbar'ı kaldırmak için style eklendi
      ></textarea>
    </>
  );
}

export default RightRef;
