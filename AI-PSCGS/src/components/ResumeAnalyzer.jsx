import { useState } from "react";

function ResumeAnalyzer() {

  const [resume, setResume] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const analyzeResume = () => {

    if (!resume.trim()) {
      alert("Please enter your resume");
      return;
    }

    setLoading(true);

    // Temporary result
    // Later connect this with Spring Boot + OpenAI API
    setTimeout(() => {

      setResult({
        score: 85,
        skills: 90,
        keywords: "Good",
        improvement:
          "Add measurable achievements and more job-related keywords.",
      });

      setLoading(false);

    }, 1000);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-2">

      {/* Resume Input */}

      <div className="rounded-2xl bg-white p-8 shadow-lg">

        <h2 className="text-2xl font-bold text-slate-900">
          📄 Your Resume
        </h2>

        <textarea
          value={resume}
          onChange={(e) => setResume(e.target.value)}
          rows="18"
          placeholder="Paste your resume here..."
          className="mt-6 w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100"
        />

        <button
          onClick={analyzeResume}
          disabled={loading}
          className="mt-5 w-full rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-4 font-bold text-white shadow-lg"
        >
          {loading ? "Analyzing..." : "🔍 Analyze Resume"}
        </button>

      </div>

      {/* Result */}

      <div className="rounded-2xl bg-white p-8 shadow-lg">

        <h2 className="text-2xl font-bold text-slate-900">
          🤖 AI Analysis
        </h2>

        {!result && (
          <div className="mt-10 text-center text-slate-400">
            <div className="text-5xl">📊</div>

            <p className="mt-4">
              Your resume analysis will appear here.
            </p>
          </div>
        )}

        {result && (
          <div className="mt-8 space-y-5">

            <Analysis
              title="ATS Score"
              value={`${result.score}%`}
            />

            <Analysis
              title="Skills Match"
              value={`${result.skills}%`}
            />

            <Analysis
              title="Keyword Optimization"
              value={result.keywords}
            />

            <Analysis
              title="Improvement"
              value={result.improvement}
            />

          </div>
        )}

      </div>

    </div>
  );
}

function Analysis({ title, value }) {
  return (
    <div className="rounded-xl bg-slate-50 p-5">

      <p className="text-sm font-semibold text-slate-500">
        {title}
      </p>

      <p className="mt-2 font-bold text-slate-900">
        {value}
      </p>

    </div>
  );
}

export default ResumeAnalyzer;