// src/data/brokers.ts

import { Broker } from "@/app/types/broker";


export const brokersData: Broker[] = [
  {
    id: 1,
    name: "Ahmed Rahman",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    successRate: 92,
    isFraud: false,
    fee: "$2,500 - $3,500",
    countries: ["Canada", "Australia", "UK"],
    contactNumber: "+880-1711-123456",
    rating: 4.8,
    totalReviews: 124
  },
  {
    id: 2,
    name: "ছানাউল ",
    image: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    successRate: 34,
    isFraud: true,
    fee: "$3,000 - $4,000",
    countries: ["USA", "Canada", "Germany"],
    contactNumber: "+880-1722-234567",
    rating: 2.6,
    totalReviews: 89
  },
  {
    id: 3,
    name: "Mohammad Hasan",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    successRate: 45,
    isFraud: true,
    fee: "$1,500 - $2,000",
    countries: ["Italy", "Spain"],
    contactNumber: "+880-1733-345678",
    rating: 2.1,
    totalReviews: 34
  },
  {
    id: 4,
    name: "Lisa Chen",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    successRate: 95,
    isFraud: false,
    fee: "$4,000 - $5,500",
    countries: ["Australia", "New Zealand", "Singapore"],
    contactNumber: "+880-1744-456789",
    rating: 4.9,
    totalReviews: 156
  },
  {
    id: 5,
    name: "David Wilson",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    successRate: 78,
    isFraud: false,
    fee: "$2,800 - $3,800",
    countries: ["UK", "Ireland", "Netherlands"],
    contactNumber: "+880-1755-567890",
    rating: 4.3,
    totalReviews: 67
  },
  {
    id: 6,
    name: "Maria Garcia",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    successRate: 85,
    isFraud: false,
    fee: "$3,200 - $4,200",
    countries: ["Spain", "France", "Portugal"],
    contactNumber: "+880-1766-678901",
    rating: 4.5,
    totalReviews: 98
  }
];