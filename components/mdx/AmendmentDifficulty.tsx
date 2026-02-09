"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ShieldAlert } from 'lucide-react';

export default function AmendmentDifficulty() {
    return (
        <div className="not-prose my-16 font-sans">
            <h3 className="font-serif text-3xl font-bold mb-8 text-center text-gray-900">
                Why is it so hard to change?
            </h3>

            <div className="flex flex-col md:flex-row border-t-2 border-b-2 border-black divide-y md:divide-y-0 md:divide-x-2 divide-black">

                {/* Left: Passing a Law */}
                <div className="flex-1 p-8 md:p-12 flex flex-col justify-center bg-white">
                    <div className="text-center mb-6">
                        <h4 className="font-serif text-2xl font-bold mb-2">Ordinary Law</h4>
                        <p className="text-gray-500 italic">Passes with a simple majority.</p>
                    </div>

                    <div className="mb-2 flex justify-between text-sm font-bold uppercase tracking-wider">
                        <span>Congress</span>
                        <span>50% + 1</span>
                    </div>
                    <div className="w-full bg-gray-200 h-8 border border-black relative">
                        {/* Marker for 50% */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-400 z-10 border-l border-dashed border-gray-600 h-full -mt-1 py-2" />

                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "51%" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="bg-gray-400 h-full border-r-2 border-black relative"
                        >
                            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-bold text-white">51%</span>
                        </motion.div>
                    </div>
                </div>

                {/* Right: Amendment */}
                <div className="flex-[1.4] p-8 md:p-12 bg-gray-50 relative overflow-hidden">
                    {/* Background Texture */}
                    <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                        <ShieldAlert className="w-64 h-64" />
                    </div>

                    <div className="text-center mb-8 relative z-10">
                        <h4 className="font-serif text-2xl font-bold mb-2">Amendment</h4>
                        <p className="text-gray-500 italic">Requires a supermajority consensus.</p>
                    </div>

                    <div className="space-y-8 relative z-10">
                        {/* Step 1: Congress */}
                        <div>
                            <div className="flex justify-between items-end mb-2">
                                <span className="font-bold text-lg">Hurdle 1: Congress</span>
                                <span className="text-2xl font-serif font-bold">67%</span>
                            </div>
                            <div className="w-full bg-white h-8 border border-black relative">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "67%" }}
                                    transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" }}
                                    className="bg-black h-full"
                                />
                            </div>
                            <p className="text-xs text-gray-500 mt-1 text-right">2/3 of both Houses</p>
                        </div>

                        {/* Step 2: States */}
                        <div>
                            <div className="flex justify-between items-end mb-2">
                                <span className="font-bold text-lg">Hurdle 2: The States</span>
                                <span className="text-2xl font-serif font-bold">75%</span>
                            </div>

                            {/* Visual Grid for States */}
                            <div className="grid grid-cols-10 gap-1">
                                {[...Array(50)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.5 + (i * 0.01) }}
                                        className={`
                                            h-4 w-full border border-gray-400
                                            ${i < 38 ? 'bg-black border-black' : 'bg-white'}
                                        `}
                                        title={i < 38 ? "Ratified" : "Not Needed"}
                                    />
                                ))}
                            </div>
                            <p className="text-xs text-gray-500 mt-2 text-right">38 of 50 State Legislatures</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
