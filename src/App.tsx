export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center p-4">
      {" "}
      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-md p-8">
        {" "}
        <div className="text-center mb-8">
          {" "}
          <h1 className="text-3xl font-bold text-indigo-700">
            {" "}
            Smart College{" "}
          </h1>{" "}
          <p className="text-gray-600 mt-2">
            {" "}
            Resource Management System{" "}
          </p>{" "}
        </div>
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Login As
            </label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Student</option>
              <option>CR</option>
              <option>Teacher</option>
              <option>Admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-6">
          PESCE Mandya Hackathon Project 🚀
        </p>
      </div>
    </div>
  );
}
