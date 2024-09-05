import "./Dashboard.css";
import Container from "../components/Container/container.jsx";
import React from "react";
import { Chart } from "react-google-charts";

export const columnData = [
  ["Rarity", "Outputs", { role: "style" }],
  ["Commom", 30, "#b87333"],
  ["Incommom", 20, "silver"],
  ["Rare", 15, "gold"],
  ["Promocional", 10, "color: #e5e4e2"],
  ["Ultra rare", 5, "color: #996053"],
];

export const lineData = [
  ["x", "dogs", "cats"],
  [0, 0, 0],
  [1, 10, 5],
  [2, 23, 15],
  [3, 17, 9],
  [4, 18, 10],
  [5, 9, 5],
  [6, 11, 3],
  [7, 27, 19],
];

export const lineOptions = {
  hAxis: {
    title: "Time",
  },
  vAxis: {
    title: "Popularity",
  },
  series: {
    1: { curveType: "function" },
  },
};

export function ColumnChartComponent() {
  return (
    <Chart
      chartType="ColumnChart"
      width="100%"
      height="400px"
      data={columnData}
    />
  );
}

export function LineChartComponent() {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={lineData}
      options={lineOptions}
    />
  );
}

function Dashboard() {
  return (
    <Container>
      <div className="dashboard-header">
        <h1>Good evening, fido</h1>
        <h3>Analytics overview</h3>
      </div>
      <div className="dashboard-panel">
        <div className="square">
          Stock total <br /> 85963
        </div>
        <div className="square">
          Input <br /> 7564
        </div>
        <div className="square">
          Output <br /> 13654
        </div>
        <div className="square">
          Stock total <br /> 5
        </div>
      </div>
      <div className="charts-container">
        <div className="chart">
          <ColumnChartComponent />
        </div>
        <div className="chart">
          <LineChartComponent />
        </div>
      </div>
    </Container>
  );
}

export default Dashboard;
