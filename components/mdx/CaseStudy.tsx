"use client";

import React from 'react';

interface CaseStudyProps {
    title: string;
    category: string;
    children: React.ReactNode;
}

export default function CaseStudy({ title, category, children }: CaseStudyProps) {
    return (
        <div className="my-10 bg-gray-50 border-l-4 border-black p-6 pl-8">
            <div className="flex items-center gap-3 mb-4">
                <span className="bg-black text-white text-xs font-bold px-2 py-1 uppercase tracking-widest rounded-sm">
                    Case Study
                </span>
                <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">
                    {category}
                </span>
            </div>
            <h4 className="font-serif text-xl font-bold mb-3 text-gray-900">{title}</h4>
            <div className="prose prose-sm prose-gray max-w-none">
                {children}
            </div>
        </div>
    );
}
