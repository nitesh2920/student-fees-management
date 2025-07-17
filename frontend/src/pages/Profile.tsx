import { useEffect, useState } from "react";
import API from "../lib/axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [student, setStudent] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/students/profile")
      .then((res) => {
        setStudent(res.data);
        setName(res.data.name);
        setEmail(res.data.email);
      })
      .catch((err) => {
        console.error("Error fetching profile:", err);
      });
  }, []);

  const update = () => {
    API.put("/students/profile", { name, email }).then((res) =>
      setStudent(res.data)
    );
    alert("Profile updated successfully");
    navigate("/");
  };

  return student ? (
    <div className="max-w-lg mx-auto mt-16 px-6 py-8 bg-white rounded-xl shadow-md border border-gray-200 transition-transform duration-300 ease-in-out hover:shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">👤 My Profile</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Your Email"
          />
        </div>

        <button
          onClick={update}
          className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
        >
          ✅ Update Profile
        </button>
      </div>
    </div>
  ) : (
    <div className="text-center mt-16 text-gray-500 text-lg">Loading profile...</div>
  );
};

export default Profile;
