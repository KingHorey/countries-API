/* eslint-disable @next/next/no-img-element */
import React from "react";

const Flags = ({ flag, name }: { flag: string; name: string }) => {
  return (
    <div className="min-h-[170px] max-h-[170px] w-full rounded-md border-none">
      <img
        src={flag}
        className="object-cover w-full h-full rounded-t-md"
        alt={`${name}'s flag`}
      ></img>
    </div>
  );
};

export default Flags;
