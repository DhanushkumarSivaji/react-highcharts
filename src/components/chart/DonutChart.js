import React from "react";
import Highcharts from "highcharts";
import highchartsMore from "highcharts/highcharts-more";
import HighchartsReact from "highcharts-react-official";

highchartsMore(Highcharts);

export default function DonutChart() {
  const options = {
    chart: {
      type: "pie",
      width: 100,
      height: 100,
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
            y: 78
          },
          {
            name: "Oxygen",
            y: 20.9
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
