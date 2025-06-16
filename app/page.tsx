// src/app/page.tsx
'use client';

import React, { useMemo } from 'react';
import BrokerListing from '@/components/broker/BrokerListing';
import { useSearch } from '@/components/layout/ClientLayout';
import { brokersData } from '@/components/data/brokers';


const HomePage: React.FC = () => {
  const { searchTerm, filterFraud } = useSearch();

  // Filter brokers based on search and fraud filter
  const filteredBrokers = useMemo(() => {
    return brokersData.filter(broker => {
      const matchesSearch = broker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           broker.countries.some(country => 
                             country.toLowerCase().includes(searchTerm.toLowerCase())
                           );
      
      const matchesFilter = filterFraud === 'all' || 
                           (filterFraud === 'verified' && !broker.isFraud) ||
                           (filterFraud === 'fraud' && broker.isFraud);
      
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, filterFraud]);

  const handleViewReviews = (brokerId: number) => {
    // Navigate to reviews page or open modal
    console.log(`Viewing reviews for broker ${brokerId}`);
    // In a real app, you would navigate to /reviews/[brokerId] or open a modal
  };

  return (
    <BrokerListing
      brokers={filteredBrokers}
      onViewReviews={handleViewReviews}
    />
  );
};

export default HomePage;