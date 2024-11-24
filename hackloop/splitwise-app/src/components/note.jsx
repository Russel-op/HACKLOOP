import React from 'react'
import { contentData } from '../constants';
const Expenses = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-primary">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contentData.map((content, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl bg-blue-gradient"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-800">{content.title}</h3>
            <p className="text-gray-600">
              {content.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Expenses;