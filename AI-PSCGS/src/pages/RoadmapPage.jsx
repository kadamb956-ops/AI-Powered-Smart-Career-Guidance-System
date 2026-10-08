import Roadmap from "../components/Roadmap";

function RoadmapPage() {

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-12">

      <div className="mx-auto max-w-5xl">

        <div className="mb-10 text-center">

          <h1 className="text-4xl font-bold text-slate-900">
            Learning Roadmap
          </h1>

          <p className="mt-3 text-slate-500">
            Follow a step-by-step path to become job ready.
          </p>

        </div>

        <Roadmap />

      </div>

    </div>
  );
}

export default RoadmapPage;