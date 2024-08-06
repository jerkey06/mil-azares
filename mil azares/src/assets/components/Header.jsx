import React from 'react';

const Header = () => (
  <header className="flex justify-between items-center p-4 border-b">
    <div className="text-2xl font-bold">
        <a href="#">
            <img src="" alt="" />
            ola
        </a>
    </div>
    <nav>
      <ul className="flex space-x-4">
        <li><a href="">Services</a></li>
        <li><a href="">Community</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;