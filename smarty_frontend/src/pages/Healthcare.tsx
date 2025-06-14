import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Hospital, Ambulance, Stethoscope, Users, Phone, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Healthcare = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-cityguide-purple to-cityguide-dark-purple text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">City Healthcare Guide</h1>
            <p className="text-lg opacity-90 max-w-2xl">
              Find hospitals, medical centers, and healthcare services to help you stay healthy in your new city.
            </p>
          </div>
        </div>

        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-cityguide-purple/10 rounded-lg p-4 mb-8 flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <Ambulance className="h-8 w-8 text-red-600 mr-3" />
                <div>
                  <h2 className="font-bold text-xl">Emergency Services</h2>
                  <p className="text-sm">For medical emergencies, call 911</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Button className="bg-red-600 hover:bg-red-700">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Emergency
                </Button>
                <Button variant="outline">Find Nearest ER</Button>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Find Healthcare Providers</h2>
                <div className="relative max-w-xs w-full">
                  <Input placeholder="Search facilities..." className="pl-10" />
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                </div>
              </div>

              <Tabs defaultValue="hospitals" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-8">
                  <TabsTrigger value="hospitals">Hospitals</TabsTrigger>
                  <TabsTrigger value="clinics">Clinics</TabsTrigger>
                  <TabsTrigger value="specialists">Specialists</TabsTrigger>
                  <TabsTrigger value="insurance">Insurance</TabsTrigger>
                </TabsList>

                <TabsContent value="hospitals" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader className="flex flex-row items-center gap-4">
                        <div className="bg-cityguide-purple/10 p-3 rounded-full">
                          <Hospital className="h-6 w-6 text-cityguide-purple" />
                        </div>
                        <div>
                          <CardTitle>City General Hospital</CardTitle>
                          <CardDescription>Full-service medical center</CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <MapPin className="h-4 w-4 text-gray-500 mt-1 mr-2" />
                            <span>1234 Healthcare Ave, Downtown</span>
                          </div>
                          <div className="flex items-start">
                            <Phone className="h-4 w-4 text-gray-500 mt-1 mr-2" />
                            <span>(555) 123-4567</span>
                          </div>
                          <div className="flex items-start">
                            <Clock className="h-4 w-4 text-gray-500 mt-1 mr-2" />
                            <span>Open 24 hours</span>
                          </div>
                          <div className="flex gap-2 mt-4">
                            <Button variant="outline" size="sm">View Details</Button>
                            <Button variant="outline" size="sm">Get Directions</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="flex flex-row items-center gap-4">
                        <div className="bg-cityguide-purple/10 p-3 rounded-full">
                          <Hospital className="h-6 w-6 text-cityguide-purple" />
                        </div>
                        <div>
                          <CardTitle>University Medical Center</CardTitle>
                          <CardDescription>Teaching hospital with specializations</CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <MapPin className="h-4 w-4 text-gray-500 mt-1 mr-2" />
                            <span>500 University Blvd, Campus District</span>
                          </div>
                          <div className="flex items-start">
                            <Phone className="h-4 w-4 text-gray-500 mt-1 mr-2" />
                            <span>(555) 987-6543</span>
                          </div>
                          <div className="flex items-start">
                            <Clock className="h-4 w-4 text-gray-500 mt-1 mr-2" />
                            <span>Open 24 hours</span>
                          </div>
                          <div className="flex gap-2 mt-4">
                            <Button variant="outline" size="sm">View Details</Button>
                            <Button variant="outline" size="sm">Get Directions</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="clinics" className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card>
                      <CardHeader className="flex flex-row items-center gap-4">
                        <div className="bg-cityguide-purple/10 p-3 rounded-full">
                          <Stethoscope className="h-6 w-6 text-cityguide-purple" />
                        </div>
                        <div>
                          <CardTitle>Downtown Health Clinic</CardTitle>
                          <CardDescription>Primary care services</CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <MapPin className="h-4 w-4 text-gray-500 mt-1 mr-2" />
                            <span>789 Main St, Downtown</span>
                          </div>
                          <div className="flex items-start">
                            <Clock className="h-4 w-4 text-gray-500 mt-1 mr-2" />
                            <span>Mon-Fri: 8am-6pm</span>
                          </div>
                          <Button variant="outline" size="sm" className="mt-2">View Details</Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="flex flex-row items-center gap-4">
                        <div className="bg-cityguide-purple/10 p-3 rounded-full">
                          <Stethoscope className="h-6 w-6 text-cityguide-purple" />
                        </div>
                        <div>
                          <CardTitle>Eastside Family Practice</CardTitle>
                          <CardDescription>Family medicine</CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <MapPin className="h-4 w-4 text-gray-500 mt-1 mr-2" />
                            <span>456 East Ave, Eastside</span>
                          </div>
                          <div className="flex items-start">
                            <Clock className="h-4 w-4 text-gray-500 mt-1 mr-2" />
                            <span>Mon-Fri: 9am-5pm</span>
                          </div>
                          <Button variant="outline" size="sm" className="mt-2">View Details</Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="flex flex-row items-center gap-4">
                        <div className="bg-cityguide-purple/10 p-3 rounded-full">
                          <Stethoscope className="h-6 w-6 text-cityguide-purple" />
                        </div>
                        <div>
                          <CardTitle>Westside Urgent Care</CardTitle>
                          <CardDescription>Walk-in services</CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <MapPin className="h-4 w-4 text-gray-500 mt-1 mr-2" />
                            <span>321 West Blvd, Westside</span>
                          </div>
                          <div className="flex items-start">
                            <Clock className="h-4 w-4 text-gray-500 mt-1 mr-2" />
                            <span>Daily: 7am-10pm</span>
                          </div>
                          <Button variant="outline" size="sm" className="mt-2">View Details</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="specialists" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Medical Specialists</CardTitle>
                        <CardDescription>Find specialized healthcare providers</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="border rounded-md p-4">
                            <h3 className="font-medium mb-1">Cardiology</h3>
                            <p className="text-sm text-gray-600 mb-2">6 providers in the city</p>
                            <Button variant="outline" size="sm">Find Cardiologists</Button>
                          </div>
                          <div className="border rounded-md p-4">
                            <h3 className="font-medium mb-1">Orthopedics</h3>
                            <p className="text-sm text-gray-600 mb-2">8 providers in the city</p>
                            <Button variant="outline" size="sm">Find Orthopedists</Button>
                          </div>
                          <div className="border rounded-md p-4">
                            <h3 className="font-medium mb-1">Pediatrics</h3>
                            <p className="text-sm text-gray-600 mb-2">12 providers in the city</p>
                            <Button variant="outline" size="sm">Find Pediatricians</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Mental Health Services</CardTitle>
                        <CardDescription>Support for your mental wellbeing</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="border rounded-md p-4">
                            <h3 className="font-medium mb-1">Therapists & Counselors</h3>
                            <p className="text-sm text-gray-600 mb-2">20+ providers available</p>
                            <Button variant="outline" size="sm">Find Therapists</Button>
                          </div>
                          <div className="border rounded-md p-4">
                            <h3 className="font-medium mb-1">Psychiatrists</h3>
                            <p className="text-sm text-gray-600 mb-2">8 providers in the city</p>
                            <Button variant="outline" size="sm">Find Psychiatrists</Button>
                          </div>
                          <div className="border rounded-md p-4">
                            <h3 className="font-medium mb-1">Crisis Support</h3>
                            <p className="text-sm text-gray-600 mb-2">24/7 helpline available</p>
                            <Button className="bg-cityguide-purple hover:bg-cityguide-dark-purple" size="sm">
                              Mental Health Hotline
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="insurance" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Health Insurance Information</CardTitle>
                      <CardDescription>Understanding healthcare coverage in the city</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-6">
                        <h3 className="font-medium mb-3">Major Insurance Providers</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="border rounded-md p-3 text-center">
                            <p className="font-medium">BlueHealth</p>
                            <Button variant="link" size="sm" className="h-auto p-0">Visit Website</Button>
                          </div>
                          <div className="border rounded-md p-3 text-center">
                            <p className="font-medium">HealthPlus</p>
                            <Button variant="link" size="sm" className="h-auto p-0">Visit Website</Button>
                          </div>
                          <div className="border rounded-md p-3 text-center">
                            <p className="font-medium">MediCare</p>
                            <Button variant="link" size="sm" className="h-auto p-0">Visit Website</Button>
                          </div>
                          <div className="border rounded-md p-3 text-center">
                            <p className="font-medium">UnitedCare</p>
                            <Button variant="link" size="sm" className="h-auto p-0">Visit Website</Button>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium mb-3">Public Health Programs</h3>
                        <div className="space-y-3">
                          <div className="border rounded-md p-4">
                            <h4 className="font-medium mb-1">City Health Program</h4>
                            <p className="text-sm text-gray-600 mb-2">For low-income residents</p>
                            <Button variant="outline" size="sm">Check Eligibility</Button>
                          </div>
                          <div className="border rounded-md p-4">
                            <h4 className="font-medium mb-1">State Medical Assistance</h4>
                            <p className="text-sm text-gray-600 mb-2">Income-based healthcare coverage</p>
                            <Button variant="outline" size="sm">Learn More</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Insurance Navigation Assistance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-cityguide-purple/5 p-4 rounded-md">
                        <p className="mb-4">Need help navigating health insurance options? The City Healthcare Navigators can provide free guidance.</p>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button className="bg-cityguide-purple hover:bg-cityguide-dark-purple">
                            <Phone className="mr-2 h-4 w-4" />
                            Call Navigator
                          </Button>
                          <Button variant="outline">Schedule Appointment</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Healthcare;
