// import AreaChart from "./components/chart/AreaChart";
import PieChart from "./components/chart/PieChart";
import BarChart from "./components/chart/BarChart";
import "./App.css"

function App() {
  return (
    <div className="container">
      <div className="chart-container">
        <div className="pie-chart">
          <PieChart />
        </div>
        <div className="area-chart">
          <BarChart />
        </div>
      </div>
    </div>
  );
}

export default App;
