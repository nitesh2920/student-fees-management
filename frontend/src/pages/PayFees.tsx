import  { useState } from "react";
import API from "../lib/axios";
import { useNavigate } from "react-router-dom";

const PayFees = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePay = () => {
    API.put("/students/profile/pay-fees", formData)
      .then(() => {
        alert("Fees marked as paid successfully");
        setFormData({ name: "", email: "", course: "" });
        navigate("/profile"); 
      })
      .catch((err) => {
        console.error(err);
        alert("Error while paying fees");
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border shadow rounded bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
        Pay Fees
      </h2>

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your name"
        className="w-full border px-3 py-2 mb-4 rounded"
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
        className="w-full border px-3 py-2 mb-4 rounded"
      />

      <input
        type="text"
        name="course"
        value={formData.course}
        onChange={handleChange}
        placeholder="Enter your course"
        className="w-full border px-3 py-2 mb-6 rounded"
      />

      <button
        onClick={handlePay}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
      >
        Pay Now
      </button>
    </div>
  );
};

export default PayFees;
