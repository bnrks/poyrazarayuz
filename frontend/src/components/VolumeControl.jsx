import React, { useState } from "react";
import "../VolumeControl.css";
const VolumeControl = () => {
  const [volume, setVolume] = useState(1);
  const finalVolume = volume ** 2;

  return (
    <main>
      <span className="text-white"> {finalVolume.toFixed(3)}</span>
      <section>
        <input
          style={{ color: "yellow" }}
          type="range"
          min={0}
          max={3}
          step={0.02}
          value={volume}
          onChange={(event) => {
            setVolume(event.target.valueAsNumber);
          }}
        />
      </section>
    </main>
  );
};

export default VolumeControl;
