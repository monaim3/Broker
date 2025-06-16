// src/components/layout/ClientLayout.tsx
'use client';

import React, { useState, createContext, useContext } from 'react';
import Header from './Header';
import Footer from './Footer';

// Create context for search state
interface SearchContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filterFraud: 'all' | 'verified' | 'fraud';
  setFilterFraud: (filter: 'all' | 'verified' | 'fraud') => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterFraud, setFilterFraud] = useState<'all' | 'verified' | 'fraud'>('all');

  const searchContextValue: SearchContextType = {
    searchTerm,
    setSearchTerm,
    filterFraud,
    setFilterFraud,
  };

  return (
    <SearchContext.Provider value={searchContextValue}>
      <div className="min-h-screen flex flex-col">
        <Header
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          filterFraud={filterFraud}
          onFilterChange={setFilterFraud}
        />
        
        <main className="flex-1">
          {children}
        </main>
        
        <Footer />
      </div>
    </SearchContext.Provider>
  );
};

export default ClientLayout;