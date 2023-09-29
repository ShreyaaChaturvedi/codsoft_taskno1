document.addEventListener("DOMContentLoaded", function () {
    const facebookCommentsData = [30,25,40,35,50,45];
    const instagramCommentsData = [50,45,65,47,62,55];
    const linkedinCommentsData = [20,25,32,28,35,38];
    const twitterCommentsData = [45,38,49,51,55,57];
    const chartCanvas = document.getElementById("commentsChart");
    const commentsChart = new Chart(chartCanvas, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May","June"],
        datasets: [
          {
            label: "Facebook",
            data: facebookCommentsData,
            borderColor: "rgba(66, 103, 178, 1)",
            backgroundColor: "rgba(66, 103, 178, 0.2)",
            fill: true,
          },
          {
            label: "Instagram",
            data: instagramCommentsData,
            borderColor: "rgba(247, 119, 55, 1)",
            backgroundColor: "rgba(247, 119, 55, 0.2)",
            fill: true,
          },
          {
            label: "LinkedIn",
            data: linkedinCommentsData,
            borderColor: "rgba(14, 118, 168, 1)",
            backgroundColor: "rgba(14, 118, 168, 0.2)",
            fill: true,
          },
          {
            label: "Twitter",
            data: twitterCommentsData,
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
  