import React from 'react';

interface ArticleLayoutProps {
    children: React.ReactNode;
    toc?: { id: string; text: string; level: number }[];
    meta: {
        title: string;
        description: string;
    };
}

export default function ArticleLayout({ children, toc, meta }: ArticleLayoutProps) {
    return (
        <div className="container mx-auto px-6 py-12 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Main Content */}
                <article className="lg:col-span-8 lg:col-start-4">
                    <header className="mb-12 text-center lg:text-left">
                        <h1 className="font-serif text-4xl lg:text-6xl font-black mb-6 leading-tight">
                            {meta.title}
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                            {meta.description}
                        </p>
                        <div className="h-1 w-20 bg-black mt-8 mx-auto lg:mx-0"></div>
                    </header>

                    <div className="prose-bv">
                        {children}
                    </div>
                </article>

                {/* Sidebar (Sticky) */}
                <aside className="hidden lg:block lg:col-span-3 lg:col-start-1 lg:row-start-1 pointer-events-none">
                    {/* Note: In grid, row-start-1 allows it to be visually on left but in code it can be anywhere. 
              Actually, putting it first in DOM is better for accessibility if it's nav, 
              but usually main content first is better. 
              We'll use order-last lg:order-first approach or grid geometry. 
              Since I placed it second in code, I used lg:col-start-1 to pull it back.
          */}
                    <div className="sticky top-32 pointer-events-auto">
                        <div className="border-t-4 border-black pt-4">
                            <span className="block font-sans font-bold uppercase tracking-widest text-xs text-gray-400 mb-6">
                                Table of Contents
                            </span>
                            <nav>
                                <ul className="space-y-3">
                                    {toc?.map((item) => (
                                        <li key={item.id} className={item.level === 3 ? 'pl-4' : ''}>
                                            <a
                                                href={`#${item.id}`}
                                                className="text-sm text-gray-600 hover:text-black hover:underline decoration-1 underline-offset-4 transition-colors block"
                                            >
                                                {item.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
