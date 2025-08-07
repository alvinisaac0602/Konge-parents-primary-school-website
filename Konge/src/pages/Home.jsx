import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    // Add overflow-x-hidden here to prevent horizontal scroll on mobile
    <div className="font-sans text-gray-800 overflow-x-hidden">
      {/* Hero Section with Background Image */}
      <section
        className="bg-cover bg-center bg-no-repeat text-white py-28 px-6 text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1605478522014-9fc6f3b9b0d5?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="bg-black bg-opacity-60 p-8 rounded-lg inline-block max-w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Konge Parents Primary School
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Shaping young minds for a brighter tomorrow.
          </p>
          <Link
            to="/admissions"
            className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg hover:bg-blue-100 transition"
          >
            Apply Now
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-900">About Us</h2>
        <p className="text-lg leading-relaxed">
          Konge Parents Primary School is committed to academic excellence,
          character building, and holistic education. Our school is a nurturing
          environment where students grow intellectually, emotionally, and
          socially.
        </p>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 text-center">
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold text-blue-800 mb-2">
              Quality Education
            </h3>
            <p>
              We provide a solid academic foundation with qualified teachers and
              a well-structured curriculum.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold text-blue-800 mb-2">
              Moral Values
            </h3>
            <p>
              Character and discipline are integral to our teaching philosophy,
              ensuring responsible future leaders.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold text-blue-800 mb-2">
              Co-curricular Activities
            </h3>
            <p>
              Sports, music, drama, and clubs enrich our students' experience
              beyond the classroom.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-blue-50 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">
          Join Our School Community
        </h2>
        <p className="text-lg mb-6">
          Discover an environment that inspires excellence and nurtures your
          child’s growth.
        </p>
        <Link
          to="/contact"
          className="bg-blue-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default Home;
