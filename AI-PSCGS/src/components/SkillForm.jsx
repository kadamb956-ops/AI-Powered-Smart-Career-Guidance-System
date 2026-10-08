import { useState } from "react";

function SkillForm({ onSubmit }) {

  const [skills, setSkills] = useState({
    javaScore: 5,
    springBootScore: 5,
    reactScore: 5,
    sqlScore: 5,
    communicationScore: 5,
    problemSolvingScore: 5
  });

  const handleChange = (e) => {

    setSkills({
      ...skills,
      [e.target.name]: Number(e.target.value)
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    onSubmit(skills);

  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-8 shadow"
    >

      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label>Java</label>

          <input
            type="number"
            min="1"
            max="10"
            name="javaScore"
            value={skills.javaScore}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label>Spring Boot</label>

          <input
            type="number"
            min="1"
            max="10"
            name="springBootScore"
            value={skills.springBootScore}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label>React</label>

          <input
            type="number"
            min="1"
            max="10"
            name="reactScore"
            value={skills.reactScore}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label>SQL</label>

          <input
            type="number"
            min="1"
            max="10"
            name="sqlScore"
            value={skills.sqlScore}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label>Communication</label>

          <input
            type="number"
            min="1"
            max="10"
            name="communicationScore"
            value={skills.communicationScore}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label>Problem Solving</label>

          <input
            type="number"
            min="1"
            max="10"
            name="problemSolvingScore"
            value={skills.problemSolvingScore}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
          />
        </div>

      </div>

      <button
        type="submit"
        className="mt-8 w-full rounded-lg bg-slate-900 px-6 py-3 text-white"
      >
        Submit Assessment
      </button>

    </form>
  );
}

export default SkillForm;