import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const articles = [
    {
      slug: "q1-written-constitution",
      title: "The Written Constitution",
      description: "Why is it important to have a written constitution and a mission statement?",
      number: "01",
    },
    {
      slug: "q4-founder-concerns",
      title: "Founder Concerns",
      description: "What were the concerns of the Founders? Were they right?",
      number: "04",
    },
    {
      slug: "q5-limiting-power",
      title: "Limiting Federal Power",
      description: "How does the Constitution limit the power of the federal government?",
      number: "05",
    },
    {
      slug: "q6-modern-relevance",
      title: "Modern Relevance",
      description: "Are the beliefs by the founders being lived up to today?",
      number: "06",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-black selection:bg-gray-200">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-24 lg:py-32 px-6 border-b border-gray-100">
          <div className="container mx-auto text-center max-w-4xl">
            <h1 className="font-serif text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
              American Democracy <br /><span className="italic font-light">Defined</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-light mb-10">
              An Analysis of the Unit 1 Project
            </p>
            <div className="h-16 w-[1px] bg-gray-300 mx-auto"></div>
          </div>
        </section>

        {/* Article Grid */}
        <section className="py-20 px-6 bg-gray-50/50">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/${article.slug}`}
                  className="group relative bg-white p-12 hover:bg-gray-50 transition-colors duration-500"
                >
                  <div className="absolute top-12 left-12 text-6xl font-serif font-black text-gray-100 group-hover:text-gray-200 transition-colors pointer-events-none">
                    {article.number}
                  </div>
                  <div className="relative z-10 pt-16">
                    <h2 className="text-3xl font-serif font-bold mb-4 group-hover:translate-x-2 transition-transform duration-300">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-md group-hover:text-black transition-colors">
                      {article.description}
                    </p>
                    <div className="flex items-center text-sm font-bold uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">
                      Read Article <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
