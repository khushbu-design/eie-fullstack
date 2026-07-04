'use client';

import { useCompare } from '@/context/CompareContext';
import Link from 'next/link';
import Image from 'next/image';

export default function ComparePage() {
  const { compareList, clearCompare } = useCompare();

  if (compareList.length < 2) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-red-50">
        <div className="text-center max-w-lg px-6">
          <div className="text-6xl mb-6">⚖️</div>
          <h1 className="text-5xl font-bold text-red-700 mb-6 leading-tight">
            Compare Products
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            Select at least 2 products to see detailed side-by-side comparison
          </p>
          <Link 
            href="/products" 
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white text-lg px-10 py-4 rounded-2xl font-semibold transition shadow-lg"
          >
            Browse Products →
          </Link>
        </div>
      </div>
    );
  }

  const allKeys = Array.from(
    new Set(compareList.flatMap(p => p.specifications.map(s => s.key)))
  ).sort();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
          <div>
            <h1 className="text-5xl font-bold text-red-700 tracking-tight">Product Comparison</h1>
            <p className="text-gray-600 mt-3 text-lg">Detailed side-by-side specification analysis</p>
          </div>
          
          <button
            onClick={clearCompare}
            className="bg-white border-2 border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 rounded-2xl font-semibold transition flex items-center gap-2"
          >
            Clear All Comparison
          </button>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full min-w-full table-auto">
              <thead>
                <tr className="bg-gradient-to-r from-red-700 to-red-600 text-white">
                  <th className="py-8 px-8 text-left font-bold text-lg sticky left-0 z-20 bg-red-700 w-72">
                    Specifications
                  </th>
                  {compareList.map((product, idx) => (
                    <th key={product.id} className="py-8 px-6 text-center min-w-[320px] border-l border-red-500">
                      <div className="flex flex-col items-center gap-5">
                        <div className="relative w-32 h-32 mx-auto rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain p-2 bg-white"
                          />
                        </div>
                        <h3 className="font-bold text-xl leading-tight px-4">{product.name}</h3>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {allKeys.map((key, index) => (
                  <tr key={key} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-7 px-8 font-semibold text-gray-800 sticky left-0 bg-inherit border-r border-gray-100 z-10">
                      {key}
                    </td>
                    {compareList.map((product) => {
                      const spec = product.specifications.find(s => s.key === key);
                      return (
                        <td key={product.id} className="py-7 px-8 text-center text-gray-700 font-medium border-l border-gray-100">
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
    </div>
  );
}