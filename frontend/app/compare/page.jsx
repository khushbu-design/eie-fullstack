'use client';

import { useCompare } from '@/context/CompareContext';
import Link from 'next/link';

export default function ComparePage() {
  const { compareList, clearCompare } = useCompare();

  if (compareList.length < 2) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-6">
            Select at least 2 products to compare.
          </h1>
          <Link href="/products" className="text-lg text-blue-600 underline hover:text-blue-800">
            ← Back to Industries
          </Link>
        </div>
      </div>
    );
  }

  const allKeys = Array.from(
    new Set(compareList.flatMap(p => p.specifications.map(s => s.key)))
  ).sort();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-6">
          <h1 className="text-4xl font-bold text-red-700">Product Comparison</h1>
          <button
            onClick={clearCompare}
            className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition"
          >
            Clear All
          </button>
        </div>

        <div className="overflow-x-auto rounded-xl shadow-2xl bg-white">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-red-700 text-white">
                <th className="py-6 px-8 text-left font-bold sticky left-0 bg-red-700">Feature</th>
                {compareList.map((product) => (
                  <th key={product.id} className="py-6 px-8 text-center min-w-[300px]">
                    <div className="flex flex-col items-center gap-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-28 h-28 object-contain rounded-lg border-2 border-gray-200"
                      />
                      <h3 className="font-bold text-lg break-words px-2">{product.name}</h3>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allKeys.map((key, index) => (
                <tr key={key} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="py-5 px-8 font-semibold text-gray-800 border-r-2 border-gray-200 sticky left-0 bg-inherit">
                    {key}
                  </td>
                  {compareList.map((product) => {
                    const spec = product.specifications.find(s => s.key === key);
                    return (
                      <td key={product.id} className="py-5 px-8 text-center text-gray-700">
                        {spec ? spec.value : '—'}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}