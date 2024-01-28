import React from 'react';

const Container = ({ children }: { children: any }) => {
  return <div className="max-w-[75rem] mx-auto px-5">{children}</div>;
};

export default Container;
