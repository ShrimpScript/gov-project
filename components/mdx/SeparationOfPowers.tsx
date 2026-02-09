"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gavel, Scale, FileText, ArrowRight } from 'lucide-react';

const branches = [
    {
        id: 'legislative',
        name: 'Legislative',
        icon: FileText,
        color: 'bg-blue-600',
        description: 'Makes Laws (Congress)',
        checks: [
            { target: 'Executive', action: 'Impeach President, Override Vetoes' },
            { target: 'Judicial', action: 'Approve Judges, Create Lower Courts' },
        ]
    },
    {
        id: 'executive',
        name: 'Executive',
        icon: Gavel,
        color: 'bg-red-600',
        description: 'Enforces Laws (President)',
        checks: [
            { target: 'Legislative', action: 'Veto Laws' },
            { target: 'Judicial', action: 'Appoint Judges' },
        ]
    },
    {
        id: 'judicial',
        name: 'Judicial',
        icon: Scale,
        color: 'bg-green-600',
        description: 'Interprets Laws (Supreme Court)',
        checks: [
            { target: 'Legislative', action: 'Declare Laws Unconstitutional' },
            { target: 'Executive', action: 'Declare Acts Unconstitutional' },
        ]
    }
];

export default function SeparationOfPowers() {
    const [activeBranch, setActiveBranch] = useState<string | null>(null);

    return (
        <div className="my-12 font-sans not-prose">
            <h3 className="font-serif text-2xl font-bold mb-8 text-center">The System of Checks & Balances</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {branches.map((branch) => (
                    <motion.div
                        key={branch.id}
                        layout
                        onClick={() => setActiveBranch(activeBranch === branch.id ? null : branch.id)}
                        className={`
              relative p-6 rounded-sm border cursor-pointer transition-all duration-300
              ${activeBranch && activeBranch !== branch.id ? 'opacity-40 grayscale' : 'opacity-100 grayscale-0'}
              ${activeBranch === branch.id ? 'ring-2 ring-black bg-gray-50' : 'bg-white hover:bg-gray-50 border-gray-200'}
            `}
                    >
                        <div className={`w-12 h-12 rounded-full ${branch.color} text-white flex items-center justify-center mb-4`}>
                            <branch.icon className="w-6 h-6" />
                        </div>

                        <h4 className="font-bold text-lg mb-1">{branch.name}</h4>
                        <p className="text-sm text-gray-500 mb-4">{branch.description}</p>

                        {activeBranch === branch.id && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-4 pt-4 border-t border-gray-200"
                            >
                                <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Checks on others:</h5>
                                <ul className="space-y-2">
                                    {branch.checks.map((check, i) => (
                                        <li key={i} className="text-sm flex items-start gap-2">
                                            <ArrowRight className="w-4 h-4 mt-0.5 text-black shrink-0" />
                                            <span>
                                                <span className="font-bold">{check.target}:</span> {check.action}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}

                        {!activeBranch && (
                            <div className="absolute bottom-4 right-4 text-xs font-bold text-gray-300 uppercase">Click to Expand</div>
                        )}
                    </motion.div>
                ))}
            </div>
            <p className="text-center text-xs text-gray-400 mt-6 italic">
                Click on a branch to see how it checks the power of the others.
            </p>
        </div>
    );
}
