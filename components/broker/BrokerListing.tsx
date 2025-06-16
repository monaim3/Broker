// src/components/broker/BrokerListing.tsx
import React from 'react';
import BrokerCard from './BrokerCard';
import { Broker } from '@/app/types/broker';

interface BrokerListingProps {
  brokers: Broker[];
  onViewReviews?: (brokerId: number) => void;
}

const BrokerListing: React.FC<BrokerListingProps> = ({ brokers, onViewReviews }) => {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="mb-8 text-center">
        <h2 className="text-xl md:text-3xl font-semibold text-black mb-2">
          Immigration <span className="text-gray-800 font-bold"> Brokers</span> Directory
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Browse through our curated list of immigration brokers. Check their success rates, 
          fees, destination countries, and user reviews to make an informed decision.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
          <div className="text-2xl font-bold text-blue-600">{brokers.length}</div>
          <div className="text-sm text-gray-600">Total Brokers</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
          <div className="text-2xl font-bold text-green-600">
            {brokers.filter(b => !b.isFraud).length}
          </div>
          <div className="text-sm text-gray-600">Verified</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
          <div className="text-2xl font-bold text-red-600">
            {brokers.filter(b => b.isFraud).length}
          </div>
          <div className="text-sm text-gray-600">Fraud Alerts</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
          <div className="text-2xl font-bold text-purple-600">
            {brokers.length > 0 
              ? Math.round(brokers.reduce((acc, b) => acc + b.successRate, 0) / brokers.length)
              : 0
            }%
          </div>
          <div className="text-sm text-gray-600">Avg Success</div>
        </div>
      </div>

      {/* Broker Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {brokers.map((broker) => (
          <BrokerCard 
            key={broker.id} 
            broker={broker} 
            onViewReviews={onViewReviews}
          />
        ))}
      </div>

      {brokers.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-lg mb-2">No brokers found</div>
          <p className="text-gray-500">Try adjusting your search criteria</p>
        </div>
      )}
    </main>
  );
};

export default BrokerListing;