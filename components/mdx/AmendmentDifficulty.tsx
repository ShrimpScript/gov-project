"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function AmendmentDifficulty() {
    return (
        <div className="my-12 p-8 border border-gray-200 bg-gray-50 font-sans">
            <h3 className="font-serif text-2xl font-bold mb-8 text-center border-b border-gray-300 pb-4">
                Legislative Difficulty: Law vs. Amendment
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Ordinary Law */}
                <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest text-gray-500 mb-4 text-center">Ordinary Law</h4>
                    <div className="relative h-64 bg-white border border-gray-200 w-full rounded-sm overflow-hidden flex flex-col justify-end">
                        {/* Target Line */}
                        <div className="absolute bottom-[51%] w-full border-t border-dashed border-gray-400 z-10">
                            <span className="absolute right-0 -top-6 text-xs font-bold text-gray-400">51% Majority</span>
                        </div>

                        {/* Bar */}
                        <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: "51%" }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="w-full bg-gray-300 absolute bottom-0"
                        >
                            <div className="absolute top-2 left-0 w-full text-center text-xs font-bold text-gray-600">Simple Majority</div>
                        </motion.div>
                    </div>
                    <p className="text-center text-xs text-gray-400 mt-4">Passed by Congress</p>
                </div>

                {/* Amendment */}
                <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest text-black mb-4 text-center">Constitutional Amendment</h4>
                    <div className="relative h-64 bg-white border border-gray-200 w-full rounded-sm overflow-hidden flex flex-col justify-end">
                        {/* Target Line 1 */}
                        <div className="absolute bottom-[66%] w-full border-t border-dashed border-black z-10">
                            <span className="absolute left-0 -top-6 text-xs font-bold">Step 1: 66% (Congress)</span>
                        </div>
                        {/* Target Line 2 */}
                        <div className="absolute bottom-[75%] w-full border-t border-black z-10">
                            <span className="absolute right-0 -top-6 text-xs font-bold">Step 2: 75% (States)</span>
                        </div>

                        {/* Bar */}
                        <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: "75%" }}
                            transition={{ duration: 2.5, ease: "easeInOut" }} // Slower animation
                            viewport={{ once: true }}
                            className="w-full bg-black absolute bottom-0"
                        >
                            <div className="text-white text-center pt-4 font-bold text-lg">High Bar</div>
                        </motion.div>
                    </div>
                    <p className="text-center text-xs text-gray-400 mt-4">Article V Requirements</p>
                </div>
            </div>
        </div>
    );
}
