import { ChartOptions } from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
  datasets: [
    {
      label: "Vendas em milhares de reais",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

interface GraphicProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      fill: boolean;
      borderColor: string;
      tension: number;
    }[];
  };
}

const options = {
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 1
      }
    }
  }
};

export const Graphic = ({ data }: GraphicProps) => (
  <>
    <div style={{           backgroundColor: 'white',
          borderRadius: '10px',
          padding: '20px',
          maxWidth: '80%',
          maxHeight: '80%',
          overflowY: 'auto',}}>
      <h2>Vendas por mês</h2>
      <Bar data={data} options={options} />
    </div>
  </>
);


