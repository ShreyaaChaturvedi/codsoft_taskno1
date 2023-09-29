document.addEventListener("DOMContentLoaded", function () {
  const facebookLikesData = [200, 300, 400, 350, 500,250];
  const instagramLikesData = [100, 150, 120, 180, 200,170];
  const linkedinLikesData = [50, 70, 100, 90, 120,290];
  const twitterLikesData = [300, 280, 350, 320, 400,370];
  const chartCanvas = document.getElementById("likesChart");
  const likesChart = new Chart(chartCanvas, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May","June"], 
      datasets: [
        {
          label: "Facebook",
          data: facebookLikesData,
          borderColor: "rgba(66, 103, 178, 1)",
          backgroundColor: "rgba(66, 103, 178, 0.2)",
          fill: true,
        },
        {
          label: "Instagram",
          data: instagramLikesData,
          borderColor: "rgba(247, 119, 55, 1)",
          backgroundColor: "rgba(247, 119, 55, 0.2)",
          fill: true,
        },
        {
          label: "LinkedIn",
          data: linkedinLikesData,
          borderColor: "rgba(14, 118, 168, 1)",
          backgroundColor: "rgba(14, 118, 168, 0.2)",
          fill: true,
        },
        {
          label: "Twitter",
          data: twitterLikesData,
          borderColor: "rgba(29, 161, 242, 1)",
          backgroundColor: "rgba(29, 161, 242, 0.2)",
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
