import React from 'react';

function Header({ title }) {
  return (
    <>
      <div className="shadow py-2 bg-gradient-to-r 
        from-orange 
        to-orange-500 
        via-green
        animate-gradient-x">
        <div className="container px-1 py-2">
          <h1 className="text-[20px] ps-5 font-bold text-white m-0 dark:text-black">{title}</h1>
        </div>
      </div>
    </>
  );
}

export default Header;