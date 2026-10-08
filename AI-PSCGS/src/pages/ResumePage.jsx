import ResumeAnalyzer from "../components/ResumeAnalyzer";

function ResumePage() {

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-12">

      <div className="mx-auto max-w-6xl">

        <div className="mb-10 text-center">

          <h1 className="text-4xl font-bold text-slate-900">
            AI Resume Analyzer
          </h1>

          <p className="mt-3 text-slate-500">
            Analyze your resume and get AI-powered improvement suggestions.
          </p>

        </div>

        <ResumeAnalyzer />

      </div>

    </div>
  );
}

export default ResumePage;