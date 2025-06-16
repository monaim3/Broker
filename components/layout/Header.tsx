// src/components/layout/Header.tsx
import { HeaderProps } from '@/app/types/Header';
import Image from 'next/image';
import React from 'react';
import logo from "@/public/Image (1).png"
import { Button } from '../ui/button';
import Link from 'next/link';


const Header: React.FC<HeaderProps> = ({
  searchTerm,
  onSearchChange,
  filterFraud,
  onFilterChange
}) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
         <Image src={logo} alt="Logo" width={150} height={150} />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Search brokers or countries..."
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
            />

            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filterFraud}
              onChange={(e) => onFilterChange(e.target.value as 'all' | 'verified' | 'fraud')}
            >
              <option value="all">All Brokers</option>
              <option value="verified">Verified Only</option>
              <option value="fraud">Fraud Alerts</option>
            </select>

            <Link href={"/story"}>
              <Button className="bg-primary text-white hover:bg-primary/90 px-4 py-4 border">
                Share Story
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;