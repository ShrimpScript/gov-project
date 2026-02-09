import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, ChevronRight, PenTool } from "lucide-react";

export default function Home() {
  const articles = [
    {
      slug: "q1-written-constitution",
      title: "The Written Constitution",
      description: "Why is it important to have a written constitution and a mission statement?",
      number: "01",
      category: "Foundations",
    },
    {
      slug: "q4-founder-concerns",
      title: "Founder Concerns",
      description: "What were the concerns of the Founders? Were they right to be worried?",
      number: "04",
      category: "History",
    },
    {
      slug: "q5-limiting-power",
      title: "Limiting Federal Power",
      description: "How does the Constitution limit the power of the federal government?",
      number: "05",
      category: "Structure",
    },
    {
      slug: "q6-modern-relevance",
      title: "Modern Relevance",
      description: "Are the beliefs by the founders being lived up to today?",
      number: "06",
      category: "Analysis",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-black selection:bg-black selection:text-white">
      <Header />

      <main className="flex-grow">
        {/* Editorial Hero */}
        <section className="relative pt-32 pb-24 px-6 border-b border-gray-900">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-12">
              <div>
                <span className="font-bold text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block">
                  American Government • Unit 1 Project
                </span>
                <h1 className="font-serif text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">
                  American<br />
                  Democracy<br />
                  <span className="italic font-light text-gray-600">Defined.</span>
                </h1>
              </div>
              <div className="md:text-right pb-2">
                <div className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-1">
                  Analysis By
                </div>
                <div className="text-2xl font-serif font-bold italic border-b-2 border-black inline-block pb-1">
                  Ezekiel Smits
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-gray-200 mb-12" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <p className="text-xl md:text-2xl font-serif leading-relaxed text-gray-800">
                  An exploration of the fundamental principles that shaped a nation. From the rigidity of the written word to the enduring fears of the Founders, this project analyzes the core questions of American governance.
                </p>
              </div>
              <div className="flex flex-col justify-end">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">In This Issue</span>
                <ul className="space-y-2">
                  {articles.map(a => (
                    <li key={a.slug} className="flex items-center text-sm font-bold border-b border-gray-100 pb-2">
                      <span className="text-gray-400 w-6">{a.number}</span>
                      <span>{a.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles Grid */}
        <section className="">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {articles.map((article, index) => (
              <Link
                key={article.slug}
                href={`/${article.slug}`}
                className={`
                    group relative block p-12 md:p-20 border-b border-r border-gray-200 hover:bg-gray-50 transition-all duration-500
                    ${index % 2 === 0 ? 'border-r' : 'border-r-0 md:border-r'}
                  `}
              >
                <div className="absolute top-8 left-8 text-xs font-bold uppercase tracking-widest text-gray-300">
                  {article.category}
                </div>
                <div className="absolute top-8 right-8 text-xs font-serif font-italic text-gray-300">
                  No. {article.number}
                </div>

                <div className="mt-12">
                  <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 group-hover:underline decoration-1 underline-offset-8 decoration-gray-300">
                    {article.title}
                  </h2>
                  <p className="text-gray-500 text-lg mb-10 font-light leading-relaxed max-w-md">
                    {article.description}
                  </p>

                  <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-black pb-1 group-hover:gap-4 transition-all">
                    Read Analysis <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Closing Statement */}
        <section className="py-32 bg-black text-white px-6 text-center">
          <div className="container mx-auto max-w-2xl">
            <PenTool className="w-12 h-12 mx-auto mb-8 text-gray-500" />
            <h3 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              "If men were angels, no government would be necessary."
            </h3>
            <p className="text-gray-400 font-mono text-sm uppercase tracking-widest">
              — James Madison, Federalist No. 51
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
