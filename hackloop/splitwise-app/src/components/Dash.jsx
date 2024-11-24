import React, { useEffect, useState } from "react";
import { FaSpinner, FaExclamationCircle } from "react-icons/fa";

const Dash = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch("https://api.example.com/user/activities");
        if (!response.ok) {
          throw new Error("Failed to fetch activities");
        }
        const data = await response.json();
        setActivities(data.activities); // Assuming API returns an 'activities' array
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchActivities();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Dashboard Header */}
        <h1 className="text-4xl font-bold mb-6">Dashboard</h1>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 rounded-lg p-5 shadow-lg">
            <h2 className="text-lg font-semibold">Total Activities</h2>
            <p className="text-3xl font-bold mt-2">{activities.length || "—"}</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-5 shadow-lg">
            <h2 className="text-lg font-semibold">Pending Tasks</h2>
            <p className="text-3xl font-bold mt-2">
              {activities.filter((a) => a.status === "Pending").length || "—"}
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-5 shadow-lg">
            <h2 className="text-lg font-semibold">Completed Tasks</h2>
            <p className="text-3xl font-bold mt-2">
              {activities.filter((a) => a.status === "Completed").length || "—"}
            </p>
          </div>
        </div>

        {/* Current Activities Section */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Current Activities</h2>

          {loading && (
            <div className="flex justify-center items-center h-40">
              <FaSpinner className="animate-spin text-gray-500 text-2xl" />
            </div>
          )}

          {error && (
            <div className="text-red-500 text-center">
              <FaExclamationCircle className="inline-block mr-2" />
              {error}
            </div>
          )}

          {!loading && !error && activities.length === 0 && (
            <div className="text-center text-gray-500">
              <p>No activities found.</p>
            </div>
          )}

          {!loading && activities.length > 0 && (
            <ul className="divide-y divide-gray-700">
              {activities.map((activity, index) => (
                <li
                  key={index}
                  className="py-4 flex items-center justify-between"
                >
                  <div>
                    <p className="text-lg font-medium">{activity.title}</p>
                    <p className="text-sm text-gray-400">
                      {activity.description}
                    </p>
                  </div>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      activity.status === "Completed"
                        ? "bg-green-500 text-white"
                        : "bg-yellow-500 text-gray-900"
                    }`}
                  >
                    {activity.status}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dash;
