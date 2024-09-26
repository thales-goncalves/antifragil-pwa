import React, { useState } from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, LogOut } from "lucide-react";
import { useNavigate } from '@tanstack/react-router';
import LogoutConfirmation from '@/components/LogoutConfirmation';

interface ProfileItemProps {
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
}

const ProfileItem: React.FC<ProfileItemProps> = ({ icon, text, onClick }) => (
  <div className="flex items-center justify-between py-2" onClick={onClick}>
    <div className="flex items-center">
      {icon}
      <span className="ml-3">{text}</span>
    </div>
    <ChevronRight className="h-5 w-5 text-gray-500" />
  </div>
);

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState<boolean>(false);

  const handleLogout = (): void => {
    // Implement logout logic here
    console.log('User logged out');
    setShowLogoutConfirmation(false);
  };

  return (
    <div className="min-h-[90dvh] p-6 flex flex-col text-white pt-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Avatar className="h-16 w-16 mr-4">
            <AvatarImage src="https://github.com/shadcn.png" alt="Aaron Ramsdale" />
            <AvatarFallback>AR</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-semibold">Aaron Ramsdale</h2>
            <p className="text-sm text-gray-400">aaronramsdale@gmail.com</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setShowLogoutConfirmation(true)}>
          <LogOut className="h-6 w-6 text-gray-400" />
        </Button>
      </div>

      <Card className="bg-transparent border-none mb-4">
        <CardContent className="p-4">
          <p className="text-[0.8rem] font-semibold mb-2">Personal Info</p>
          <ProfileItem 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>} 
            text="Personal Data" 
            onClick={() => navigate({ to: '/personal-data' })}
          />
          <ProfileItem 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>} 
            text="Payment Account" 
            onClick={() => {/* Navigate to Payment Account */}}
          />
        </CardContent>
      </Card>

      <Card className="bg-transparent border-none">
        <CardContent className="p-4">
          <p className="text-[0.8rem] font-semibold mb-2">About</p>
          <ProfileItem 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} 
            text="Help Center" 
            onClick={() => {/* Navigate to Help Center */}}
          />
          <ProfileItem 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} 
            text="About App" 
            onClick={() => {/* Navigate to About App */}}
          />
        </CardContent>
      </Card>

      <LogoutConfirmation 
        isOpen={showLogoutConfirmation} 
        onClose={() => setShowLogoutConfirmation(false)} 
        onLogout={handleLogout}
      />
    </div>
  );
};

export const Route = createLazyFileRoute('/account/')({
  component: ProfilePage
});

export default ProfilePage;