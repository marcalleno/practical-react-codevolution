import React from "react";
import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";
import LineChart from "./LineChart";

function Chart() {
  return (
    <div className="App-chart">
      <h2>Chart Component</h2>
      <div className="chart">
        <LineChart />
        <BarChart />
        <DoughnutChart />
      </div>
    </div>
  );
}

export default Chart;
