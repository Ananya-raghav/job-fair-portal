import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Job Fair 2026 🚀
      </h1>

      <p className="text-gray-600 mb-6">
        Register now and grab your opportunity!
      </p>

      <Link to="/register">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Register Now
        </button>
      </Link>
    </div>
  );
}

export default Home;