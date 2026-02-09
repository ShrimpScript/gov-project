"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const annotations = {
    "form a more perfect Union": "Transitioning from the weak Articles of Confederation to a cohesive national government.",
    "establish Justice": "Creating a federal court system and ensuring the rule of law applies to all.",
    "insure domestic Tranquility": "Maintaining peace within borders (e.g., stopping rebellions like Shays' Rebellion, National Guard, FBI).",
    "provide for the common defence": "Protecting the nation from foreign enemies (Army, Navy).",
    "promote the general Welfare": "Supporting the well-being of citizens (e.g., infrastructure, public health).",
    "secure the Blessings of Liberty": "Protecting individual rights for current and future generations."
};

export default function PreambleAnnotator() {
    const [activePhrase, setActivePhrase] = useState<string | null>(null);

    const handleMouseEnter = (phrase: string) => setActivePhrase(phrase);
    const handleMouseLeave = () => setActivePhrase(null);

    return (
        <div className="my-16 relative font-serif text-center max-w-3xl mx-auto">
            <div className="text-2xl md:text-4xl leading-relaxed text-gray-800">
                "We the People of the United States, in Order to{" "}
                {Object.keys(annotations).map((phrase, index) => (
                    <span
                        key={phrase}
                        className="relative inline-block cursor-help decoration-gray-300 underline underline-offset-4 decoration-2 hover:decoration-black hover:text-black transition-all"
                        onMouseEnter={() => handleMouseEnter(phrase)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {phrase}
                        {index < Object.keys(annotations).length - 1 ? ", " : " "}
                    </span>
                ))}
                to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America."
            </div>

            <div className="h-24 mt-8 flex items-center justify-center">
                <AnimatePresence mode="wait">
                    {activePhrase && (
                        <motion.div
                            key={activePhrase}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="bg-black text-white px-6 py-4 rounded-sm shadow-xl max-w-lg text-sm font-sans"
                        >
                            <span className="font-bold block mb-1 uppercase tracking-wider text-xs text-gray-400">{activePhrase}</span>
                            {annotations[activePhrase as keyof typeof annotations]}
                        </motion.div>
                    )}
                    {!activePhrase && (
                        <span className="text-gray-400 text-sm font-sans italic animate-pulse">Hover over the highlighted phrases to analyze</span>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
