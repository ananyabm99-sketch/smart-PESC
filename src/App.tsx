import { useState } from "react";

type Role = "Student" | "CR" | "Teacher" | "Admin";
type Page = "dashboard" | "booking";

function LoginPage({ onLogin }: { onLogin: (role: Role) => void }) {
  const [role, setRole] = useState<Role>("Student");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(role);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center p-4">
      {" "}
      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-md p-8">
        {" "}
        <div className="text-center mb-8">
          {" "}
          <h1 className="text-3xl font-bold text-indigo-700">
            Smart College
          </h1>{" "}
          <p className="text-gray-600 mt-2">Resource Management System</p>{" "}
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl"
          />

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl"
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value as Role)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl"
          >
            <option>Student</option>
            <option>CR</option>
            <option>Teacher</option>
            <option>Admin</option>
          </select>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

function BookingPage({ onBack }: { onBack: () => void }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("Booking request submitted successfully! ✅");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {" "}
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-8">
        {" "}
        <div className="flex justify-between items-center mb-6">
          {" "}
          <h1 className="text-3xl font-bold text-indigo-700">
            Book a Room
          </h1>{" "}
          <button
            onClick={onBack}
            className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-xl"
          >
            {" "}
            Back{" "}
          </button>{" "}
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Booking Authorization ID"
            className="w-full px-4 py-3 border rounded-xl"
          />

          <select className="w-full px-4 py-3 border rounded-xl">
            <option>Classroom</option>
            <option>Laboratory</option>
            <option>Seminar Hall</option>
          </select>

          <input type="date" className="w-full px-4 py-3 border rounded-xl" />

          <input type="time" className="w-full px-4 py-3 border rounded-xl" />

          <input
            type="number"
            placeholder="Duration (hours)"
            className="w-full px-4 py-3 border rounded-xl"
          />

          <textarea
            placeholder="Purpose of booking"
            rows={3}
            className="w-full px-4 py-3 border rounded-xl"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl"
          >
            Submit Booking Request
          </button>
        </form>
        {message && (
          <p className="mt-4 text-green-600 font-medium">{message}</p>
        )}
      </div>
    </div>
  );
}

function Dashboard({
  role,
  onLogout,
  onOpenBooking,
}: {
  role: Role;
  onLogout: () => void;
  onOpenBooking: () => void;
}) {
  const features: Record<Role, string[]> = {
    Student: ["Search Exam Room Number", "View Exam Schedule"],
    CR: ["Book Classrooms", "Check Room Availability", "View Booking History"],
    Teacher: ["Book Labs and Classrooms", "Check Resource Availability"],
    Admin: ["Manage Users", "Add Resources", "Upload Exam Seating"],
  };

  const canBook = role === "CR" || role === "Teacher";

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {" "}
      <div className="max-w-5xl mx-auto">
        {" "}
        <div className="bg-white rounded-3xl shadow-lg p-6 mb-6 flex justify-between items-center">
          {" "}
          <div>
            {" "}
            <h1 className="text-3xl font-bold text-indigo-700">
              {role} Dashboard
            </h1>{" "}
            <p className="text-gray-600">Welcome to Smart College</p>{" "}
          </div>{" "}
          <button
            onClick={onLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl"
          >
            {" "}
            Logout{" "}
          </button>{" "}
        </div>
        {canBook && (
          <button
            onClick={onOpenBooking}
            className="mb-6 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold"
          >
            Book a Room
          </button>
        )}
        <div className="grid md:grid-cols-2 gap-6">
          {features[role].map((feature) => (
            <div
              key={feature}
              className="bg-white rounded-2xl shadow p-6 border border-gray-100"
            >
              <h2 className="text-xl font-semibold text-gray-800">{feature}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [loggedInRole, setLoggedInRole] = useState<Role | null>(null);
  const [page, setPage] = useState<Page>("dashboard");

  if (!loggedInRole) {
    return <LoginPage onLogin={setLoggedInRole} />;
  }

  if (page === "booking") {
    return <BookingPage onBack={() => setPage("dashboard")} />;
  }

  return (
    <Dashboard
      role={loggedInRole}
      onLogout={() => {
        setLoggedInRole(null);
        setPage("dashboard");
      }}
      onOpenBooking={() => setPage("booking")}
    />
  );
}
