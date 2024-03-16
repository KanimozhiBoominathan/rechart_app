// src/components/PieChart.js

import React from 'react';
import { PieChart, Pie, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const PieChartComponent = () => {
  return (
    <PieChart width={400} height={300}>
      <Pie
        data={data}
        cx={200}
        cy={150}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        label
      />
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default PieChartComponent;
