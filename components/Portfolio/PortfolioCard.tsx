'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

type PortfolioItem = {
  id: number;
  title: string;
  image: string;
  category: string;
  team: string;
};

type PortfolioCardProps = {
  items: PortfolioItem[] | [];
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({ items }) => {
  const [displayItems, setDisplayItems] = useState<PortfolioItem[]>(items);
  const [isAnimating, setIsAnimating] = useState(false);

  // Trigger animation when items change
  useEffect(() => {
    setIsAnimating(true); // start fade-out
    const timeout = setTimeout(() => {
      setDisplayItems(items); // swap items
      setIsAnimating(false); // start fade-in
    }, 300); // match animation duration

    return () => clearTimeout(timeout);
  }, [items]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isAnimating ? 0 : 1 }}
      transition={{ duration: 0.3 }}
      className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {displayItems.map((item) => (
        <div
          key={item.id}
          className="relative mx-auto w-80 rounded-2xl border-2 border-orange-500 p-3"
        >
          <div className="rounded-xl bg-white p-4 shadow-sm">
            <div className="mb-3 h-40 w-full overflow-hidden rounded-lg bg-gray-100">
              <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-gray-900">{item.title}</h3>
            <div className="mb-4 flex gap-2 text-xs text-gray-600">
              <span className="rounded-md bg-gray-100 px-2 py-1">{item.category}</span>
              <span className="rounded-md bg-gray-100 px-2 py-1">{item.team}</span>
              <button className="ml-auto text-gray-400 hover:text-red-500">♥</button>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <Button className="w-full cursor-pointer rounded-xl border-2 border-orange-500 bg-transparent px-4 py-1 text-orange-500 transition hover:bg-orange-500 hover:text-white">
                مشاهده نمونه کار
              </Button>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default PortfolioCard;
