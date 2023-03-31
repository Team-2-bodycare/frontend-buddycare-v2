import ApexCharts from "apexcharts";

export function ProgressGraphic() {
  var options = {
    chart: {
      height: 350,
      type: "radialBar",
    },
    series: [35],
    labels: ["Progresso"],
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);

  chart.render();

  return <div id="chart" style={{ display: "flex", height: "50px", background: "rgba(0, 0, 0, 0.3)", borderRadius: "10px", padding: "10px" }}></div>;
}
