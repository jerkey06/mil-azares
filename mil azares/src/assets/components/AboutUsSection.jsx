import React from 'react';

const AboutUsSection = () => (
  <section className="mb-12">
    <h2 className="text-2xl font-bold mb-4">Sobre Nosotros</h2>
    <div className="bg-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="mb-4">
          <h3 className="font-bold mb-2">{index === 0 ? '¿Quienes somos?' : 'Title'}</h3>
          <p className="text-sm text-gray-600">
            Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default AboutUsSection;