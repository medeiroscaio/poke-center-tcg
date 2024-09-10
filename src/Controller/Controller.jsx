import { useState } from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { IoIosRadioButtonOn } from "react-icons/io";
import { PiTrashFill } from "react-icons/pi";
import { MdHome } from "react-icons/md";
import "./Controller.css";
import Table from "../Table/Table.jsx";
import Dashboard from "../Dashboard/Dashboard.jsx";

function Controller() {
  const [view, setView] = useState(1);

  return (
    <div id="controller">
      <div id="side-bar">
        <button onClick={() => setView(1)}>
          <MdHome />
        </button>
        <button onClick={() => setView(2)}>
          <BiSolidDashboard />
        </button>
        <button onClick={() => setView(3)}>
          <IoIosRadioButtonOn />
        </button>
        <button onClick={() => setView(4)}>
          <IoIosRadioButtonOn />
        </button>
        <button onClick={() => setView(5)}>
          <PiTrashFill />
        </button>
      </div>
      <div id="content">
        {view === 1 ? <Dashboard /> : ""}
        {view === 2 ? <Table /> : ""}
      </div>
    </div>
  );
}

export default Controller;
