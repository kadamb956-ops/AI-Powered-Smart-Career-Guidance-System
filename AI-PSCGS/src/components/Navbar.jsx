import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 font-bold text-white">
            AI
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-900">
              Career<span className="text-indigo-600">AI</span>
            </h1>

            <p className="text-xs text-slate-500">
              Smart Career Guidance
            </p>
          </div>

        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-2 md:flex">

          <NavItem to="/" text="Home" />

          <NavItem
            to="/assessment"
            text="Assessment"
          />

          <NavItem
            to="/careers"
            text="Careers"
          />

          <NavItem
            to="/certifications"
            text="Certifications"
          />

          <NavItem
            to="/roadmap"
            text="Roadmap"
          />

          <NavItem
            to="/resume"
            text="Resume AI"
          />

        </div>

        {/* AI Button */}
        <Link
          to="/careers"
          className="rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3 text-sm font-bold text-white shadow-md hover:shadow-lg"
        >
          ✨ AI Advice
        </Link>

      </div>

    </nav>
  );
}

function NavItem({ to, text }) {
  return (
    <Link
      to={to}
      className="rounded-lg px-4 py-2 font-semibold text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-600"
    >
      {text}
    </Link>
  );
}

export default Navbar;

