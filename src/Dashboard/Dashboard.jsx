import "./Dashboard.css";
import Container from "../components/Container/Container.jsx";
import React from "react";
import { Chart } from "react-google-charts";

export const columnData = [
  ["Rarity", "Outputs", { role: "style" }],
  ["Commom", 30, "#b87333"],
  ["Incommom", 20, "silver"],
  ["Rare", 15, "gold"],
  ["Promocional", 10, "#e5e4e2"],
  ["Ultra rare", 7, "#996053"],
];

export const lineData = [
  ["x", "Input", "Output"],
  [0, 0, 0],
  [1, 10, 5],
  [2, 23, 15],
  [3, 17, 12],
  [4, 18, 14],
  [5, 9, 5],
  [6, 11, 7],
  [7, 39, 20],
  [8, 36, 25],
  [9, 37, 22],
  [10, 25, 20],
  [11, 37, 30],
  [12, 22, 20],
];

export const lineOptions = {
  hAxis: {
    // Configurações de texto do eixo X
    title: "Time",
    textStyle: { color: "#000000" },
    titleTextStyle: { color: "#000000" },
  },
  vAxis: {
    // Configurações de texto do eixo Y
    title: "Quantity",
    textStyle: { color: "#000000" },
    titleTextStyle: { color: "#000000" },
  },
  titleTextStyle: { color: "#000000" }, // Configurações de texto do chart V
  legend: { textStyle: { color: "#000000" } },
};

export const columnOptions = {
  titleTextStyle: { color: "#000000" }, // Configurações de texto do chart V
  legend: { textStyle: { color: "#000000" } },
  hAxis: {
    // Configurações de texto do eixo X
    textStyle: { color: "#000000" },
    titleTextStyle: { color: "#000000" },
  },
  vAxis: {
    // Configurações de texto do eixo Y
    textStyle: { color: "#000000" },
    titleTextStyle: { color: "#000000" },
  },
};

export function ColumnChartComponent() {
  return (
    <Chart
      chartType="ColumnChart"
      width="100%"
      height="400px"
      data={columnData}
      options={columnOptions}
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
        <h1>Dashboard</h1>
        <h3>Analytics overview</h3>
      </div>
      <div className="dashboard-panel">
        <div className="square">
          <span className="number">85963</span>
          <span className="text">Stock total</span>
        </div>
        <div className="square">
          <span className="number">7564</span>
          <span className="text">Input</span>
        </div>
        <div className="square">
          <span className="number">13654</span>
          <span className="text">Output</span>
        </div>
        <div className="square">
          <span className="number">5</span>
          <span className="text">Stock total</span>
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
