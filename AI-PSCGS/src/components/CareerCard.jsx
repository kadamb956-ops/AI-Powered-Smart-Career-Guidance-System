import { useState } from "react";

function CareerCard({ title, score, description, requiredSkills, category }) {

  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      <div className="flex items-center justify-between">

        <div className="text-4xl">
          💻
        </div>

        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-700">
          {score}% Match
        </span>

      </div>

      <h3 className="mt-5 text-xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-500">
        {description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700"
        >
          {showDetails ? "Hide Details" : "View Career"}
        </button>

        <button
          className="rounded-lg border border-indigo-600 px-4 py-2 font-semibold text-indigo-600 hover:bg-indigo-50"
        >
          Roadmap
        </button>

      </div>

      {showDetails && (

        <div className="mt-5 rounded-xl bg-slate-50 p-4">

          <p className="text-sm font-semibold text-slate-700">
            Category
          </p>

          <p className="mb-3 text-sm text-slate-500">
            {category || "Software Development"}
          </p>

          <p className="text-sm font-semibold text-slate-700">
            Required Skills
          </p>

          <p className="text-sm text-slate-500">
            {requiredSkills || "Java, Spring Boot, React, MySQL"}
          </p>

        </div>

      )}

    </div>
  );
}

export default CareerCard;