import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CarouselNavigation = () => (
  <div className="flex justify-between mb-8">
    <ChevronLeft className="w-8 h-8" />
    <ChevronRight className="w-8 h-8" />
  </div>
);

export default CarouselNavigation;
