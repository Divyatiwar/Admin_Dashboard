import { Line } from 'react-chartjs-2';

export default function AnalyticsChart({ data }) {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Engagement',
        data: data.engagement,
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
}
