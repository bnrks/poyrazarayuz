import React, { useState, useEffect } from "react";
import DefaultPoyraz from "../img/arayuzbgkare.jpg"; // Varsayılan resmin yolunu ekleyin

function LaneDetection({ data }) {
  // props adı imageData'dan data olarak değiştirildi
  const [isLane, setIsLane] = useState(true);

  useEffect(() => {
    console.log("Gelen veri:", data); // Gelen veriyi console.log olarak yazdır
  }, [data]); // data propu değiştiğinde useEffect'i tekrar çağır

  return (
    <>
      <div>
        {isLane ? (
          <div>
            <img
              src={data ? `data:image/jpeg;base64,${data}` : DefaultPoyraz} // imageData yerine data olarak değiştirildi
              id="laneDetectionFrame"
              alt="Lane Detection Frame"
            />
          </div>
        ) : (
          <p className="text-white">Yükleniyor</p>
        )}
      </div>
    </>
  );
}

export default LaneDetection;
