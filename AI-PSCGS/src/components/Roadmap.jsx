function Roadmap() {

  const steps = [
    {
      number: "01",
      title: "Learn Core Java",
      description:
        "Learn OOP, Collections, Exception Handling, Multithreading and Java 8+ features.",
    },
    {
      number: "02",
      title: "Learn Spring Boot",
      description:
        "Learn REST API, Spring MVC, Spring Data JPA, Hibernate and Spring Security.",
    },
    {
      number: "03",
      title: "Learn React JS",
      description:
        "Learn Components, Props, State, Hooks, Routing and API integration.",
    },
    {
      number: "04",
      title: "Learn MySQL",
      description:
        "Learn SQL queries, Joins, Relationships, Indexes and Database Design.",
    },
    {
      number: "05",
      title: "Build Projects",
      description:
        "Build real-world full-stack applications using Java, Spring Boot and React.",
    },
    {
      number: "06",
      title: "Interview Preparation",
      description:
        "Practice Java, SQL, React, Spring Boot, coding and HR interview questions.",
    },
  ];

  return (
    <div className="space-y-5">

      {steps.map((step) => (

        <div
          key={step.number}
          className="flex gap-5 rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-lg"
        >

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 font-bold text-white">
            {step.number}
          </div>

          <div>

            <h3 className="text-xl font-bold text-slate-900">
              {step.title}
            </h3>

            <p className="mt-2 leading-6 text-slate-500">
              {step.description}
            </p>

          </div>

        </div>

      ))}

    </div>
  );
}

export default Roadmap;