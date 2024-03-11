import React, { useState, useEffect } from "react";
import { fetchMessage, fetchOnce } from "./api";
import "./App.css";
import YoloFrame from "./components/YoloFrame";
import LaneDetection from "./components/LaneDetection";
import LeftRef from "./components/LeftRef";
import RightRef from "./components/RightRef";
import Emergency from "./components/Emergency";
import AutoPilot from "./components/Autopilot";

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
      <div className="d-flex flex-column text-center">
        <div className="row row-1 my-4">
          <div className="col-5 ">
            <YoloFrame data={datas[3]}></YoloFrame>
          </div>
          <div className="col-2 d-flex align-items-end justify-content-center">
            <AutoPilot
              fetchData={fetchData}
              changeStatus={changeStatus}
              status={status}
            />
          </div>
          <div className="col-5">
            <LaneDetection data={datas[2]}></LaneDetection>
          </div>
        </div>
        <div className="row row-2 my-4">
          <div className="col-5">
            <LeftRef data={datas}></LeftRef>
          </div>
          <div className="col-2 d-flex align-items-start justify-content-center">
            <Emergency></Emergency>
          </div>
          <div className="col-5">
            <RightRef data={datas}></RightRef>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
