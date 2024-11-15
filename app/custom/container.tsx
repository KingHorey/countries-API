import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="xs:w-11/12 mx-auto space-y-10 ">{children}</div>;
};

export default Container;
