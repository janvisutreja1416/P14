import { useState } from "react";
import RegistrationForm from "./Components/RegistrationForm";
import StudentDetails from "./Components/StudentDetails";

function App() {
  const [student, setStudent] = useState(null);

  const handleRegister = (studentData) => {
    setStudent(studentData);
  };

  const handleReset = () => {
    setStudent(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <header className="mb-8 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.3em] text-indigo-600">
            Student Portal
          </p>

          <h1 className="text-3xl font-extrabold text-gray-800 sm:text-5xl">
            Student Registration
          </h1>

          <p className="mt-3 text-gray-600">
            Register your details and view your submitted information.
          </p>
        </header>

        {student ? (
          <StudentDetails
            student={student}
            onReset={handleReset}
          />
        ) : (
          <RegistrationForm onRegister={handleRegister} />
        )}
      </div>
    </div>
  );
}

export default App;