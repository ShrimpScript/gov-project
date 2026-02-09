import React from 'react';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleLayout from '@/components/ArticleLayout';
import StatCard from '@/components/mdx/StatCard';
import QuoteBlock from '@/components/mdx/QuoteBlock';
import ComparisonChart from '@/components/mdx/ComparisonChart';
import { getArticleBySlug, getArticleSlugs } from '@/lib/mdx';

// Utility to slugify text for IDs
const slugify = (text: string) => {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
};

import AmendmentDifficulty from '@/components/mdx/AmendmentDifficulty';
import PreambleAnnotator from '@/components/mdx/PreambleAnnotator';
import KingVsPresident from '@/components/mdx/KingVsPresident';
import ConstitutionStructure from '@/components/mdx/ConstitutionStructure';
import CaseStudy from '@/components/mdx/CaseStudy';
import Term from '@/components/mdx/Term';
import SeparationOfPowers from '@/components/mdx/SeparationOfPowers';

// Custom MDX Components to handle auto-ids for headings
const components = {
    StatCard,
    QuoteBlock,
    ComparisonChart,
    AmendmentDifficulty,
    PreambleAnnotator,
    KingVsPresident,
    ConstitutionStructure,
    CaseStudy,
    Term,
    SeparationOfPowers,
    h2: ({ children }: any) => {
        const id = slugify(typeof children === 'string' ? children : '');
        return <h2 id={id} className="text-2xl font-serif font-bold mt-12 mb-6">{children}</h2>;
    },
    h3: ({ children }: any) => {
        const id = slugify(typeof children === 'string' ? children : '');
        return <h3 id={id} className="text-xl font-bold mt-8 mb-4">{children}</h3>;
    },
    p: ({ children }: any) => <p className="mb-6 leading-relaxed text-lg">{children}</p>,
    ul: ({ children }: any) => <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>,
    ol: ({ children }: any) => <ol className="list-decimal pl-6 mb-6 space-y-2">{children}</ol>,
    li: ({ children }: any) => <li className="pl-2">{children}</li>,
};

export async function generateStaticParams() {
    const slugs = getArticleSlugs(); // implementation needs to return cleaned slugs
    // Current getArticleSlugs returns filenames like 'q1.mdx'. lib/mdx.ts needs to be checked.
    // lib/mdx.ts: fs.readdirSync...filter. So 'q1.mdx'.
    // We need to strip .mdx
    return slugs.map((file) => ({
        slug: file.replace(/\.mdx$/, ''),
    }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);

    if (!article) {
        notFound();
    }

    // Extract headings for TOC
    const regex = /^(#{2,3})\s+(.*)$/gm;
    const toc = [];
    let match;
    while ((match = regex.exec(article.content)) !== null) {
        toc.push({
            id: slugify(match[2]),
            text: match[2],
            level: match[1].length,
        });
    }

    return (
        <div className="min-h-screen bg-white text-black selection:bg-gray-200">
            <Header />
            <ArticleLayout toc={toc} meta={{ title: article.meta.title, description: article.meta.description }}>
                <MDXRemote source={article.content} components={components} />
            </ArticleLayout>
            <Footer />
        </div>
    );
}
