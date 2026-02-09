"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Building, Gavel } from 'lucide-react';

export default function ConstitutionStructure() {
    const articles = [
        {
            id: 'I',
            title: 'Legislative',
            icon: <Building className="w-8 h-8 mb-2 text-gray-700" />,
            desc: 'Makes Laws',
            sub: 'Congress (House + Senate)'
        },
        {
            id: 'II',
            title: 'Executive',
            icon: <div className="font-serif font-black text-4xl mb-1">II</div>,
            desc: 'Enforces Laws',
            sub: 'President & Agencies'
        },
        {
            id: 'III',
            title: 'Judicial',
            icon: <Gavel className="w-8 h-8 mb-2 text-gray-700" />,
            desc: 'Interprets Laws',
            sub: 'Supreme Court'
        }
    ];

    return (
        <div className="my-12 font-sans border border-black p-8 bg-white">
            <h3 className="font-serif text-2xl font-bold mb-8 text-center uppercase tracking-widest border-b border-black pb-4">
                The Blueprint (Articles I-III)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {articles.map((art, i) => (
                    <motion.div
                        key={art.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="flex flex-col items-center text-center p-6 border border-gray-200 hover:border-black transition-colors"
                    >
                        {art.id === 'II' ? <span className="mb-2 font-serif font-bold text-3xl">II</span> : art.icon}
                        <div className="font-bold text-xl mb-1">Article {art.id}</div>
                        <div className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">{art.title}</div>
                        <p className="text-gray-800 font-medium">{art.desc}</p>
                        <p className="text-xs text-gray-400 mt-2">{art.sub}</p>
                    </motion.div>
                ))}
            </div>
            <div className="mt-8 text-center text-sm text-gray-500 italic">
                "Ambition must be made to counteract ambition." — Federalist 51
            </div>
        </div>
    );
}
