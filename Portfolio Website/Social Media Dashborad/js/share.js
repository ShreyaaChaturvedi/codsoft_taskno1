document.addEventListener("DOMContentLoaded", function () {
    const facebookSharesData = [550,650,600,450,550,680];
    const instagramSharesData = [340,650,450,500,700,640];
    const linkedinSharesData = [ 200,300,240,400,340,380];
    const twitterSharesData = [150,280,300,170,200,240];
    const chartCanvas = document.getElementById("sharesChart");
    const sharesChart = new Chart(chartCanvas, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May","June"], 
        datasets: [
          {
            label: "Facebook",
            data: facebookSharesData,
            borderColor: "rgba(66, 103, 178, 1)",
            backgroundColor: "rgba(66, 103, 178, 0.2)",
            fill: true,
          },
          {
            label: "Instagram",
            data: instagramSharesData,
            borderColor: "rgba(247, 119, 55, 1)",
            backgroundColor: "rgba(247, 119, 55, 0.2)",
            fill: true,
          },
          {
            label: "LinkedIn",
            data: linkedinSharesData,
            borderColor: "rgba(14, 118, 168, 1)",
            backgroundColor: "rgba(14, 118, 168, 0.2)",
            fill: true,
          },
          {
            label: "Twitter",
            data: twitterSharesData,
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
  