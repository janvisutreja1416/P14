function StudentDetails({ student, onReset }) {
  const themes = {
    Male: {
      background: "from-blue-100 via-sky-50 to-cyan-100",
      card: "border-blue-300",
      heading: "text-blue-700",
      button: "bg-blue-600 hover:bg-blue-700",
      icon: "💙",
    },
    Female: {
      background: "from-pink-100 via-rose-50 to-purple-100",
      card: "border-pink-300",
      heading: "text-pink-700",
      button: "bg-pink-600 hover:bg-pink-700",
      icon: "💗",
    },
    Other: {
      background: "from-violet-100 via-purple-50 to-fuchsia-100",
      card: "border-purple-300",
      heading: "text-purple-700",
      button: "bg-purple-600 hover:bg-purple-700",
      icon: "💜",
    },
  };

  const theme = themes[student.gender] || {
    background: "from-indigo-100 to-purple-100",
    card: "border-indigo-300",
    heading: "text-indigo-700",
    button: "bg-indigo-600 hover:bg-indigo-700",
    icon: "🎓",
  };

  return (
    <div
      className={`min-h-screen rounded-3xl bg-gradient-to-br ${theme.background} p-5 sm:p-10 transition-all duration-500`}
    >
      <div
        className={`mx-auto max-w-2xl rounded-3xl border-2 ${theme.card} bg-white/90 p-6 text-center shadow-2xl sm:p-10`}
      >
        <div className="mb-4 text-6xl">{theme.icon}</div>

        <h2 className={`text-3xl font-extrabold ${theme.heading}`}>
          Registration Successful!
        </h2>

        <p className="mt-3 text-gray-600">
          Congratulations, {student.name}! Your registration is complete.
        </p>

        <div className="mt-8 space-y-4 rounded-2xl bg-white p-6 text-left shadow-sm">
          <p className="border-b border-gray-100 pb-3">
            <strong className="text-gray-700">Full Name:</strong>{" "}
            <span className="text-gray-600">{student.name}</span>
          </p>

          <p className="border-b border-gray-100 pb-3">
            <strong className="text-gray-700">Email:</strong>{" "}
            <span className="text-gray-600">{student.email}</span>
          </p>

          <p className="border-b border-gray-100 pb-3">
            <strong className="text-gray-700">Phone:</strong>{" "}
            <span className="text-gray-600">{student.phone}</span>
          </p>

          <p className="border-b border-gray-100 pb-3">
            <strong className="text-gray-700">Course:</strong>{" "}
            <span className="text-gray-600">{student.course}</span>
          </p>

          <p>
            <strong className="text-gray-700">Gender:</strong>{" "}
            <span className="text-gray-600">{student.gender}</span>
          </p>
        </div>

        <button
          onClick={onReset}
          className={`mt-8 w-full rounded-xl ${theme.button} px-6 py-4 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl`}
        >
          Register Another Student →
        </button>
      </div>
    </div>
  );
}

export default StudentDetails;