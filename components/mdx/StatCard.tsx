import React from 'react';

interface StatCardProps {
    label: string;
    value: string;
}

export default function StatCard({ label, value }: StatCardProps) {
    return (
        <div className="my-8 p-6 border-l-4 border-black bg-gray-50">
            <div className="text-4xl font-bold font-serif mb-2">{value}</div>
            <div className="text-sm font-sans uppercase tracking-widest text-gray-500">{label}</div>
        </div>
    );
}
