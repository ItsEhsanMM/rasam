'use client';

import { useState } from 'react';
import PortfolioCard from '@/components/Portfolio/PortfolioCard';
import { portfolioData } from '@/lib/const';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Page = () => {
  const [tab, setTab] = useState('all');
  const tabsValues = Array.from(new Set(portfolioData.map((item) => item.category)));

  const handleTab = (tab: string) => {
    setTab(tab);
  };

  // filter data based on tab
  const filteredData =
    tab === 'all' ? portfolioData : portfolioData.filter((item) => item.category === tab);

  return (
    <div className="container mx-auto">
      <Tabs dir="rtl" value={tab} onValueChange={handleTab} className="mx-auto w-2/3">
        <TabsList className="mb-6 flex w-full gap-x-5 bg-transparent">
          <TabsTrigger className="" value={'all'}>
            همه
          </TabsTrigger>
          {tabsValues.map((value) => (
            <TabsTrigger key={value} value={value} className="cursor-pointer">
              {value}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <PortfolioCard items={filteredData} />
    </div>
  );
};

export default Page;
