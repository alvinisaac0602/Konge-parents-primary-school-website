import React from "react";

const Academics = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 font-sans text-gray-800">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">Academics</h1>
      <p className="mb-8 text-lg">
        Information about the academic programs offered at Konge Parents School.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">
          Core Subjects
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Mathematics</li>
          <li>English Language</li>
          <li>Science</li>
          <li>Social Studies</li>
          <li>Religious Education</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">
          Other Subjects
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Creative Arts</li>
          <li>Physical Education</li>
          <li>Computer Studies</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">
          Teaching Approach
        </h2>
        <p>
          Our dedicated teachers focus on interactive learning, hands-on
          activities, and continuous assessment to ensure students grasp
          concepts effectively. We foster critical thinking, creativity, and
          holistic development.
        </p>
      </section>
    </div>
  );
};

export default Academics;
