import React from 'react';
import Header from '../header/Header';

function PageLayout({ title, children }) {
  return (
    <>
      <div className='py-0.5 pb-28 top-0 z-49 w-full flex flex-col content-center'>
        <Header title={title} />
        <div className="">
          {children}
        </div>
      </div>
    </>
  );
}

export default PageLayout;