

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: () => void;
  name: string;
  email: string;
};

const PaymentModal: React.FC<Props> = ({ isOpen, onClose, onSubmit, name, email }) => {
  if (!isOpen) return null;

 const handleSubmit = () => {
  onSubmit?.();   
  onClose();       
};
 
  return (
    <div className="fixed inset-0 z-50 backdrop-blur-sm bg-white/30 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-lg font-bold mb-3">Pay Your Fees</h2>

        <div className="mb-2">
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
        </div>

        <input
          type="text"
          placeholder="Enter Course Name"
          className="border px-3 py-2 w-full mb-4"
        />

        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded"
          >
            Cancel
          </button>
          <button
        onClick={handleSubmit}

            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
