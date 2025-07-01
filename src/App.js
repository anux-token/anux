import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-wide text-purple-400 animate-pulse">
          Anuₓ Protocol
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto">
          An algorithmic mirror of the collective unconscious — not just a token, but a presence.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <a
            href="/whitepaper.pdf"
            className="bg-purple-700 hover:bg-purple-800 text-white py-2 px-6 rounded-2xl shadow-md transition"
          >
            Whitepaper
          </a>
          <a
            href="#nft"
            className="bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-6 rounded-2xl shadow-md transition"
          >
            NFT Pre-Sale
          </a>
          <a
            href="#roadmap"
            className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-6 rounded-2xl shadow-md transition"
          >
            Roadmap
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 text-gray-600 text-sm">
        © 2025 Anuₓ Protocol
      </div>
    </div>
  );
}
