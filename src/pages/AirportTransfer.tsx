
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingCard from '@/components/airport-transfer/BookingCard';
import PersonalInfoCard from '@/components/airport-transfer/PersonalInfoCard';
import CarSelection from '@/components/airport-transfer/CarSelection';
import Checkout from '@/components/airport-transfer/Checkout';

export interface BookingData {
  pickUp: string;
  dropOff: string;
  passengers: number;
  pickupDate: Date | undefined;
  pickupTime: string;
  returnDate: Date | undefined;
  returnTime: string;
}

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
}

export interface SelectedCar {
  id: string;
  name: string;
  type: string;
  passengers: number;
  price: number;
  image: string;
}

const AirportTransfer = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>({
    pickUp: '',
    dropOff: '',
    passengers: 1,
    pickupDate: undefined,
    pickupTime: '',
    returnDate: undefined,
    returnTime: '',
  });
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
  });
  const [selectedCar, setSelectedCar] = useState<SelectedCar | null>(null);

  const handleBookingSubmit = (data: BookingData) => {
    setBookingData(data);
    setCurrentStep(2);
  };

  const handlePersonalInfoSubmit = (data: PersonalInfo) => {
    setPersonalInfo(data);
    setCurrentStep(3);
  };

  const handleCarSelect = (car: SelectedCar) => {
    setSelectedCar(car);
    setCurrentStep(4);
  };

  const handleFinalSubmit = () => {
    // Handle final order submission
    console.log('Order submitted:', { bookingData, personalInfo, selectedCar });
    alert('Order submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Airport Transfer Service
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Book your reliable airport transfer with our premium fleet
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      currentStep >= step
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {step}
                  </div>
                  {step < 4 && (
                    <div
                      className={`w-16 h-1 mx-2 ${
                        currentStep > step ? 'bg-orange-500' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          {currentStep === 1 && (
            <BookingCard onSubmit={handleBookingSubmit} initialData={bookingData} />
          )}
          
          {currentStep === 2 && (
            <PersonalInfoCard 
              onSubmit={handlePersonalInfoSubmit} 
              initialData={personalInfo}
              onBack={() => setCurrentStep(1)}
            />
          )}
          
          {currentStep === 3 && (
            <CarSelection 
              passengers={bookingData.passengers}
              onSelect={handleCarSelect}
              onBack={() => setCurrentStep(2)}
            />
          )}
          
          {currentStep === 4 && selectedCar && (
            <Checkout 
              bookingData={bookingData}
              personalInfo={personalInfo}
              selectedCar={selectedCar}
              onSubmit={handleFinalSubmit}
              onBack={() => setCurrentStep(3)}
            />
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AirportTransfer;
