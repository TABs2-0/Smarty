import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Bus, Car, Train, Bike, PersonStanding, Navigation, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Transportation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-cityguide-purple to-cityguide-dark-purple text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">City Transportation Guide</h1>
            <p className="text-lg opacity-90 max-w-2xl">
              Everything you need to know about getting around in our city, from public transit to bike sharing and beyond.
            </p>
          </div>
        </div>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="public" className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-8">
                <TabsTrigger value="public">Public Transit</TabsTrigger>
                <TabsTrigger value="car">Car</TabsTrigger>
                <TabsTrigger value="bike">Bike</TabsTrigger>
                <TabsTrigger value="walk">Walking</TabsTrigger>
                <TabsTrigger value="apps">Transit Apps</TabsTrigger>
              </TabsList>

              <TabsContent value="public" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="bg-cityguide-purple/10 p-3 rounded-full">
                        <Bus className="h-6 w-6 text-cityguide-purple" />
                      </div>
                      <div>
                        <CardTitle>Bus System</CardTitle>
                        <CardDescription>Extensive network with 120+ routes</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Regular service from 5am to midnight</li>
                        <li>Single ride: $2.50 / Day pass: $7.00</li>
                        <li>Monthly passes available at transit centers</li>
                        <li>Real-time tracking available via mobile app</li>
                      </ul>
                      <Button variant="outline" className="mt-4 w-full">View Bus Routes</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="bg-cityguide-purple/10 p-3 rounded-full">
                        <Train className="h-6 w-6 text-cityguide-purple" />
                      </div>
                      <div>
                        <CardTitle>Metro & Light Rail</CardTitle>
                        <CardDescription>Fast connections between major areas</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>4 main lines connecting all city districts</li>
                        <li>Trains every 10-15 minutes during peak hours</li>
                        <li>Single ride: $3.00 / Day pass: $9.00</li>
                        <li>Airport express line available (30 min to city center)</li>
                      </ul>
                      <Button variant="outline" className="mt-4 w-full">View Metro Map</Button>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Transit Passes & Discounts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="border rounded-md p-4">
                        <h3 className="font-medium mb-2">City Pass</h3>
                        <p className="text-sm text-gray-600 mb-2">Unlimited rides on all public transport</p>
                        <div className="font-bold text-cityguide-purple">$65/month</div>
                      </div>
                      <div className="border rounded-md p-4">
                        <h3 className="font-medium mb-2">Student Pass</h3>
                        <p className="text-sm text-gray-600 mb-2">Discounted rate with valid student ID</p>
                        <div className="font-bold text-cityguide-purple">$45/month</div>
                      </div>
                      <div className="border rounded-md p-4">
                        <h3 className="font-medium mb-2">Senior/Disabled Pass</h3>
                        <p className="text-sm text-gray-600 mb-2">Reduced fare for eligible riders</p>
                        <div className="font-bold text-cityguide-purple">$35/month</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="car" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="bg-cityguide-purple/10 p-3 rounded-full">
                        <Car className="h-6 w-6 text-cityguide-purple" />
                      </div>
                      <div>
                        <CardTitle>Parking Information</CardTitle>
                        <CardDescription>Find affordable parking options</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Downtown parking: $2-5/hour, $15-25/day</li>
                        <li>Free street parking in residential areas (check signs)</li>
                        <li>5 park-and-ride locations on city outskirts</li>
                        <li>Monthly parking passes available for residents</li>
                      </ul>
                      <Button variant="outline" className="mt-4 w-full">Find Parking Garages</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="bg-cityguide-purple/10 p-3 rounded-full">
                        <Car className="h-6 w-6 text-cityguide-purple" />
                      </div>
                      <div>
                        <CardTitle>Car Sharing</CardTitle>
                        <CardDescription>On-demand vehicles throughout the city</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">ZipCar</span>
                          <Button variant="link" size="sm" className="h-auto p-0">Visit Site</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Car2Go</span>
                          <Button variant="link" size="sm" className="h-auto p-0">Visit Site</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Enterprise CarShare</span>
                          <Button variant="link" size="sm" className="h-auto p-0">Visit Site</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="bike" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="bg-cityguide-purple/10 p-3 rounded-full">
                        <Bike className="h-6 w-6 text-cityguide-purple" />
                      </div>
                      <div>
                        <CardTitle>Bike Sharing</CardTitle>
                        <CardDescription>300+ stations across the city</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Single ride: $2 for 30 minutes</li>
                        <li>Day pass: $15 for unlimited 30-minute rides</li>
                        <li>Annual membership: $99</li>
                        <li>Electric bikes available at select stations</li>
                      </ul>
                      <Button variant="outline" className="mt-4 w-full">Find Bike Stations</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="bg-cityguide-purple/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-cityguide-purple" />
                      </div>
                      <div>
                        <CardTitle>Bike Paths & Trails</CardTitle>
                        <CardDescription>200+ miles of dedicated bike lanes</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Protected bike lanes on major streets</li>
                        <li>Riverside trail: 24 miles of scenic routes</li>
                        <li>Mountain bike trails in northern parks</li>
                        <li>Bike repair stations at major intersections</li>
                      </ul>
                      <Button variant="outline" className="mt-4 w-full">View Bike Map</Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="walk" className="space-y-6">
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="bg-cityguide-purple/10 p-3 rounded-full">
                      <PersonStanding className="h-6 w-6 text-cityguide-purple" />
                    </div>
                    <div>
                      <CardTitle>Walking Routes</CardTitle>
                      <CardDescription>Explore the city on foot</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border rounded-md p-4">
                        <h3 className="font-medium mb-2">Historic Downtown Tour</h3>
                        <p className="text-sm text-gray-600 mb-2">2.5 miles • 1.5 hours • 12 landmarks</p>
                        <Button variant="outline" size="sm">View Route</Button>
                      </div>
                      <div className="border rounded-md p-4">
                        <h3 className="font-medium mb-2">Riverside Walk</h3>
                        <p className="text-sm text-gray-600 mb-2">3 miles • 1 hour • Scenic views</p>
                        <Button variant="outline" size="sm">View Route</Button>
                      </div>
                      <div className="border rounded-md p-4">
                        <h3 className="font-medium mb-2">Cultural District Path</h3>
                        <p className="text-sm text-gray-600 mb-2">1.8 miles • 1 hour • 8 museums & galleries</p>
                        <Button variant="outline" size="sm">View Route</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Pedestrian Safety Tips</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Use crosswalks and obey traffic signals</li>
                      <li>Be visible at night with reflective clothing</li>
                      <li>Stay on sidewalks and dedicated paths</li>
                      <li>Be aware of bicycle lanes when crossing streets</li>
                      <li>Report safety concerns to the city transportation department</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="apps" className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="bg-cityguide-purple/10 p-3 rounded-full">
                        <Navigation className="h-6 w-6 text-cityguide-purple" />
                      </div>
                      <div>
                        <CardTitle>Transit App</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-4">Real-time transit tracking, trip planning, and service alerts.</p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">iOS</Button>
                        <Button variant="outline" size="sm">Android</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="bg-cityguide-purple/10 p-3 rounded-full">
                        <Bike className="h-6 w-6 text-cityguide-purple" />
                      </div>
                      <div>
                        <CardTitle>City Bike</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-4">Find and unlock shared bikes, check availability at stations.</p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">iOS</Button>
                        <Button variant="outline" size="sm">Android</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="bg-cityguide-purple/10 p-3 rounded-full">
                        <Car className="h-6 w-6 text-cityguide-purple" />
                      </div>
                      <div>
                        <CardTitle>ParkSmart</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-4">Find and pay for parking, get reminders before expiration.</p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">iOS</Button>
                        <Button variant="outline" size="sm">Android</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Transportation;
