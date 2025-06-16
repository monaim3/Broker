// src/components/broker/BrokerCard.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, Star, AlertTriangle, CheckCircle, DollarSign } from 'lucide-react';
import { Broker } from '@/app/types/broker';

interface BrokerCardProps {
  broker: Broker;
  onViewReviews?: (brokerId: number) => void;
}

const BrokerCard: React.FC<BrokerCardProps> = ({ broker, onViewReviews }) => {
  const handleViewReviews = () => {
    if (onViewReviews) {
      onViewReviews(broker.id);
    }
  };

  return (
    <Card className="w-full max-w-sm mx-auto hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="text-center pb-4">
        <div className="relative mx-auto mb-4">
          <img
            src={broker.image}
            alt={broker.name}
            className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-gray-100"
          />
          {broker.isFraud ? (
            <div className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1">
              <AlertTriangle className="w-4 h-4 text-white" />
            </div>
          ) : (
            <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
          )}
        </div>
        <CardTitle className="text-xl font-bold text-gray-800">{broker.name}</CardTitle>
        <div className="flex items-center justify-center gap-1 mt-2">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{broker.rating}</span>
          <span className="text-sm text-gray-500">({broker.totalReviews} reviews)</span>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Success Rate */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-600">Success Rate:</span>
          <div className="flex items-center gap-2">
            <div className="w-16 bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${
                  broker.successRate >= 80 
                    ? 'bg-green-500' 
                    : broker.successRate >= 60 
                    ? 'bg-yellow-500' 
                    : 'bg-red-500'
                }`}
                style={{ width: `${broker.successRate}%` }}
              ></div>
            </div>
            <span className="text-sm font-bold">{broker.successRate}%</span>
          </div>
        </div>

        {/* Fraud Status */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-600">Status:</span>
          <Badge variant={broker.isFraud ? "destructive" : "default"} className="text-xs">
            {broker.isFraud ? "⚠️ Fraud Alert" : "✅ Verified"}
          </Badge>
        </div>

        {/* Fee */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-600">Fee Range:</span>
          <div className="flex items-center gap-1">
            <DollarSign className="w-4 h-4 text-green-600" />
            <span className="text-sm font-semibold text-green-600">{broker.fee}</span>
          </div>
        </div>

        {/* Countries */}
        <div className="space-y-2">
          <span className="text-sm font-medium text-gray-600">Countries:</span>
          <div className="flex flex-wrap gap-1">
            {broker.countries.map((country, index) => (
              <Badge key={index} variant="outline" className="text-xs flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {country}
              </Badge>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="flex items-center justify-between pt-2 border-t">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">{broker.contactNumber}</span>
          </div>
        </div>

        {/* Reviews Button */}
        <Button 
          className="w-full mt-4 text-black"
          style={{background: "linear-gradient(to right, #56DFCF, #ADEED9)"}}
          onClick={handleViewReviews}
        >
          View All Reviews
        </Button>
      </CardContent>
    </Card>
  );
};

export default BrokerCard;