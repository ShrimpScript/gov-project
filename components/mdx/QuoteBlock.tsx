import React from 'react';

interface QuoteBlockProps {
    source: string;
    children: React.ReactNode;
}

export default function QuoteBlock({ source, children }: QuoteBlockProps) {
    return (
        <figure className="my-10 pl-6 border-l-2 border-gray-900">
            <blockquote className="font-serif text-xl italic leading-relaxed text-gray-900 mb-4">
                {children}
            </blockquote>
            <figcaption className="text-sm font-sans text-gray-500 uppercase tracking-wider">
                — {source}
            </figcaption>
        </figure>
    );
}
