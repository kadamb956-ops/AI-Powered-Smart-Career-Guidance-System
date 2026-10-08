import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-900">

        <div className="mx-auto max-w-7xl px-6 py-24 text-center">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20 text-3xl font-bold text-white">
            AI
          </div>

          <h1 className="mt-8 text-4xl font-extrabold text-white md:text-6xl">
            AI-Powered Smart
            <br />
            Career Guidance
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-indigo-100">
            Discover the right career path, assess your skills,
            find certifications and build a personalized learning
            roadmap using Artificial Intelligence.
          </p>

          <div className="mt-10 flex justify-center gap-4">

            <Link
              to="/assessment"
              className="rounded-xl bg-white px-7 py-3.5 font-bold text-indigo-700 shadow-lg hover:bg-slate-100"
            >
              🎯 Start Assessment
            </Link>

            <Link
              to="/careers"
              className="rounded-xl border border-white/40 bg-white/10 px-7 py-3.5 font-bold text-white hover:bg-white/20"
            >
              ✨ Get AI Advice
            </Link>

          </div>

        </div>

      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <h2 className="text-center text-3xl font-bold text-slate-900">
          Smart Career Features
        </h2>

        <p className="mt-3 text-center text-slate-500">
          Everything you need to plan your career.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          <Feature
            icon="🎯"
            title="Skill Assessment"
            description="Evaluate your technical and soft skills."
            link="/assessment"
          />

          <Feature
            icon="🚀"
            title="Career Recommendations"
            description="Get AI-powered career suggestions."
            link="/careers"
          />

          <Feature
            icon="🏆"
            title="Certification Suggestions"
            description="Find certifications for your career."
            link="/certifications"
          />

          <Feature
            icon="🗺️"
            title="Learning Roadmap"
            description="Build a personalized learning roadmap."
            link="/roadmap"
          />

          <Feature
            icon="📄"
            title="Resume Analysis"
            description="Analyze your resume using AI."
            link="/resume"
          />

          <Feature
            icon="🤖"
            title="AI Career Guidance"
            description="Get intelligent career guidance."
            link="/careers"
          />

        </div>

      </section>

    </div>
  );
}

function Feature({ icon, title, description, link }) {
  return (
    <Link
      to={link}
      className="group rounded-2xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >

      <div className="text-4xl">
        {icon}
      </div>

      <h3 className="mt-5 text-xl font-bold text-slate-900 group-hover:text-indigo-600">
        {title}
      </h3>

      <p className="mt-3 text-slate-500">
        {description}
      </p>

      <p className="mt-5 font-semibold text-indigo-600">
        Explore →
      </p>

    </Link>
  );
}

export default Home;

