import React, { useState } from "react";

function Emergency() {
  const [emergencymode, setEmergencymode] = useState(false);
  const handleEmergencyMode = () => {
    setEmergencymode(!emergencymode);
  };
  return (
    <>
      <button className="btn btn-lg bg-warning" onClick={handleEmergencyMode}>
        {emergencymode ? "ACİL MOD DEVREDE" : "Acil mod başlat."}
      </button>
    </>
  );
}

export default Emergency;
