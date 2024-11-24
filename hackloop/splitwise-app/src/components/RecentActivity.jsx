import React, { useEffect, useState } from "react";
import axios from "axios";

const RecentActivity = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch activities from API
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get("https://api.example.com/recent-activities");
        setActivities(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch recent activities.");
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Content */}
      <div className="max-w-2xl mx-auto mt-8 bg-gray-800 shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-200 mb-4">Recent Activity</h2>

        {loading && <p className="text-gray-400">Loading...</p>}

        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && (
          <ul>
            {activities.map((activity) => (
              <li
                key={activity.id}
                className="flex justify-between items-center border-b border-gray-700 py-4"
              >
                <div>
                  <h3 className="text-sm font-semibold text-gray-300">{activity.title}</h3>
                  <p className="text-xs text-gray-400">{activity.description}</p>
                  <p className="text-xs text-gray-500">
                    {new Date(activity.date).toLocaleDateString()}
                  </p>
                </div>
                <div
                  className={`text-sm font-semibold ${
                    activity.type === "expense" ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {activity.amount}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RecentActivity;