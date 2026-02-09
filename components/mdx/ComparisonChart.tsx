"use client";

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ComparisonChartProps {
    data?: any[];
}

const defaultData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 500 },
    { name: 'Group D', value: 200 },
];

export default function ComparisonChart({ data = defaultData }: ComparisonChartProps) {
    return (
        <div className="w-full h-[400px] my-10 bg-white border border-gray-100 p-4">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                    <XAxis dataKey="name" stroke="#000" tick={{ fill: '#666', fontSize: 12 }} />
                    <YAxis stroke="#000" tick={{ fill: '#666', fontSize: 12 }} />
                    <Tooltip
                        contentStyle={{ backgroundColor: '#fff', border: '1px solid #000' }}
                        itemStyle={{ color: '#000' }}
                    />
                    <Legend wrapperStyle={{ paddingTop: '20px' }} />
                    <Bar dataKey="value" fill="#000" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
