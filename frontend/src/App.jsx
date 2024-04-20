import React, { useState, useEffect } from "react";
import { fetchMessage, fetchOnce } from "./api";
import "./App.css";
import YoloFrame from "./components/YoloFrame";
import LaneDetection from "./components/LaneDetection";
import LeftRef from "./components/LeftRef";
import RightRef from "./components/RightRef";
import Emergency from "./components/Emergency";
import AutoPilot from "./components/Autopilot";
import VolumeControl from "./components/VolumeControl";
function App() {
  const [datas, setDatas] = useState([]);
  const [status, setStatus] = useState(false);
  const fetchData = async () => {
    try {
      const data = await fetchMessage();
      setDatas(data);
    } catch (error) {
      console.error("Veri getirme hatası:", error);
    }
  };
  const changeStatus = async () => {
    try {
      const stat = await fetchOnce();
      setStatus(stat);
    } catch (error) {
      console.error("Veri getirme hatası:", error);
    }
  };

  return (
    <>
      <div className="d-flex flex-column text-center ">
        <div className="row my-5">
          <div className="col-3">
            <YoloFrame data={datas[3]}></YoloFrame>
          </div>
          <div className="col-6 d-flex align-items-start justify-content-evenly">
            <AutoPilot
              fetchData={fetchData}
              changeStatus={changeStatus}
              status={status}
            />
            <Emergency></Emergency>
            <button className="btn btn-lg bg-secondary">Ayarlar</button>
          </div>
          <div className="col-3">
            <LaneDetection data={datas[2]}></LaneDetection>
          </div>
        </div>
        <div className="row my-5 d-flex justify-content-between ">
          <div className="col-2">
            <LeftRef data={datas}></LeftRef>
          </div>
          <div className="col-8 d-flex align-items-end justify-content-evenly ">
            <VolumeControl></VolumeControl>
            <VolumeControl></VolumeControl>
            <VolumeControl></VolumeControl>
          </div>
          <div className="col-2">
            <RightRef data={datas}></RightRef>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
