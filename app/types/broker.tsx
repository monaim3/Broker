// src/types/broker.ts
export interface Broker {
  id: number;
  name: string;
  image: string;
  successRate: number;
  isFraud: boolean;
  fee: string;
  countries: string[];
  contactNumber: string;
  rating: number;
  totalReviews: number;
}