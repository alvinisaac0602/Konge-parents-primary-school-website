import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // For demo, just show an alert and reset form
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 font-sans text-gray-800">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">Contact Us</h1>
      <p className="mb-8 text-lg">
        If you have any questions or inquiries, please feel free to reach out to
        us.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">
          Our Contact Information
        </h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>
            <strong>Address:</strong> 123 Konge Street, Kampala, Uganda
          </li>
          <li>
            <strong>Phone:</strong> +256 700 000000
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:info@kongeparents.ac.ug"
              className="text-blue-700 underline"
            >
              info@kongeparents.ac.ug
            </a>
          </li>
          <li>
            <strong>Office Hours:</strong> Mon - Fri, 8:00 AM - 5:00 PM
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">
          Send Us a Message
        </h2>
        <form onSubmit={handleSubmit} className="max-w-md space-y-6">
          <div>
            <label htmlFor="name" className="block mb-1 font-semibold">
              Name <span className="text-red-600">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className={`w-full border px-3 py-2 rounded ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-semibold">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border px-3 py-2 rounded ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-semibold">
              Message <span className="text-red-600">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className={`w-full border px-3 py-2 rounded resize-none ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.message && (
              <p className="text-red-600 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-900 text-white px-6 py-3 rounded font-semibold hover:bg-blue-800 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
