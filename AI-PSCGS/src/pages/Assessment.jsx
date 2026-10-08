import SkillForm from "../components/SkillForm";
import api from "../api/api";

function Assessment() {

  const handleAssessment = async (skills) => {

    console.log("User Skills:", skills);

    try {

      const response = await api.post(
        "/assessment",
        skills
      );

      console.log("Assessment Response:", response.data);

      alert("Skill assessment submitted successfully!");

    } catch (error) {

      console.error("Assessment Error:", error);

      alert("Failed to submit assessment.");

    }
  };

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-12">

      <div className="mx-auto max-w-4xl">

        <div className="mb-10 text-center">

          <h1 className="text-4xl font-bold text-slate-900">
            Skill Assessment
          </h1>

          <p className="mt-3 text-slate-500">
            Evaluate your skills and discover your career path.
          </p>

        </div>

        <SkillForm onSubmit={handleAssessment} />

      </div>

    </div>
  );
}

export default Assessment;