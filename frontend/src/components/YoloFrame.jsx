import React, { useState, useEffect } from "react";
import DefaultPoyraz from "../img/arayuzbgkare.jpg"; // Varsayılan resmin yolunu ekleyin

function YoloFrame({ data }) {
  const [isYoloFrame, setIsYoloFrame] = useState(true);

  useEffect(() => {
    console.log("Gelen veri:", data);
  }, [data]);

  return (
    <>
      <div>
        {isYoloFrame ? (
          <img
            src={data ? `data:image/jpeg;base64,${data}` : DefaultPoyraz} // Data varsa veriyi göster, yoksa varsayılan resmi göster
            id="yoloFrame"
            alt="Yolo Frame"
          />
        ) : (
          <p className="text-white">Yükleniyor</p>
        )}
      </div>
    </>
  );
}

export default YoloFrame;
