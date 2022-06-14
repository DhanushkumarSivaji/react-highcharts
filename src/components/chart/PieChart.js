import React, { useState, useCallback, Fragment } from "react";
import Highcharts, { Chart as HighchartsChart } from "highcharts";
import highchartsMore from "highcharts/highcharts-more";
import HighchartsReact from "highcharts-react-official";

highchartsMore(Highcharts);

export const ChartComponent = () => {
  const [chart, setChart] = useState(null);
  const callback = useCallback((HighchartsChart) => {
    setChart(HighchartsChart);
  }, []);

  const options = {
    title: {
      text: "",
    },
    subtitle: {
      text: "",
    },
    legend: {
      enabled: false,
    },
    credits: {
        enabled: false
    },
    yAxis: {
        title: {
          text: null
        }
      },
    plotOptions: {
      series: {
        marker: {
          symbol: "circle",
          radius: 2.5,
          fillColor: "black",
          // lineColor: 'white',
          // lineWidth: 8
        },
        states: {
          hover: {
            enabled: true,
            halo: {
              size: 0,
            },
          },
        },
        point: {
          events: {
            mouseOver: function (event) {
              if (event) {
                if (chart.get("pie-chart")) {
                  chart.get("pie-chart").remove();
                }
                chart.addSeries({
                  type: "pie",
                  id: "pie-chart",
                  center: [event.target.plotX - 20, event.target.plotY - 20],
                  innerSize: "80%",
                  size: "10%",

                  dataLabels: {
                    enabled: true,
                    connectorWidth: 0,
                    connectorPadding: -10,
                    distance: 15,
                    useHTML: true,
                    formatter: function () {
                      return this.key + "<br/>" + this.y + "%";
                    },
                  },
                  data: [
                    { name: "Fixed income", y: event.target.x },
                    { name: "Equity", y: event.target.y },
                  ],
                });
              }
            },
          },
        },
        events: {
          mouseOut: function () {
            if (chart.get("pie-chart")) {
              chart.get("pie-chart").remove();
            }
          },
        },
      },
    },

    tooltip: {
      enabled: false,
    },

    series: [
      {
        type: "arearange",
        name: "Fixed Income",
        enableMouseTracking: false,
        marker: {
          enabled: false,
        },
        data: [
          ["Apples", 0, 3],
          ["Oranges", 0, 2.67],
          ["Pears", 0, 3],
          ["Bananas", 0, 6.33],
          ["Plums", 0, 3.33],
        ],
      },
      {
        type: "arearange",
        name: "Equity",
        marker: {
          enabled: false,
        },
        enableMouseTracking: false,
        data: [
          ["Apples", 3, 8],
          ["Oranges", 2.67, 8],
          ["Pears", 3, 8],
          ["Bananas", 6.33, 8],
          ["Plums", 3.33, 8],
        ],
      },
      {
        stickyTracking: false,
        color: "#000",
        type: "line",
        data: [3, 2.67, 3, 6.33, 3.33],
      },
    ],
  };

  return (
    <Fragment>
      {options && (
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          callback={callback}
        />
      )}
    </Fragment>
  );
};

export default ChartComponent;
