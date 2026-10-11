
import { useState } from "react";

function RegistrationForm({ onRegister }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    gender: "",
  });

  const themes = {
    Male: {
      page: "from-blue-100 via-sky-50 to-cyan-100",
      card: "border-blue-200 bg-blue-50/90",
      heading: "text-blue-700",
      field: "border-blue-200 focus:border-blue-400 focus:ring-blue-100",
      button: "bg-blue-500 hover:bg-blue-600",
      accent: "bg-blue-100 text-blue-700 border-blue-300",
    },
    Female: {
      page: "from-pink-100 via-rose-50 to-purple-100",
      card: "border-pink-200 bg-pink-50/90",
      heading: "text-pink-700",
      field: "border-pink-200 focus:border-pink-400 focus:ring-pink-100",
      button: "bg-pink-500 hover:bg-pink-600",
      accent: "bg-pink-100 text-pink-700 border-pink-300",
    },
    Other: {
      page: "from-violet-100 via-purple-50 to-fuchsia-100",
      card: "border-purple-200 bg-purple-50/90",
      heading: "text-purple-700",
      field: "border-purple-200 focus:border-purple-400 focus:ring-purple-100",
      button: "bg-purple-500 hover:bg-purple-600",
      accent: "bg-purple-100 text-purple-700 border-purple-300",
    },
  };

  const theme = themes[form.gender] || {
    page: "from-indigo-100 via-white to-pink-100",
    card: "border-indigo-200 bg-white/90",
    heading: "text-indigo-700",
    field: "border-gray-200 focus:border-indigo-400 focus:ring-indigo-100",
    button: "bg-indigo-600 hover:bg-indigo-700",
    accent: "bg-indigo-50 text-indigo-700 border-indigo-200",
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.gender) {
      alert("Please select your gender.");
      return;
    }

    onRegister(form);
  };

  const inputClass =
    `w-full rounded-xl border bg-white/90 px-4 py-3 text-gray-700 ` +
    `outline-none transition focus:ring-4 ${theme.field}`;

  return (
    <div
      className={`min-h-screen rounded-3xl bg-gradient-to-br ${theme.page} p-4 transition-all duration-500 sm:p-8`}
    >
      <div
        className={`mx-auto max-w-2xl rounded-3xl border-2 ${theme.card} p-6 shadow-xl transition-all duration-500 sm:p-10`}
      >
        <div className="mb-8 text-center">
          <div className="mb-3 text-5xl">🎓</div>

          <h2 className={`text-3xl font-extrabold ${theme.heading}`}>
            Student Registration
          </h2>

          <p className="mt-3 text-sm text-gray-600">
            Fill in your details to begin your journey.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className={inputClass}
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="student@example.com"
              required
              className={inputClass}
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              required
              className={inputClass}
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Course
            </label>
            <select
              name="course"
              value={form.course}
              onChange={handleChange}
              required
              className={inputClass}
            >
              <option value="">Select your course</option>
              <option value="BCA">BCA</option>
              <option value="BBA">BBA</option>
              <option value="B.Com">B.Com</option>
              <option value="B.Sc IT">B.Sc IT</option>
              <option value="MCA">MCA</option>
            </select>
          </div>

          <div>
            <label className="mb-3 block font-semibold text-gray-700">
              Select Gender
            </label>

            <div className="grid grid-cols-3 gap-3">
              {["Male", "Female", "Other"].map((gender) => (
                <button
                  key={gender}
                  type="button"
                  onClick={() => setForm({ ...form, gender })}
                  className={`rounded-xl border-2 px-2 py-4 font-bold transition ${
                    form.gender === gender
                      ? theme.accent
                      : "border-white bg-white/80 text-gray-600 hover:bg-white"
                  }`}
                >
                  {gender === "Male"
                    ? "💙 Male"
                    : gender === "Female"
                    ? "💗 Female"
                    : "💜 Other"}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-white/60 p-3 text-center text-sm text-gray-600">
            {form.gender
              ? `Your ${form.gender} light theme is selected ✨`
              : "Choose a gender to preview its light theme ✨"}
          </div>

          <button
            type="submit"
            className={`w-full rounded-xl ${theme.button} py-4 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl`}
          >
            Register Student →
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
