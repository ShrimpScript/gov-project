import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const date = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-serif">
      <Header />

      <main className="flex-grow container mx-auto px-4 md:px-8 max-w-7xl">

        {/* Masthead */}
        <header className="text-center py-8 border-b-4 border-black mb-8">
          <h1 className="font-lodeh text-6xl md:text-8xl mb-4 leading-tight">
            American Democracy Defined
          </h1>

          <div className="flex justify-between items-center border-t border-b border-black py-2 text-xs md:text-sm font-bold uppercase tracking-widest font-sans text-gray-600">
            <span>Vol. I, No. 1</span>
            <span>{date}</span>
            <span>Unit 1 Project — Analysis by Ezekiel Smits</span>
          </div>
        </header>

        {/* Newspaper Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-gray-300">

          {/* Column 1: The Foundation (Left Sidebar) */}
          <div className="lg:col-span-3 pr-4">
            <Link href="/q1-written-constitution" className="group block mb-8">
              <h4 className="font-sans font-bold text-xs uppercase text-gray-500 mb-2 transition-colors duration-300 group-hover:text-gray-900">The Foundation</h4>
              <h2 className="text-2xl font-bold mb-3 group-hover:underline decoration-1 underline-offset-4 decoration-gray-400">The Written Constitution</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                The written constitution mainly serves as a reference point for modern-day politics to provide clear definitions of the structure of the government, distribution of power and the fundamental rights of citizens.
              </p>
              <div className="text-xs font-sans font-bold text-gray-400 uppercase transition-colors duration-300 group-hover:text-black">See Page 1 &rarr;</div>
            </Link>

            <div className="w-12 h-px bg-black my-6"></div>

            <Link href="/q5-limiting-power" className="group block">
              <h4 className="font-sans font-bold text-xs uppercase text-gray-500 mb-2 transition-colors duration-300 group-hover:text-gray-900">Structure</h4>
              <h2 className="text-xl font-bold mb-3 group-hover:underline decoration-1 underline-offset-4 decoration-gray-400">Limiting Power</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                The Constitution both grants and restricts power. The Founders didn't trust future people to not abuse their power, so they created a system where power is separated and distributed.
              </p>
              <div className="text-xs font-sans font-bold text-gray-400 uppercase transition-colors duration-300 group-hover:text-black">See Page 5 &rarr;</div>
            </Link>
          </div>

          {/* Column 2: Main Story (Center) */}
          <div className="lg:col-span-6 px-4">
            <Link href="/q6-modern-relevance" className="group block text-center">
              <h4 className="font-sans font-bold text-xs uppercase text-gray-500 mb-4 px-2 bg-white inline-block relative z-10 transition-colors duration-300 group-hover:text-black border border-transparent group-hover:border-gray-200">
                Lead Analysis
              </h4>
              <h2 className="text-3xl md:text-5xl font-black mb-6 italic leading-tight group-hover:underline decoration-2 underline-offset-4 decoration-black transition-all duration-300">
                "A Republic, If You Can Keep It"
              </h2>

              <div className="aspect-video w-full bg-gray-100 mb-6 relative grayscale border border-gray-200 overflow-hidden group-hover:shadow-lg transition-shadow duration-500">
                <img
                  src="/images/immigrants-make-america-great-again-bv3-800x533.jpg"
                  alt="Immigrants Make America Great"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="text-left columns-1 md:columns-2 gap-8 text-lg leading-relaxed text-gray-800">
                <p>
                  <span className="float-left text-5xl font-lodeh pr-2 leading-[0.8]">A</span>
                  re the beliefs by the founders being lived up to today? The main beliefs of the Founding Fathers were republicanism, separation of powers, checks and balances, and the fear of tyranny.
                </p>
                <p className="mt-4 md:mt-0">
                  While some of their expectations may have been exceeded in the modern day, there are clear events happening today that the Founding Fathers feared would happen.
                </p>
              </div>

              <div className="mt-8 text-center">
                <button className="bg-black text-white font-sans font-bold text-xs uppercase px-6 py-3 tracking-widest hover:bg-gray-800 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
                  Read the Full Report
                </button>
              </div>
            </Link>
          </div>

          {/* Column 3: The Debate (Right Sidebar) */}
          <div className="lg:col-span-3 pl-4">
            <div className="bg-gray-50 border border-gray-200 p-4 mb-8">
              <h4 className="font-sans font-bold text-xs uppercase text-gray-500 mb-3 border-b border-gray-200 pb-1">
                In This Issue
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <span className="font-bold block text-gray-900 group-hover:text-blue-900 transition-colors">Q1. Written Constitution</span>
                  <span className="text-gray-500 text-xs">Why is it important?</span>
                </li>
                <li>
                  <span className="font-bold block text-gray-900">Q4. Founder Concerns</span>
                  <span className="text-gray-500 text-xs">Were they right?</span>
                </li>
                <li>
                  <span className="font-bold block text-gray-900">Q5. Limiting Power</span>
                  <span className="text-gray-500 text-xs">Checks & Balances</span>
                </li>
                <li>
                  <span className="font-bold block text-gray-900">Q6. Modern Relevance</span>
                  <span className="text-gray-500 text-xs">Are values lived up to?</span>
                </li>
              </ul>
            </div>

            <Link href="/q4-founder-concerns" className="group block">
              <div className="border-b-4 border-black mb-4 pb-1 transition-colors duration-300 group-hover:border-gray-600">
                <h4 className="font-sans font-bold text-xs uppercase transition-colors duration-300 group-hover:text-gray-600">Historical Context</h4>
              </div>
              <h2 className="text-3xl font-bold mb-4 group-hover:underline decoration-1 underline-offset-4 decoration-gray-400">Founder Concerns</h2>
              <div className="italic text-gray-500 text-sm mb-4 group-hover:text-gray-800 transition-colors">
                Were they right to be worried?
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                The Anti-Federalists were terrified that a strong federal government would just become a "new monarchy" in disguise. They argued that the "Necessary and Proper" clause would let Congress pass literally any law they wanted.
              </p>
            </Link>

            <div className="bg-gray-100 p-4 mt-8 border border-gray-200 text-center">
              <h5 className="font-sans font-bold text-xs uppercase text-gray-500 mb-2">Quote of the Day</h5>
              <p className="font-serif italic text-lg mb-2">"If men were angels, no government would be necessary."</p>
              <cite className="not-italic text-xs font-bold text-gray-800">— James Madison</cite>
            </div>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
