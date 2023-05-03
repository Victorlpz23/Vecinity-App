import React from 'react';

function Header({ title }) {
  return (
    <>
      <div className="shadow bg-orangesoft">
        <div className="container px-1 py-2">
          <h1 className="text-[20px] ps-5 font-bold text-white m-0">{title}</h1>
        </div>
      </div>
    </>
  );
}

export default Header;