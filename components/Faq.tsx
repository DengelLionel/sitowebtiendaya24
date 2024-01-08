import React, { useState } from 'react';
interface FaqItem {
    question: string;
    answer: string;
  }
  interface FaqComponentProps {
    faqs: FaqItem[];
  }
const Faq = ({ faqs }:FaqComponentProps) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="max-w-2xl mx-auto p-4">
    <div>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <div
            className="cursor-pointer flex justify-between items-center p-4 bg-gray-100 rounded"
            onClick={() => toggleFaq(index)}
          >
            <div className="font-semibold text-azulpalido2">{faq.question}</div>
            <div className="text-gray-500">{activeIndex === index ? '➖' : '➕'}</div>
          </div>
          {activeIndex === index && (
            <div className="p-4 bg-white rounded mt-2 text-black3">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
  )
}

export default Faq