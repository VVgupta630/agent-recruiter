import React, { useState } from 'react';
import { Sparkles, Download, ExternalLink, Briefcase, Layers } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [jdText, setJdText] = useState('Looking for a Senior Python Developer with strong ML, AWS, and system design experience to build scalable AI microservices.');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  const handleRunAnalysis = async () => {
    setLoading(true);
    setTimeout(() => {
      setResults({
        extracted: ["Python", "Machine Learning", "AWS", "System Design"],
        candidates: [
          { id: 1, name: "Aanya Kapoor", role: "Software Engineer", match: 92, exp: "4 yrs", evidence: "Python, 4 yrs AWS Experience, System Design Blog", missing: ["Kubernetes"], source: "LinkedIn" },
          { id: 2, name: "Rohan Singh", role: "Backend Developer", match: 78, exp: "3 yrs", evidence: "Python 3+ yrs, Django Projects, PostgreSQL 2 yrs", missing: ["AWS"], source: "GitHub" },
          { id: 3, name: "Karan Mehta", role: "SDE", match: 64, exp: "2 yrs", evidence: "Java 2+ yrs, Spring Boot Projects, SQL 2 yrs", missing: ["Cloud Experience"], source: "LinkedIn" }
        ]
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 text-white p-2 rounded-xl shadow-md">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-slate-900">Agent Recruiter</h1>
              <p className="text-xs text-slate-500">Critical Hacks 2026 | Team Bitwise</p>
            </div>
          </div>
          <nav className="flex space-x-6 text-sm font-medium text-slate-600">
            <button onClick={() => setActiveTab('dashboard')} className={`hover:text-blue-600 transition ${activeTab === 'dashboard' ? 'text-blue-600 font-semibold' : ''}`}>Dashboard</button>
            <button onClick={() => setActiveTab('pricing')} className={`hover:text-blue-600 transition ${activeTab === 'pricing' ? 'text-blue-600 font-semibold' : ''}`}>SaaS Pricing</button>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'dashboard' ? (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-blue-600" />
                Step 1: Input Job Description & Criteria
              </h2>
              <p className="text-sm text-slate-500 mb-4">Paste your job description below to trigger TinyFish web candidate discovery and AI matching.</p>
              <textarea 
                value={jdText} 
                onChange={(e) => setJdText(e.target.value)}
                className="w-full h-32 p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm mb-4"
              />
              <button 
                onClick={handleRunAnalysis}
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl shadow-lg shadow-blue-500/20 transition flex items-center gap-2"
              >
                {loading ? <span className="animate-spin">⏳</span> : <Sparkles className="w-4 h-4" />}
                {loading ? 'TinyFish Agent Discovering Candidates...' : 'Run AI Discovery & Match'}
              </button>
            </div>

            {results && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                  <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-indigo-600" /> Extracted Requirements (AI/NLP)
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {results.extracted.map((skill, idx) => (
                      <span key={idx} className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-slate-900">Ranked Candidate Shortlist</h3>
                    <button className="flex items-center gap-2 border border-slate-200 px-4 py-2 rounded-xl text-sm font-medium hover:bg-slate-50">
                      <Download className="w-4 h-4" /> Export CSV
                    </button>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-slate-100 text-xs font-semibold text-slate-400 uppercase">
                          <th className="py-3 px-4">#</th>
                          <th className="py-3 px-4">Candidate</th>
                          <th className="py-3 px-4">Key Match Evidence</th>
                          <th className="py-3 px-4">Missing / Unverified</th>
                          <th className="py-3 px-4">Fit Score</th>
                          <th className="py-3 px-4">Source</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-sm">
                        {results.candidates.map((c, i) => (
                          <tr key={c.id} className="hover:bg-slate-50 transition">
                            <td className="py-4 px-4 font-semibold text-slate-400">#{i+1}</td>
                            <td className="py-4 px-4">
                              <p className="font-semibold text-slate-900">{c.name}</p>
                              <p className="text-xs text-slate-500">{c.role} • {c.exp}</p>
                            </td>
                            <td className="py-4 px-4 text-slate-600 text-xs">{c.evidence}</td>
                            <td className="py-4 px-4">
                              <span className="bg-amber-50 text-amber-700 px-2.5 py-1 rounded-md text-xs">{c.missing}</span>
                            </td>
                            <td className="py-4 px-4 font-bold text-blue-600">{c.match}%</td>
                            <td className="py-4 px-4">
                              <span className="flex items-center gap-1 text-xs text-blue-600 font-medium">
                                {c.source} <ExternalLink className="w-3 h-3" />
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-3xl font-bold tracking-tight">A Simple, Scalable SaaS Business Model</h2>
              <p className="text-slate-500 mt-2">B2B SaaS subscriptions with flexible plans for recruiters of all sizes.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg">Starter</h3>
                  <p className="text-xs text-slate-500 mt-1">For independent recruiters and small startups.</p>
                  <p className="text-3xl font-extrabold mt-4">$49<span className="text-sm font-normal text-slate-500">/mo</span></p>
                  <ul className="mt-6 space-y-3 text-sm text-slate-600">
                    <li>✓ Limited shortlists</li>
                    <li>✓ Core candidate search</li>
                    <li>✓ Email support</li>
                  </ul>
                </div>
                <button className="mt-8 w-full bg-slate-900 text-white py-3 rounded-xl font-medium hover:bg-slate-800">Choose Starter</button>
              </div>

              <div className="bg-white p-8 rounded-2xl border-2 border-blue-600 shadow-md flex flex-col justify-between relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold">MOST POPULAR</span>
                <div>
                  <h3 className="font-bold text-lg">Growth</h3>
                  <p className="text-xs text-slate-500 mt-1">For recruitment agencies and growing hiring teams.</p>
                  <p className="text-3xl font-extrabold mt-4">$199<span className="text-sm font-normal text-slate-500">/mo</span></p>
                  <ul className="mt-6 space-y-3 text-sm text-slate-600">
                    <li>✓ Higher usage limits</li>
                    <li>✓ Team collaboration</li>
                    <li>✓ Advanced analytics</li>
                  </ul>
                </div>
                <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700">Choose Growth</button>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg">Enterprise</h3>
                  <p className="text-xs text-slate-500 mt-1">For larger organizations.</p>
                  <p className="text-3xl font-extrabold mt-4">Custom</p>
                  <ul className="mt-6 space-y-3 text-sm text-slate-600">
                    <li>✓ Custom limits & integrations</li>
                    <li>✓ Team controls</li>
                    <li>✓ Dedicated support</li>
                  </ul>
                </div>
                <button className="mt-8 w-full bg-slate-900 text-white py-3 rounded-xl font-medium hover:bg-slate-800">Contact Sales</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}