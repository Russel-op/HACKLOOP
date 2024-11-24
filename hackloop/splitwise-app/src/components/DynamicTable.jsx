import React, { useState } from 'react';

const DynamicTable = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [isLent, setIsLent] = useState(true); // Default to "You Lent"

  const handleAddTransaction = () => {
    if (name && amount && !isNaN(amount)) {
      setTransactions([
        ...transactions,
        { name, amount: parseFloat(amount), type: isLent ? 'You Lent' : 'You Owe' }
      ]);
      setName('');
      setAmount('');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-8">Bill Splitting</h2>

        {/* Name Input */}
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Enter Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Friend's name"
          />
        </div>

        {/* Amount Input */}
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Enter Amount in Rupees</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Amount"
          />
        </div>

        {/* Toggle Buttons for Lending/Owing */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setIsLent(true)}
            className={`px-6 py-2 mr-4 rounded-full text-white ${isLent ? 'bg-green-500' : 'bg-gray-600'}`}
          >
            You Lent
          </button>
          <button
            onClick={() => setIsLent(false)}
            className={`px-6 py-2 rounded-full text-white ${!isLent ? 'bg-red-500' : 'bg-gray-600'}`}
          >
            You Owe
          </button>
        </div>

        {/* Add Transaction Button */}
        <button
          onClick={handleAddTransaction}
          className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700"
        >
          Add Transaction
        </button>
      </div>

      {/* Transactions Table */}
      <div className="max-w-4xl mx-auto mt-12 bg-gray-800 p-8 rounded-xl shadow-xl">
        <h3 className="text-2xl font-semibold text-center mb-6">Transaction History</h3>
        <table className="w-full table-auto text-sm">
          <thead>
            <tr className="text-left">
              <th className="px-4 py-2 text-lg text-gray-300">Name</th>
              <th className="px-4 py-2 text-lg text-gray-300">Amount</th>
              <th className="px-4 py-2 text-lg text-gray-300">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index} className="hover:bg-gray-700">
                <td className="px-4 py-2 text-white">{transaction.name}</td>
                <td className="px-4 py-2 text-white">{transaction.amount} ₹</td>
                <td className={`px-4 py-2 text-white ${transaction.type === 'You Lent' ? 'bg-green-500' : 'bg-red-500'} rounded-full`}>
                  {transaction.type}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DynamicTable;
