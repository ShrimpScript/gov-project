"use client";

import React from 'react';
import { Crown, User, X, Check } from 'lucide-react';

export default function KingVsPresident() {
    return (
        <div className="my-12 font-sans border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">

                {/* The Fear: Monarchy */}
                <div className="p-8 bg-gray-50">
                    <div className="flex items-center gap-3 mb-6">
                        <Crown className="w-6 h-6 text-gray-800" />
                        <h3 className="font-bold text-lg uppercase tracking-wide">The Fear (King)</h3>
                    </div>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <span className="text-red-900 font-bold">✕</span>
                            <div>
                                <span className="font-bold text-gray-900 block">Absolute Veto</span>
                                <span className="text-sm text-gray-500">Could reject laws without recourse.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-red-900 font-bold">✕</span>
                            <div>
                                <span className="font-bold text-gray-900 block">Dissolve Parliament</span>
                                <span className="text-sm text-gray-500">Could fire the legislature at will.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-red-900 font-bold">✕</span>
                            <div>
                                <span className="font-bold text-gray-900 block">Life Term</span>
                                <span className="text-sm text-gray-500">Ruled until death.</span>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* The Reality: President */}
                <div className="p-8 bg-white">
                    <div className="flex items-center gap-3 mb-6">
                        <User className="w-6 h-6 text-black" />
                        <h3 className="font-bold text-lg uppercase tracking-wide">The Compromise (President)</h3>
                    </div>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-gray-900" />
                            <div>
                                <span className="font-bold text-gray-900 block">Veto Override</span>
                                <span className="text-sm text-gray-500">Congress can bypass with 2/3 vote.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-gray-900" />
                            <div>
                                <span className="font-bold text-gray-900 block">Impeachment</span>
                                <span className="text-sm text-gray-500">Can be removed for crimes.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-gray-900" />
                            <div>
                                <span className="font-bold text-gray-900 block">4-Year Term</span>
                                <span className="text-sm text-gray-500">Must seek re-election.</span>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}
