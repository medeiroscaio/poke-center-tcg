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
  ["Ultra rare", 5, "color: #996053"]
];

export const pieData = [
  ["Raridade", "Quantidade"],
  ["Comum", 30],
  ["Incomum", 20],
  ["Raro", 15],
  ["Promocional", 10],
  ["Ultra raro", 5],
];

export const pieOptions = {
  title: "Cards in Stock",
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

export function PieChartComponent() {
  return (
    <Chart
      chartType="PieChart"
      data={pieData}
      options={pieOptions}
      width="100%"
      height="400px"
    />
  );
}

function Dashboard() {
  return (
    <Container>
      <h1>Good evening, fido</h1>
      <h3>Analytics overview</h3>
      <div className="container">
        <div className="square">
          Input <br /> 5
        </div>
        <div className="square">Output</div>
        <div className="square">Placeholder</div>
      </div>
      <div className="charts-container">
        <div className="chart">
          <ColumnChartComponent />
        </div>
        <div className="chart">
          <PieChartComponent />
        </div>
      </div>
    </Container>
  );
}

export default Dashboard;
