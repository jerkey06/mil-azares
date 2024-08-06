import React from 'react';

const Footer = () => (
  <footer className="bg-gray-100 py-8">
    <div className="container mx-auto px-4">
      <div className="text-2xl font-bold mb-4">PP</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {['Use cases', 'Explore', 'Resources'].map((title, index) => (
          <div key={index}>
            <h4 className="font-bold mb-2">{title}</h4>
            <ul className="text-sm">
              {[
                'UI design', 'UX design', 'Wireframing', 'Prototyping',
                'Brainstorming', 'Online whiteboard', 'Team collaboration'
              ].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;