import { useState } from "react";
import api from "../api/api";

function Certifications() {
  const [career, setCareer] = useState("");
  const [skills, setSkills] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const getCertifications = async () => {
    if (!career || !skills) {
      alert("Please enter career and skills.");
      return;
    }

    setLoading(true);

    try {
      const response = await api.post(
        "/certifications/recommend",
        null,
        {
          params: {
            career,
            skills,
          },
        }
      );

      setResult(response.data.response);
    } catch (error) {
      console.error(error);
      alert("Unable to get certifications.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-12">

      <div className="mx-auto max-w-5xl">

        <div className="mb-10 text-center">

          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
            🏆 Career Certifications
          </span>

          <h1 className="mt-5 text-4xl font-extrabold text-slate-900">
            Recommended Certifications
          </h1>

          <p className="mt-3 text-slate-500">
            Find certifications that match your target career.
          </p>

        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">

          <div className="mb-6">

            <label className="mb-2 block font-semibold text-slate-700">
              Target Career
            </label>

            <input
              value={career}
              onChange={(e) => setCareer(e.target.value)}
              placeholder="Example: Java Full Stack Developer"
              className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            />

          </div>

          <div>

            <label className="mb-2 block font-semibold text-slate-700">
              Current Skills
            </label>

            <textarea
              rows="5"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="Example: Java, Spring Boot, React, MySQL"
              className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            />

          </div>

          <button
            onClick={getCertifications}
            disabled={loading}
            className="mt-6 w-full rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-4 font-bold text-white shadow-lg transition hover:shadow-xl disabled:opacity-60"
          >
            {loading
              ? "Finding Certifications..."
              : "🏆 Recommend Certifications"}
          </button>

        </div>

        {result && (
          <div className="mt-8 rounded-2xl border border-yellow-100 bg-white p-8 shadow-lg">

            <h2 className="mb-5 text-2xl font-bold text-slate-900">
              Recommended Certifications
            </h2>

            <div className="whitespace-pre-wrap leading-7 text-slate-600">
              {result}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default Certifications;

