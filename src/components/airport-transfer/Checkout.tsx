
import React from 'react';
import { format } from 'date-fns';
import { ArrowLeft, MapPin, Users, Calendar, Clock, User, Mail, Phone, Car, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { BookingData, PersonalInfo, SelectedCar } from '@/pages/AirportTransfer';

interface CheckoutProps {
  bookingData: BookingData;
  personalInfo: PersonalInfo;
  selectedCar: SelectedCar;
  onSubmit: () => void;
  onBack: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ 
  bookingData, 
  personalInfo, 
  selectedCar, 
  onSubmit, 
  onBack 
}) => {
  const isRoundTrip = bookingData.returnDate && bookingData.returnTime;
  const totalPrice = isRoundTrip ? selectedCar.price * 2 : selectedCar.price;

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
            <CreditCard className="w-6 h-6 text-orange-500" />
            Booking Summary & Checkout
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Trip Details */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-orange-500" />
              Trip Details
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="font-medium">Pick-up:</span> {bookingData.pickUp}
                </div>
                <div>
                  <span className="font-medium">Drop-off:</span> {bookingData.dropOff}
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span className="font-medium">Passengers:</span> {bookingData.passengers}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">Date:</span> {bookingData.pickupDate && format(bookingData.pickupDate, 'PPP')}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="font-medium">Time:</span> {bookingData.pickupTime}
                </div>
                {isRoundTrip && (
                  <>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">Return Date:</span> {bookingData.returnDate && format(bookingData.returnDate, 'PPP')}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span className="font-medium">Return Time:</span> {bookingData.returnTime}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <User className="w-5 h-5 text-orange-500" />
              Personal Information
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="font-medium">Name:</span> {personalInfo.firstName} {personalInfo.lastName}
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span className="font-medium">Email:</span> {personalInfo.email}
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">Phone:</span> {personalInfo.phone}
                </div>
                <div>
                  <span className="font-medium">City:</span> {personalInfo.city}, {personalInfo.country}
                </div>
                <div className="md:col-span-2">
                  <span className="font-medium">Address:</span> {personalInfo.address}
                </div>
              </div>
            </div>
          </div>

          {/* Vehicle Details */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Car className="w-5 h-5 text-orange-500" />
              Selected Vehicle
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-4">
                <img 
                  src={selectedCar.image} 
                  alt={selectedCar.name}
                  className="w-20 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h4 className="font-semibold">{selectedCar.name}</h4>
                  <p className="text-gray-600">{selectedCar.type}</p>
                  <p className="text-sm text-gray-500">Up to {selectedCar.passengers} passengers</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-orange-500">
                    KSh {selectedCar.price.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">per trip</div>
                </div>
              </div>
            </div>
          </div>

          {/* Price Summary */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Price Summary</h3>
            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
              <div className="flex justify-between">
                <span>Base Price ({isRoundTrip ? 'One Way' : 'Single Trip'})</span>
                <span>KSh {selectedCar.price.toLocaleString()}</span>
              </div>
              {isRoundTrip && (
                <div className="flex justify-between">
                  <span>Return Trip</span>
                  <span>KSh {selectedCar.price.toLocaleString()}</span>
                </div>
              )}
              <Separator />
              <div className="flex justify-between font-bold text-lg">
                <span>Total Amount</span>
                <span className="text-orange-500">KSh {totalPrice.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between pt-6">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onBack}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Vehicle Selection
            </Button>
            <Button 
              onClick={onSubmit}
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8"
            >
              Submit Order
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Checkout;
