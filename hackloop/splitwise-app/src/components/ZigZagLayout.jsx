import React from 'react';

const ZigZagLayout = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 bg-black">
      <div className="grid grid-cols-1 gap-8">
        {/* First Component */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-800 via-blue-500 to-blue-300 p-8 rounded-lg shadow-lg">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-white">Dashboard</h2>
            <p className="text-lg text-white mt-4">
              Check your insights.
            </p>
          </div>
        </div>

        {/* Second Component */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between bg-gradient-to-r from-pink-600 via-pink-400 to-pink-200 p-8 rounded-lg shadow-lg">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-white">Add an Expense</h2>
            <p className="text-lg text-white mt-4">
              Split your bills more effectively
            </p>
          </div>
        </div>

        {/* Third Component */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-teal-700 via-teal-500 to-teal-300 p-8 rounded-lg shadow-lg">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-white">Financial Status</h2>
            <p className="text-lg text-white mt-4">
              Check your finance whether its stable or not  
            </p>
          </div>
        </div>

        {/* Fourth Component */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between bg-gradient-to-r from-purple-700 via-purple-500 to-purple-300 p-8 rounded-lg shadow-lg">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-white">Component 4</h2>
            <p className="text-lg text-white mt-4">
              This is the content of the fourth component. It’s on the right side.
            </p>
          </div>
        </div>

        {/* Fifth Component */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-orange-700 via-orange-500 to-orange-300 p-8 rounded-lg shadow-lg">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-white">Component 5</h2>
            <p className="text-lg text-white mt-4">
              This is the content of the fifth component. It’s on the left side.
            </p>
          </div>
        </div>

        {/* Sixth Component */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between bg-gradient-to-r from-red-700 via-red-500 to-red-300 p-8 rounded-lg shadow-lg">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-white">Component 6</h2>
            <p className="text-lg text-white mt-4">
              This is the content of the sixth component. It’s on the right side.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ZigZagLayout;
