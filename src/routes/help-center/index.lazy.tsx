import { createLazyFileRoute } from '@tanstack/react-router'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Search, Filter } from "lucide-react";
import { useState } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { useNavigate } from '@tanstack/react-router';

const HelpCenterPage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-[90dvh] p-6 text-white">
      {/* Nav Header */}
      <div className="flex items-center flex-row mb-6 justify-between w-full">
          <Button variant="ghost" size="icon" className=' bg-gray-900 rounded-full' onClick={() => navigate({ to: '/' })}>
            <ChevronLeft className="h-6 w-6 text-gray-300" />
          </Button>
          <h1 className="text-xl font-semibold ml-4">Help Center</h1>
          <div className="min-w-10"></div>
        </div>
      {/* Nav Header */}

      {/* Search Field */}
      <div className="relative mb-6">
        <Input
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-[#222222] border-[#333333] text-white placeholder-gray-500 rounded-lg pl-10"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      {/* Accordions */}
      <Accordion type="multiple" className="space-y-4">
        {[...Array(5)].map((_, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-white border-b-[1px] border-b-gray-800 p-y-4">
              Lorem ipsum dolor sit amet
            </AccordionTrigger>
            <AccordionContent className="text-gray-400 p-y-4">
              Turpis lectus egestas dui proin natoque nulla egestas fames molestie. Euismod orci nisi enim pharetra lectus morbi massa nibh non.
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default HelpCenterPage;


export const Route = createLazyFileRoute('/help-center/')({
  component: HelpCenterPage
})