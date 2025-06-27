import React from "react";

const webDevRoadmap = [
  {
    stage: "1. Basics of Web",
    topics: [
      "What is the Internet?",
      "How the Web Works",
      "Browsers & DNS",
      "HTTP/HTTPS Basics",
    ],
  },
  {
    stage: "2. HTML & CSS",
    topics: [
      "HTML Structure & Elements",
      "Semantic HTML",
      "CSS Selectors & Properties",
      "Flexbox & Grid",
      "Responsive Design",
    ],
  },
  {
    stage: "3. JavaScript Fundamentals",
    topics: [
      "Variables, Data Types",
      "Functions & Scope",
      "DOM Manipulation",
      "Events",
      "ES6+ Features",
    ],
  },
  {
    stage: "4. Version Control",
    topics: [
      "Git Basics",
      "GitHub Workflow",
      "Branching & Merging",
    ],
  },
  {
    stage: "5. Advanced JavaScript",
    topics: [
      "Asynchronous JS (Promises, async/await)",
      "APIs & Fetch",
      "Modules",
      "Tooling (npm, bundlers)",
    ],
  },
  {
    stage: "6. Frontend Frameworks",
    topics: [
      "React Basics",
      "Component Lifecycle",
      "State & Props",
      "Hooks",
      "Routing",
    ],
  },
  {
    stage: "7. Backend Fundamentals",
    topics: [
      "Node.js & Express.js",
      "REST APIs",
      "Databases (MongoDB, SQL basics)",
      "Authentication",
    ],
  },
  {
    stage: "8. Deployment & DevOps",
    topics: [
      "Hosting (Vercel, Netlify, Heroku)",
      "Environment Variables",
      "CI/CD Basics",
    ],
  },
];

const Map = () => {
  return (
    <div className="mt-20 min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e0e7ff] py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-6 text-center">
          Web Development Roadmap
        </h1>
        <p className="text-lg text-gray-600 mb-10 text-center">
          Follow this step-by-step roadmap to become a modern web developer!
        </p>
        <ol className="space-y-8">
          {webDevRoadmap.map((step, idx) => (
            <li key={step.stage} className="relative pl-8">
              <div className="absolute left-0 top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow"></div>
              <h2 className="text-xl font-bold text-blue-800 mb-2">{step.stage}</h2>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                {step.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
export default Map;