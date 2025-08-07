import React from "react";

const About = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold">
          About Konge Parents Primary School
        </h1>
        <p className="mt-2 text-lg">
          Excellence, Discipline, and Opportunity for Every Child
        </p>
      </section>

      {/* School Overview */}
      <section className="max-w-5xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-blue-900">
          Who We Are
        </h2>
        <p className="text-lg leading-relaxed">
          Konge Parents Primary School is a trusted institution committed to
          delivering high-quality education in a nurturing and inclusive
          environment. We aim to inspire young minds, cultivate character, and
          empower students to achieve academic excellence and become responsible
          citizens.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold text-blue-800 mb-2">
              Our Mission
            </h3>
            <p>
              To provide a holistic, inclusive, and learner-centered education
              that equips every child with the knowledge, skills, and values
              necessary to thrive in a rapidly changing world.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-800 mb-2">
              Our Vision
            </h3>
            <p>
              To become a leading primary school in Uganda, known for academic
              excellence, strong moral grounding, and innovative learning
              practices.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-blue-900 mb-8">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded shadow hover:shadow-lg transition">
            <h4 className="text-xl font-bold text-blue-800 mb-2">Discipline</h4>
            <p>
              We believe discipline builds self-respect, responsibility, and
              leadership.
            </p>
          </div>
          <div className="p-6 bg-white rounded shadow hover:shadow-lg transition">
            <h4 className="text-xl font-bold text-blue-800 mb-2">Excellence</h4>
            <p>
              We set high expectations and help every student reach their full
              potential.
            </p>
          </div>
          <div className="p-6 bg-white rounded shadow hover:shadow-lg transition">
            <h4 className="text-xl font-bold text-blue-800 mb-2">Integrity</h4>
            <p>
              We promote honesty, accountability, and ethical behavior in all we
              do.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
