import React from "react";

const NewsAndEvents = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 font-sans text-gray-800">
      <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
        Latest News and Events
      </h1>
      <p className="text-center mb-10 text-lg">
        Stay tuned for upcoming events and announcements.
      </p>

      {/* Event 1 */}
      <div className="mb-8 p-6 border rounded shadow hover:shadow-lg transition">
        <h2 className="text-2xl font-semibold text-blue-800 mb-2">
          Annual Sports Day
        </h2>
        <p className="text-sm text-gray-500 mb-2">August 12, 2025</p>
        <p>
          Students showcased their athletic skills in races, relays, and team
          sports. A fun-filled day promoting teamwork and healthy competition.
        </p>
      </div>

      {/* Event 2 */}
      <div className="mb-8 p-6 border rounded shadow hover:shadow-lg transition">
        <h2 className="text-2xl font-semibold text-blue-800 mb-2">
          Educational Trip to Jinja
        </h2>
        <p className="text-sm text-gray-500 mb-2">July 5, 2025</p>
        <p>
          Our students visited the Source of the Nile and other historical sites
          in Jinja, learning about Uganda’s rich natural heritage.
        </p>
      </div>

      {/* Event 3 */}
      <div className="mb-8 p-6 border rounded shadow hover:shadow-lg transition">
        <h2 className="text-2xl font-semibold text-blue-800 mb-2">
          Debating Competition
        </h2>
        <p className="text-sm text-gray-500 mb-2">June 20, 2025</p>
        <p>
          The debating club held an inter-class competition encouraging critical
          thinking and public speaking skills.
        </p>
      </div>

      {/* Event 4 */}
      <div className="mb-8 p-6 border rounded shadow hover:shadow-lg transition">
        <h2 className="text-2xl font-semibold text-blue-800 mb-2">
          Spelling Bee Contest
        </h2>
        <p className="text-sm text-gray-500 mb-2">May 15, 2025</p>
        <p>
          Students from different grades competed in our annual Spelling Bee,
          showcasing impressive vocabulary and spelling prowess.
        </p>
      </div>
    </div>
  );
};

export default NewsAndEvents;
