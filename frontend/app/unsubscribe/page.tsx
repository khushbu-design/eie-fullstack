import { Suspense } from 'react';
import UnsubscribeContent from './UnsubscribeContent';

export default function UnsubscribePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-xl shadow-xl text-center max-w-lg">
        <h1 className="text-3xl font-bold text-red-600 mb-6">Unsubscribe</h1>

        <Suspense
          fallback={
            <p className="text-lg text-gray-600">
              Processing unsubscription... Please wait a moment.
            </p>
          }
        >
          <UnsubscribeContent />
        </Suspense>
      </div>
    </div>
  );
}