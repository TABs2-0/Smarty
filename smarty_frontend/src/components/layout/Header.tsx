import React, { useState } from 'react';
import { Search, Menu, X, MapPin, LogIn, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <MapPin className="h-6 w-6 text-cityguide-purple" />
              <h1 className="text-xl md:text-2xl font-bold text-cityguide-purple">Smart City Guide</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-3 p-4 w-[400px]">
                      <Link to="/housing" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium">Housing</div>
                        <div className="text-sm text-muted-foreground">Find accommodation options</div>
                      </Link>
                      <Link to="/education" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium">Education</div>
                        <div className="text-sm text-muted-foreground">Schools and learning resources</div>
                      </Link>
                      <Link to="/transportation" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium">Transportation</div>
                        <div className="text-sm text-muted-foreground">Public transit and routes</div>
                      </Link>
                      <Link to="/employment" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium">Employment</div>
                        <div className="text-sm text-muted-foreground">Jobs and career resources</div>
                      </Link>
                      <Link to="/healthcare" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium">Healthcare</div>
                        <div className="text-sm text-muted-foreground">Medical services and facilities</div>
                      </Link>
                      <Link to="/government" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium">Government</div>
                        <div className="text-sm text-muted-foreground">Public services and info</div>
                      </Link>
                      <Link to="/community" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium">Community</div>
                        <div className="text-sm text-muted-foreground">Local groups and events</div>
                      </Link>
                      <Link to="/culture" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium">Culture</div>
                        <div className="text-sm text-muted-foreground">Arts, history, and experiences</div>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/transportation" className={navigationMenuTriggerStyle()}>
                    Transportation
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/healthcare" className={navigationMenuTriggerStyle()}>
                    Healthcare
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="#" className={navigationMenuTriggerStyle()}>
                    About
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search places..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-cityguide-purple/20 focus:border-cityguide-purple"
              />
            </div>
            <Button
              size="sm"
              className="bg-cityguide-purple hover:bg-cityguide-dark-purple flex items-center"
              onClick={() => navigate('/signin')}
            >
              <LogIn className="mr-2 h-4 w-4" />
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 animate-fade-in">
            <div className="flex mb-4">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search places..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-cityguide-purple/20 focus:border-cityguide-purple"
                />
              </div>
            </div>
            <nav className="flex flex-col space-y-1">
              <div className="py-2 px-3 font-medium text-gray-500">Categories</div>
              <Link to="/housing" className="py-2 px-3 font-medium hover:bg-gray-50 rounded-md">Housing</Link>
              <Link to="/education" className="py-2 px-3 font-medium hover:bg-gray-50 rounded-md">Education</Link>
              <Link to="/transportation" className="py-2 px-3 font-medium hover:bg-gray-50 rounded-md">Transportation</Link>
              <Link to="/employment" className="py-2 px-3 font-medium hover:bg-gray-50 rounded-md">Employment</Link>
              <Link to="/healthcare" className="py-2 px-3 font-medium hover:bg-gray-50 rounded-md">Healthcare</Link>
              <Link to="/government" className="py-2 px-3 font-medium hover:bg-gray-50 rounded-md">Government</Link>
              <Link to="/community" className="py-2 px-3 font-medium hover:bg-gray-50 rounded-md">Community</Link>
              <Link to="/culture" className="py-2 px-3 font-medium hover:bg-gray-50 rounded-md">Culture</Link>
              <div className="border-t border-gray-200 my-2"></div>
              <Link to="#" className="py-2 px-3 font-medium hover:bg-gray-50 rounded-md">About</Link>
              <Button
                className="mt-2 bg-cityguide-purple hover:bg-cityguide-dark-purple flex items-center justify-center"
                onClick={() => navigate('/login')}
              >
                <LogIn className="mr-2 h-4 w-4" />
                Sign In
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
