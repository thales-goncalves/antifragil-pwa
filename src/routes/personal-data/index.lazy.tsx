import { createLazyFileRoute } from '@tanstack/react-router';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Calendar} from "lucide-react";
import { useNavigate } from '@tanstack/react-router';

const PersonalDataPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[90dvh] p-6 flex flex-col text-white">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="icon" onClick={() => navigate({ to: '/account' })}>
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-semibold ml-4">Personal Data</h1>
      </div>

      <div className="space-y-4 flex-grow">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <Input defaultValue="Aaron Ramsdale" className="bg-gray-800 border-gray-700" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <Input defaultValue="aaronramsdale@gmail.com" className="bg-gray-800 border-gray-700" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <div className="flex">
            <Select defaultValue="+1">
              <SelectTrigger className="w-[80px] bg-gray-800 border-gray-700">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="+1">🇺🇸 +1</SelectItem>
                <SelectItem value="+55">🇧🇷 +55</SelectItem>

                {/* Add more country codes as needed */}
              </SelectContent>
            </Select>
            <Input defaultValue="(409) 487-1935" className="flex-grow ml-2 bg-gray-800 border-gray-700" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Date of Birth</label>
          <div className="relative">
            <Input defaultValue="December 20, 1998" className="bg-gray-800 border-gray-700 pr-10" />
            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Gender</label>
          <Select defaultValue="male">
            <SelectTrigger className="w-full bg-gray-800 border-gray-700">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button className="w-full bg-green-500 hover:bg-green-600 text-white mt-6">
        Save Changes
      </Button>
    </div>
  );
};

export const Route = createLazyFileRoute('/personal-data/')({
  component: PersonalDataPage
});

export default PersonalDataPage;