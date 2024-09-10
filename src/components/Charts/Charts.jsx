import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import "./Charts.css";

const colors = ["#B0B0B0", "#2ECC71", "#3498DB", "#9B59B6", "#F1C40F"];
const borderColors = ["#7F7F7F", "#27AE60", "#2980B9", "#8E44AD", "#D4AC0D"];

const seriesData = [30, 20, 15, 10, 7].map((value, index) => ({
  value,
  itemStyle: {
    color: colors[index],
    borderColor: borderColors[index],
    borderWidth: 2,
    borderRadius: [5, 5, 0, 0],
  },
}));

const columnData = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "none",
    },
    backgroundColor: "rgba(50, 50, 50, 0.8)",
    borderColor: "#777",
    borderWidth: 1,
    textStyle: {
      color: "#fff",
    },
    formatter: (params) => {
      const category = params[0].name;
      const value = params[0].value;
      return `<strong>${category}</strong>: ${value} itens`;
    },
  },
  xAxis: {
    type: "category",
    data: ["Comum", "Incomum", "Rara", "Épica", "Lendária"],
    axisLabel: {
      fontSize: 12,
    },
  },
  yAxis: {
    type: "value",
    axisLabel: {
      fontSize: 12,
    },
    splitLine: {
      lineStyle: {
        type: "dashed",
        color: "#ddd",
      },
    },
  },
  series: [
    {
      data: seriesData,
      type: "bar",
      label: {
        show: true,
        position: "top",
        fontSize: 14,
        color: "#333",
      },
      animationDuration: 1500,
      animationEasing: "cubicOut",
    },
  ],
};

const lineData = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
    },
    backgroundColor: "rgba(50, 50, 50, 0.8)",
    borderColor: "#777",
    borderWidth: 1,
    textStyle: {
      color: "#fff",
    },
  },
  xAxis: {
    type: "category",
    data: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: "Input",
      data: [0, 10, 23, 17, 18, 9, 11, 39, 36, 37, 25, 37, 22],
      type: "line",
      smooth: false,
      symbol: "circle",
      symbolSize: 8,
      itemStyle: {
        color: "#3248DB",
      },
    },
    {
      name: "Output",
      data: [0, 5, 15, 12, 14, 5, 7, 20, 25, 22, 20, 30, 20],
      type: "line",
      smooth: false,
      symbol: "circle",
      symbolSize: 8,
      itemStyle: {
        color: "#9B59B6",
      },
    },
  ],
};

function useECharts(option) {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = echarts.init(chartRef.current);

    chartInstance.setOption(option);

    return () => {
      chartInstance.dispose();
    };
  }, [option]);

  return chartRef;
}

export function ColumnChartComponent() {
  const chartRef = useECharts(columnData);

  return <div ref={chartRef} style={{ height: "400px", width: "100%" }} />;
}

export function LineChartComponent() {
  const chartRef = useECharts(lineData);

  return <div ref={chartRef} style={{ height: "400px", width: "100%" }} />;
}
