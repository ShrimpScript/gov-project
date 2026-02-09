import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface Article {
    slug: string;
    meta: ArticleMeta;
    content: string;
}

export interface ArticleMeta {
    title: string;
    description: string;
    order: number;
}

export function getArticleSlugs() {
    if (!fs.existsSync(contentDirectory)) {
        return [];
    }
    return fs.readdirSync(contentDirectory).filter((file) => file.endsWith('.mdx'));
}

export function getArticleBySlug(slug: string): Article | undefined {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(contentDirectory, `${realSlug}.mdx`);

    if (!fs.existsSync(fullPath)) {
        return undefined;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        slug: realSlug,
        meta: data as ArticleMeta,
        content,
    };
}

export function getAllArticles(): Article[] {
    const slugs = getArticleSlugs();
    const articles = slugs
        .map((slug) => getArticleBySlug(slug))
        .filter((article): article is Article => article !== undefined)
        .sort((a, b) => a.meta.order - b.meta.order);

    return articles;
}
