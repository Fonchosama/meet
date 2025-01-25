import React, { useState, useEffect } from 'react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
} from 'recharts';

const EventGenresChart = ({ events }) => {
  const data = [
    { name: 'Rock', value: 400 },
    { name: 'Pop', value: 300 },
    { name: 'Jazz', value: 300 },
    { name: 'Hip-Hop', value: 200 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <ResponsiveContainer width="99%" height={400}>
      <PieChart>
        <Pie dataKey="value" data={data} fill="#8884d8" label />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenresChart;
