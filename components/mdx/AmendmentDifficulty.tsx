"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Map } from 'lucide-react';

export default function AmendmentDifficulty() {
    return (
        <div className="not-prose my-16 font-sans border border-gray-200 bg-white p-8 md:p-12 shadow-sm">
            <h3 className="font-serif text-3xl font-bold mb-10 text-center border-b border-gray-200 pb-6 text-gray-900">
                Why is it so hard to change?
            </h3>

            <div className="flex flex-col md:flex-row gap-12 items-stretch">

                {/* Left: Passing a Law */}
                <div className="flex-1 bg-gray-50 p-8 rounded-sm border border-gray-200 flex flex-col items-center text-center">
                    <div className="bg-white p-4 rounded-full mb-6 border border-gray-200 shadow-sm">
                        <Users className="w-8 h-8 text-gray-700" />
                    </div>
                    <h4 className="font-bold text-xl mb-3 text-gray-900">Ordinary Law</h4>
                    <p className="text-base text-gray-600 mb-8 leading-relaxed">
                        Requires a simple majority<br />in Congress.
                    </p>

                    <div className="w-full bg-gray-200 h-6 rounded-full overflow-hidden relative border border-gray-300">
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-400 z-10" />
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "51%" }}
                            transition={{ duration: 0.8 }}
                            className="bg-gray-800 h-full shadow-[0_0_10px_rgba(0,0,0,0.2)]"
                        />
                    </div>
                    <div className="mt-4 text-sm font-bold text-gray-900">51% Vote Needed</div>
                </div>

                {/* Center: Divider */}
                <div className="hidden md:flex flex-col items-center justify-center text-gray-300">
                    <div className="w-px h-full bg-gray-200" />
                </div>

                {/* Right: Amendment */}
                <div className="flex-[1.5] bg-black text-white p-8 rounded-sm flex flex-col relative overflow-hidden shadow-lg ring-1 ring-gray-900">
                    <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
                        <Map className="w-48 h-48 text-gray-500" />
                    </div>

                    <div className="relative z-10">
                        <h4 className="font-bold text-2xl mb-8 text-center md:text-left text-white border-b border-gray-800 pb-4">
                            Constitutional Amendment
                        </h4>

                        {/* Step 1 */}
                        <div className="mb-10">
                            <div className="flex items-center justify-between mb-3 text-base">
                                <span className="text-gray-300 font-medium">Hurdle 1: Congress</span>
                                <span className="font-bold text-white text-lg">2/3 Vote (67%)</span>
                            </div>
                            <div className="w-full bg-gray-900 h-4 rounded-full overflow-hidden border border-gray-800">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "67%" }}
                                    transition={{ duration: 1.2, delay: 0.2 }}
                                    className="bg-white h-full shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                                />
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div>
                            <div className="flex items-center justify-between mb-4 text-base">
                                <span className="text-gray-300 font-medium">Hurdle 2: The States</span>
                                <span className="font-bold text-white text-lg">3/4 States (75%)</span>
                            </div>
                            <div className="grid grid-cols-10 gap-1.5 opacity-90">
                                {[...Array(50)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ backgroundColor: "#1f2937" }} // gray-800
                                        whileInView={{ backgroundColor: i < 38 ? "#ffffff" : "#1f2937" }} // 38 is 3/4 of 50
                                        transition={{ delay: 0.5 + (i * 0.015) }}
                                        className="h-3 w-full rounded-[1px] transition-colors duration-500"
                                    />
                                ))}
                            </div>
                            <div className="flex justify-between items-center mt-3">
                                <p className="text-xs text-gray-500 uppercase tracking-wider">State Ratification Map</p>
                                <p className="text-sm text-gray-300 font-medium">38 of 50 States</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
