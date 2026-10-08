import { useEffect, useState } from "react";
import CareerCard from "../components/CareerCard";
import api from "../api/api";

function Careers() {

  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getCareers();
  }, []);

  const getCareers = async () => {
    try {

      const response = await api.get("/careers");

      console.log("Careers:", response.data);

      setCareers(response.data);

    } catch (error) {

      console.error("Career API Error:", error);

      setError("Unable to load careers.");

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-12">

      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-10 text-center">

          <h1 className="text-4xl font-bold text-slate-900">
            Career Recommendations
          </h1>

          <p className="mt-3 text-slate-500">
            AI-powered career recommendations based on your skills.
          </p>

        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center">

            <p className="text-slate-500">
              Loading careers...
            </p>

          </div>
        )}

        {/* Error */}
        {error && (
          <div className="text-center">

            <p className="text-red-500">
              {error}
            </p>

          </div>
        )}

        {/* Career Cards */}
        {!loading && !error && careers.length > 0 && (

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {careers.map((career) => (

              <CareerCard
                key={career.id}
                title={career.title}
                score="90"
                description={career.description}
                requiredSkills={career.requiredSkills}
                category={career.category}
              />

            ))}

          </div>

        )}

        {/* No Data */}
        {!loading && !error && careers.length === 0 && (

          <div className="text-center">

            <p className="text-slate-500">
              No careers found in database.
            </p>

          </div>
        )}

      </div>

    </div>
  );
}

export default Careers;