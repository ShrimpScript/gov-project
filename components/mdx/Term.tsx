"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TermProps {
    label: string;
    definition: string;
}

export default function Term({ label, definition }: TermProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <span className="relative inline-block">
            <button
                onClick={() => setIsOpen(!isOpen)}
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                className="font-bold underline decoration-dotted decoration-gray-400 hover:decoration-black hover:text-black hover:bg-gray-100 rounded-sm px-0.5 transition-all text-gray-800 cursor-help"
                aria-label={`Definition of ${label}`}
            >
                {label}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.span
                        initial={{ opacity: 0, y: 5, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.95 }}
                        transition={{ duration: 0.1 }}
                        className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 bg-black text-white p-3 text-xs rounded-sm shadow-xl pointer-events-none block"
                    >
                        <span className="font-bold border-b border-gray-700 pb-1 mb-1 text-gray-300 uppercase tracking-wider text-[10px] block">
                            Definition
                        </span>
                        {definition}
                        {/* Arrow */}
                        <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black block" />
                    </motion.span>
                )}
            </AnimatePresence>
        </span>
    );
}
