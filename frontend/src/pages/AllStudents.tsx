import { useEffect, useState } from 'react';
import API from '../lib/axios';
import PaymentModal from '../components/PaymentModal';

const AllStudents = () => {
  const [students, setStudents] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const [studentsRes, profileRes] = await Promise.all([
        API.get('/students'),
        API.get('/students/profile'),
      ]);
      setStudents(studentsRes.data);
      setCurrentUser(profileRes.data);
    };
    fetchData();
  }, []);

  const handlePayFees = async () => {
    await API.put('/students/profile/pay-fees');
    const updated = await API.get('/students');
    setStudents(updated.data);
    alert('Fees paid successfully');
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        🧑‍🎓 All Students
      </h2>

      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="w-full bg-white border border-gray-200">
          <thead className="bg-gradient-to-r from-blue-100 to-blue-200">
            <tr>
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">
                Name
              </th>
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">
                Email
              </th>
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">
                Fees Paid
              </th>
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student: any, idx: number) => (
              <tr
                key={student._id}
                className={`transition-colors duration-300 ${
                  idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                } hover:bg-blue-50`}
              >
                <td className="py-3 px-6 text-sm text-gray-800">{student.name}</td>
                <td className="py-3 px-6 text-sm text-gray-800">{student.email}</td>
                <td className="py-3 px-6 text-sm">
                  <span
                    className={`inline-block px-2 py-1 text-xs font-semibold rounded ${
                      student.feesPaid
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-600'
                    }`}
                  >
                    {student.feesPaid ? 'Yes' : 'No'}
                  </span>
                </td>
                <td className="py-3 px-6">
                  {student._id === currentUser?._id && !student.feesPaid && (
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-sm rounded shadow-md transition-all duration-200"
                    >
                      Pay Fees
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

//modal
      {currentUser && (
        <PaymentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          name={currentUser.name}
          email={currentUser.email}
          onSubmit={handlePayFees}
        />
      )}
    </div>
  );
};

export default AllStudents;
