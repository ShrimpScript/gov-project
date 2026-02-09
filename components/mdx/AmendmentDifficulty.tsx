"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function AmendmentDifficulty() {
    return (
        <div className="not-prose my-16 font-sans bg-white border border-gray-200 p-8 md:p-12">
            <h3 className="font-serif text-3xl font-bold mb-2 text-center text-gray-900">
                The Hurdle is Higher
            </h3>
            <p className="text-center text-gray-500 italic mb-12 max-w-lg mx-auto">
                Comparing the voting threshold needed to pass a regular law vs. changing the Constitution.
            </p>

            <div className="flex justify-center items-end h-64 md:h-80 gap-8 md:gap-16 border-b-2 border-black pb-4 relative">

                {/* Y-Axis Lines (implied visual guide) */}
                <div className="absolute inset-0 pointer-events-none flex flex-col justify-end">
                    <div className="border-t border-dashed border-gray-200 h-[25%] w-full" /> {/* 25% */}
                    <div className="border-t border-dashed border-gray-200 h-[25%] w-full" /> {/* 50% */}
                    <div className="border-t border-dashed border-gray-200 h-[25%] w-full" /> {/* 75% */}
                </div>

                {/* Ordinary Law Bar */}
                <div className="flex flex-col items-center justify-end h-full relative z-10 group min-w-[100px]">
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "51%" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-16 md:w-24 bg-gray-300 rounded-t-sm relative"
                    >
                        <div className="absolute top-2 w-full text-center text-xs font-bold text-gray-600">51%</div>
                    </motion.div>

                    {/* Label Area (Fixed Height) */}
                    <div className="absolute top-[105%] left-0 right-0 text-center">
                        <h4 className="font-bold text-sm uppercase tracking-wider">Ordinary Law</h4>
                        <p className="text-xs text-gray-500 mt-1">House + Senate</p>
                    </div>
                </div>

                {/* Amendment Bar Group */}
                <div className="flex items-end gap-1 h-full relative z-10 min-w-[180px]">

                    {/* Congress Step */}
                    <div className="flex flex-col items-center justify-end h-full group">
                        <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: "67%" }}
                            transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" }}
                            className="w-16 md:w-24 bg-gray-800 rounded-t-sm relative"
                        >
                            <div className="absolute top-2 w-full text-center text-xs font-bold text-white">67%</div>
                        </motion.div>
                    </div>

                    {/* States Step */}
                    <div className="flex flex-col items-center justify-end h-full group">
                        <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: "75%" }}
                            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                            className="w-16 md:w-24 bg-black rounded-t-sm relative"
                        >
                            <div className="absolute top-2 w-full text-center text-xs font-bold text-white">75%</div>
                        </motion.div>
                    </div>

                    {/* Shared Label */}
                    <div className="absolute top-[105%] left-0 right-0 text-center">
                        <h4 className="font-bold text-sm uppercase tracking-wider">Amendment</h4>
                        <p className="text-xs text-gray-500 mt-1">2/3 Congress &rarr; 3/4 States</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
