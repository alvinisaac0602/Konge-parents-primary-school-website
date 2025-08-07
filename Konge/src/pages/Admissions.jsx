import React, { useState } from "react";

const Admissions = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    dob: "",
    parentName: "",
    email: "",
    phone: "",
    classApplying: "",
  });

  const [errors, setErrors] = useState({});

  const classes = [
    "Nursery",
    "Middle",
    "Top",
    "Primary 1",
    "Primary 2",
    "Primary 3",
    "Primary 4",
    "Primary 5",
    "Primary 6",
    "Primary 7",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.studentName.trim())
      newErrors.studentName = "Student name is required";
    if (!formData.dob) newErrors.dob = "Date of birth is required";
    if (!formData.parentName.trim())
      newErrors.parentName = "Parent/Guardian name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.classApplying)
      newErrors.classApplying = "Please select a class";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    alert(
      "Admission form submitted successfully!\n" +
        JSON.stringify(formData, null, 2)
    );

    setFormData({
      studentName: "",
      dob: "",
      parentName: "",
      email: "",
      phone: "",
      classApplying: "",
    });
    setErrors({});
  };

  return (
    <div className="max-w-5xl mx-auto p-6 font-sans text-gray-800">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">Admissions</h1>
      <p className="mb-8 text-lg">
        Information about the admissions process for Konge Parents School.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">
          How to Apply
        </h2>
        <ol className="list-decimal list-inside space-y-3">
          <li>
            Obtain an admission form from the school office or download it from
            our website.
          </li>
          <li>
            Complete the application form with accurate student details and
            parent/guardian information.
          </li>
          <li>Submit the completed form along with the required documents.</li>
          <li>Attend an admission interview or assessment if required.</li>
          <li>
            Wait for the admission decision and follow further instructions.
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">
          Required Documents
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Completed admission application form.</li>
          <li>Birth certificate or proof of age.</li>
          <li>Previous school report (if applicable).</li>
          <li>Passport-sized photographs.</li>
          <li>Medical immunization records.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-blue-800">
          Online Admission Form
        </h2>
        <form onSubmit={handleSubmit} className="max-w-xl space-y-6">
          <div>
            <label className="block mb-1 font-semibold" htmlFor="studentName">
              Student Full Name <span className="text-red-600">*</span>
            </label>
            <input
              id="studentName"
              name="studentName"
              type="text"
              value={formData.studentName}
              onChange={handleChange}
              className={`w-full border px-3 py-2 rounded ${
                errors.studentName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.studentName && (
              <p className="text-red-600 text-sm mt-1">{errors.studentName}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-semibold" htmlFor="dob">
              Date of Birth <span className="text-red-600">*</span>
            </label>
            <input
              id="dob"
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
              className={`w-full border px-3 py-2 rounded ${
                errors.dob ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.dob && (
              <p className="text-red-600 text-sm mt-1">{errors.dob}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-semibold" htmlFor="parentName">
              Parent/Guardian Name <span className="text-red-600">*</span>
            </label>
            <input
              id="parentName"
              name="parentName"
              type="text"
              value={formData.parentName}
              onChange={handleChange}
              className={`w-full border px-3 py-2 rounded ${
                errors.parentName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.parentName && (
              <p className="text-red-600 text-sm mt-1">{errors.parentName}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-semibold" htmlFor="email">
              Contact Email <span className="text-red-600">*</span>
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
            <label className="block mb-1 font-semibold" htmlFor="phone">
              Contact Phone <span className="text-red-600">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full border px-3 py-2 rounded ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.phone && (
              <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-semibold" htmlFor="classApplying">
              Class Applying For <span className="text-red-600">*</span>
            </label>
            <select
              id="classApplying"
              name="classApplying"
              value={formData.classApplying}
              onChange={handleChange}
              className={`w-full border px-3 py-2 rounded ${
                errors.classApplying ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select Class</option>
              {classes.map((cls) => (
                <option key={cls} value={cls}>
                  {cls}
                </option>
              ))}
            </select>
            {errors.classApplying && (
              <p className="text-red-600 text-sm mt-1">
                {errors.classApplying}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-900 text-white px-6 py-3 rounded font-semibold hover:bg-blue-800 transition"
          >
            Submit Application
          </button>
        </form>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">
          Contact Admissions
        </h2>
        <p>
          For more information or assistance with your application, please
          contact our admissions office at{" "}
          <a
            href="mailto:admissions@kongeparents.ac.ug"
            className="text-blue-700 underline"
          >
            admissions@kongeparents.ac.ug
          </a>{" "}
          or call +256 700 000000.
        </p>
      </section>
    </div>
  );
};

export default Admissions;
