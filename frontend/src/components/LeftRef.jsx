import React, { useEffect, useRef, useState } from "react";

function LeftRef({ data }) {
  const textareaRef = useRef();
  const [textValue, setTextValue] = useState("");

  // Her data değiştiğinde, textValue'yi güncelle
  useEffect(() => {
    if (data.length > 0) {
      setTextValue((prevText) => prevText + data[1] + "\n");
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
        cols="10"
        rows="12"
        style={{ overflowY: "hidden", resize: "none" }} // scrollbar'ı kaldırmak için style eklendi
      ></textarea>
    </>
  );
}

export default LeftRef;
