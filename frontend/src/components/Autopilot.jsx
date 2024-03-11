import React, { useState } from "react";

function AutoPilot({ fetchData, changeStatus, status }) {
  const [autopilot, setAutopilot] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const handleAutopilot = () => {
    setAutopilot(!autopilot);
    if (!autopilot) {
      changeStatus();
      console.log(status);
      const newIntervalId = startDataFetchInterval();
      setIntervalId(newIntervalId);
    } else {
      clearInterval(intervalId); // Otonom mod kapatıldığında interval'i durdur
    }
  };

  const startDataFetchInterval = () => {
    const newIntervalId = setInterval(() => {
      fetchData();
    }, 100); // 100 iken herhangi bir çökme yok fakat 10 yapıldığında hem axios hemde uygulama çöküyor otonom mod kapanmıyor. 50 ile denedim bir kaç saniye sonra kapanıyor otonom mod.

    return newIntervalId;
  };

  return (
    <>
      <button
        className={`btn btn-lg ${autopilot ? "bg-danger" : "bg-success"}`}
        onClick={handleAutopilot}
      >
        {autopilot ? "Otonom Mod Kapat" : "Otonom Mod Başlat"}
      </button>
    </>
  );
}

export default AutoPilot;
