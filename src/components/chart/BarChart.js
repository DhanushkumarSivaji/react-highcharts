import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HC_rounded from "highcharts-rounded-corners";
HC_rounded(Highcharts);

export default function BarChart() {
  const options = {
    title: {
      text: ""
    },

    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      labels: {
        enabled: false
    }
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
    credits: {
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
          // format: "{x} {y} d",
          inside: false,
          useHTML: true,
          formatter: function () {
            return this.x+'<br/>'+this.y;
        },        
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
        data: [129.2, 1.9, 176.0, 144.0, 106.4, 71.5],
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
