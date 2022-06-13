import React from "react";
import Highcharts from "highcharts";
import highchartsMore from "highcharts/highcharts-more";
import HighchartsReact from "highcharts-react-official";

highchartsMore(Highcharts);

export default function DonutChart({axis}) {
  const options = {
    chart: {
      type: "pie",
      width: 80,
      height: 80,
      backgroundColor: "rgba(0,0,0,0)"
    },
    title: {
      text: ""
    },
    tooltip: {
      valueSuffix: "%"
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false,
          format: "{point.name}: {y} %"
        },
        showInLegend: true
      }
    },
    series: [
      {
        name: "Percentage",
        colorByPoint: true,
        innerSize: "75%",
        data: [
          {
            name: "Nitrogen",
            y: (Number(axis.x) - 2000) + Math.floor(Math.random() * 50)
          },
          {
            name: "Oxygen",
            y: axis.y + Math.floor(Math.random() * 50)
          }
        ]
      }
    ]
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
