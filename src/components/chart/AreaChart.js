import React, { useState, useCallback } from "react";
import Highcharts, { Chart as HighchartsChart } from "highcharts";
import highchartsMore from "highcharts/highcharts-more";
import HighchartsReact from "highcharts-react-official";
import { Tooltip } from "./tooltip";
import BarChart from "./BarChart";
import Donut from "./DonutChart";

highchartsMore(Highcharts);

const options = {
  title: {
    text: "Combination chart"
  },
  xAxis: {
    categories: ["2022", "2023", "2024", "2025", "2026"]
  },
  plotOptions: {
    series: {
      marker: {
        symbol: 'circle',
        radius: 2.5,
        fillColor: 'black',
        // lineColor: 'white',
        // lineWidth: 8
      },
      states: {
        hover: {
            enabled: true,
            halo: {
                size: 0
            }
        }
    }
    }
  },
  tooltip: {
    style: {
      pointerEvents: "auto",
      followPointer: true
    }
  },
  legend: {
    enabled: false
  },
  credits: {
    enabled: false
},
  series: [
    {
      index: 1,
      type: "arearange",
      enableMouseTracking: false,
      data: [
        ["2022", 0, 3],
        ["2023", 0, 2.67],
        ["2024", 0, 3],
        ["2025", 0, 6.33],
        ["2026", 0, 3.33]
      ],
      marker: {
        enabled: false,
     }
    },
    {
      index: 3,
      type: "line",
      data: [3, 2.67, 3, 6.33, 3.33],
    },
    {
      index: 2,
      type: "arearange",
      enableMouseTracking: false,
      data: [
        ["2022", 3, 8],
        ["2023", 2.67, 8],
        ["2024", 3, 8],
        ["2025", 6.33, 8],
        ["2026", 3.33, 8]
      ],
      marker: {
        enabled: false,
     }
    }
  ]
};

export const ChartComponent = () => {
  const [chart, setChart] = useState(null);
  const callback = useCallback((HighchartsChart) => {
    setChart(HighchartsChart);
  }, []);

  return (
    <>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        callback={callback}
      />

     { chart && <Tooltip chart={chart}>
        {(formatterContext) => {
          const { x, y } = formatterContext;
          return (
            <>
              <div>
                <Donut axis={{ x, y }} />
              </div>
            </>
          );
        }}
      </Tooltip>}
      <BarChart />
    </>
  );
};

export default ChartComponent;
