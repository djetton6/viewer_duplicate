export default function(historical) {
  return {
    title: {
      text: ""
    },

    subtitle: {
      style: {
        color: "black"
      }
    },
    tooltip: {
      borderWidth: 0
    },
    labels: {
      style: {
        color: "#6e6e70"
      }
    },
    legend: {
      backgroundColor: "#E0E0E8",
      itemStyle: {
        fontWeight: "bold",
        fontSize: "13px"
      }
    },
    xAxis: { type: "datetime" },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle"
    },
    yAxis: {
      title: {
        text: "Price"
      }
    },
    plotOptions: {
      series: {
        shadow: true
      },
      candlestick: {
        lineColor: "#404048"
      },
      map: {
        shadow: false
      }
    },
    // Highstock specific
    navigator: {
      xAxis: {
        gridLineColor: "#D0D0D8"
      }
    },
    rangeSelector: {
      buttonTheme: {
        fill: "white",
        stroke: "#C0C0C8",
        "stroke-width": 1,
        states: {
          select: {
            fill: "#D0D0D8"
          }
        }
      }
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2010
      }
    },

    scrollbar: {
      trackBorderColor: "#C0C0C8"
    },

    series: historical,

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom"
            }
          }
        }
      ]
    }
  };
}
