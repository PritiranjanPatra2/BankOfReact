import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import './MyChart.css';

Chart.register(ArcElement, Tooltip, Legend);

const MyChart = ({ homeValue, totalInterest }) => {
  const principalRatio = homeValue / (homeValue + totalInterest);
  const interestRatio = totalInterest / (homeValue + totalInterest);

  const data = {
    labels: ['Principal', 'Interest'],
    datasets: [
      {
        data: [homeValue, totalInterest],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.raw || 0;
            const ratio = context.dataIndex === 0 ? principalRatio : interestRatio;
            return `${label}: ${value.toFixed(2)} (${(ratio * 100).toFixed(2)}%)`;
          },
        },
      },
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  return (
    <div className="chart-container">
      <div className="chart-wrapper">
        <Pie data={data} options={options} className="pie-chart" />
      </div>
    </div>
  );
};

export default MyChart;
