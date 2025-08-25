import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';

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
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items &&
        items.map((item) => (
          <div
            key={item.id}
            className="relative mx-auto w-80 rounded-2xl border-2 border-orange-500 p-3"
          >
            {/* Content box */}
            <div className="rounded-xl bg-white p-4 shadow-sm">
              {/* Image section */}
              <div className="mb-3 h-40 w-full overflow-hidden rounded-lg bg-gray-100">
                <Image
                  width={256}
                  height={256}
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="mb-2 text-lg font-bold text-gray-900">{item.title}</h3>

              {/* Tags / actions */}
              <div className="mb-4 flex gap-2 text-xs text-gray-600">
                <span className="rounded-md bg-gray-100 px-2 py-1">{item.category}</span>
                <span className="rounded-md bg-gray-100 px-2 py-1">{item.team}</span>
                <button className="ml-auto text-gray-400 hover:text-red-500">♥</button>
              </div>

              {/* Price & Buy button */}
              <div className="mt-5 flex items-center justify-between">
                <Button className="w-full cursor-pointer rounded-xl border-2 border-orange-500 bg-transparent px-4 py-1 text-orange-500 transition hover:bg-orange-500 hover:text-white">
                  مشاهده نمونه کار
                </Button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PortfolioCard;
