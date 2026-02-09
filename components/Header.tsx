import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Header() {
    return (
        <header className="border-b border-gray-200 py-6 sticky top-0 bg-white/80 backdrop-blur-md z-50">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="font-serif font-bold text-xl tracking-tight hover:underline underline-offset-4 decoration-gray-400">
                    American Democracy Defined
                </Link>
                <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
                    <Link href="/q1-written-constitution" className="hover:text-black transition-colors">Constitution</Link>
                    <Link href="/q4-founder-concerns" className="hover:text-black transition-colors">Founders</Link>
                    <Link href="/q5-limiting-power" className="hover:text-black transition-colors">Limits</Link>
                    <Link href="/q6-modern-relevance" className="hover:text-black transition-colors">Relevance</Link>
                </nav>
                <button className="md:hidden">
                    <Menu className="w-6 h-6" />
                </button>
            </div>
        </header>
    );
}
