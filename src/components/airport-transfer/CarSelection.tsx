
import React from 'react';
import { ArrowLeft, Users, Star, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SelectedCar } from '@/pages/AirportTransfer';

interface CarSelectionProps {
  passengers: number;
  onSelect: (car: SelectedCar) => void;
  onBack: () => void;
}

const CarSelection: React.FC<CarSelectionProps> = ({ passengers, onSelect, onBack }) => {
  const cars = [
    {
      id: '1',
      name: 'Toyota Camry',
      type: 'Sedan',
      passengers: 4,
      price: 5000,
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      features: ['Air Conditioning', 'GPS Navigation', 'Wi-Fi'],
      rating: 4.8
    },
    {
      id: '2',
      name: 'Honda CR-V',
      type: 'SUV',
      passengers: 5,
      price: 6500,
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      features: ['Air Conditioning', 'GPS Navigation', 'Wi-Fi', 'Extra Storage'],
      rating: 4.9
    },
    {
      id: '3',
      name: 'Toyota Hiace',
      type: 'Van',
      passengers: 8,
      price: 8500,
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      features: ['Air Conditioning', 'GPS Navigation', 'Wi-Fi', 'Extra Storage', 'Premium Sound'],
      rating: 4.7
    },
    {
      id: '4',
      name: 'BMW 5 Series',
      type: 'Luxury Sedan',
      passengers: 4,
      price: 12000,
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      features: ['Premium Interior', 'GPS Navigation', 'Wi-Fi', 'Leather Seats', 'Premium Sound'],
      rating: 5.0
    }
  ];

  const suitableCars = cars.filter(car => car.passengers >= passengers);

  return (
    <div className="max-w-6xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
            <Shield className="w-6 h-6 text-orange-500" />
            Choose Your Vehicle
          </CardTitle>
          <p className="text-center text-gray-600">
            Select a vehicle suitable for {passengers} {passengers === 1 ? 'passenger' : 'passengers'}
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {suitableCars.map((car) => (
              <div key={car.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-semibold">{car.name}</h3>
                      <p className="text-gray-600">{car.type}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{car.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1 text-gray-600">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{car.passengers} passengers</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {car.features.map((feature, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-2xl font-bold text-orange-500">
                        KSh {car.price.toLocaleString()}
                      </span>
                      <span className="text-gray-600 text-sm">/trip</span>
                    </div>
                    <Button 
                      onClick={() => onSelect(car)}
                      className="bg-orange-500 hover:bg-orange-600 text-white"
                    >
                      Select Vehicle
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-start mt-8">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onBack}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Personal Info
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CarSelection;
