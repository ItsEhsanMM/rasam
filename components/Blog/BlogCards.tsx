'use client';

import { Button } from '../ui/button';
import React from 'react';

export type BlogItem = {
  id: number;
  title: string;
  description: string;
  image: string;
};

// Props for BlogCard (optional: allow passing custom data)
type BlogCardProps = {
  items: BlogItem[] | [];
};

const BlogCard: React.FC<BlogCardProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="relative mx-auto w-80 rounded-2xl border-2 border-orange-500 p-3"
        >
          <div className="rounded-xl bg-white p-4 shadow-sm">
            <div className="mb-3 h-40 w-full overflow-hidden rounded-lg bg-gray-100">
              <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
            </div>
            <h3 className="mb-2 text-center text-lg font-bold text-gray-900">{item.title}</h3>
            <p className="mb-4 text-xs text-gray-600">{item.description}</p>
            <div className="mt-5 flex items-center justify-between">
              <Button className="w-full cursor-pointer rounded-xl border-2 border-orange-500 bg-transparent px-4 py-1 text-orange-500 transition hover:bg-orange-500 hover:text-white">
                مشاهده مقاله
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
