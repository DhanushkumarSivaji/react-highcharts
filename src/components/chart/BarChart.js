import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HC_rounded from "highcharts-rounded-corners";
HC_rounded(Highcharts);

export default function BarChart() {
  const options = {
    title: {
      text: "Highcharts rounded corners plugin"
    },

    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
    },
    yAxis: {
      opposite: true,
      title: {
        text: null
      }
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      bar: {
        stacking: "normal",
        pointPadding: 0,
        groupPadding: 0.2,
        dataLabels: {
          enabled: true,
          color: "black",
          align: "right",
          format: "{y} d",
          inside: false,
          style: {
            fontWeight: "bold"
          },
          verticalAlign: "middle"
        }
      },
      series: {
        borderRadiusTopLeft: "20%",
        borderRadiusTopRight: "20%"
      }
    },

    series: [
      {
        data: [129.2, 2.9, 176.0, 144.0, 106.4, 71.5],
        type: "bar",
        colorByPoint: true
      }
    ]
  };

  return (
    <div className="barChart">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
