/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";

import Link from "next/link";

const CountryFlag = ({ flag, name }: { flag: string; name: string }) => {
  return (
    <div className="flex flex-col gap-y-10 w-full md:w-3/5 xs:h-[314px] xs:h-[500px]">
      <Button
        className="w-fit rounded-sm border-none drop-shadow-md bg-offWhite dark:bg-darkBlue"
        variant="outline"
        asChild
      >
        <Link href="/">
          <ArrowLeftIcon />
          Back
        </Link>
      </Button>
      <div className="w-full h-full flex flex-col gap-y-5">
        {/* <Image width={400} height={500} src={flag} alt={`${name}'s flag`} /> */}

        <img
          src={flag}
          className="w-full h-full xs:object-fit md:object-cover"
          alt={`${name}'s flag`}
        />
      </div>
    </div>
  );
};

export default CountryFlag;
