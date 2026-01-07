'use client';
import Link from 'next/link';
import { useCompare } from '@/context/CompareContext';

export default function CompareBar() {
  const { compareList, clearCompare } = useCompare();

  if (compareList.length === 0) return null;

  return (
    <div className="compare-bar">
      <div className="compare-inner">
        <span><strong>{compareList.length}</strong> products selected</span>
        <div>
          <button onClick={clearCompare} className="clear-btn">Clear</button>
          <Link href="/compare" className="compare-btn">
            Compare ({compareList.length})
          </Link>
        </div>
      </div>
    </div>
  );
}