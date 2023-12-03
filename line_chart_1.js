const ctx2 = document.querySelector(".line-chart-1").getContext("2d");

const line_chart_1_data = {
  labels: [null, "16/04", "17/04", "18/04", "19/04", "20/04", "21/04", "22/04"],
  datasets: [
    {
      label: "Spike Admin",
      data: [100, 300, 2000, 1800, 2000, 3800, 2500, 4200, 2000],
      pointRadius: 0,
      borderColor: "#49BEFF",
      backgroundColor: "#49BEFF",
    },
    {
      label: "Modernize ",
      data: [100, 300, 1000, 800, 1100, 600, 2100, 600, 1900, 600, 2200],
      pointRadius: 0,
      borderColor: "#5D87FF",
      backgroundColor: "#5D87FF",
    },
  ],
};

const line_chart_1 = new Chart(ctx2, {
  maintainAspectRatio: false,
  type: "line",
  data: line_chart_1_data,
  options: {
    tension: 0.4,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: " #7C8FAC",
          font: "Plus Jakarta Sans",
        },
      },

      y: {
        ticks: {
          color: " #7C8FAC",
          font: "Plus Jakarta Sans",
          callback: function (value, index) {
            if (this.getLabelForValue(index) == 0) {
              return "0";
            } else if (this.getLabelForValue(index) == 2) {
              return "1k";
            } else if (this.getLabelForValue(index) == 4) {
              return "2k";
            } else if (this.getLabelForValue(index) == 6) {
              return "3k";
            } else if (this.getLabelForValue(index) == 8) {
              return "4k";
            }
          },
        },
        startAtZero: false,
      },
    },
  },
});
