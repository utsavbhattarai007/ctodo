import React from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <>
      <div className="min-h-[calc(100vh-96px)] w-full flex justify-center py-8 gap-5">
        <div className="w-1/3 h-fit border-2 rounded-3xl flex justify-around items-center px-5 py-7 gap-2">
          <div className="flex flex-col gap-1">
            <p className="text-4xl font-pops antialiased font-bold">
              Todo Done
            </p>
            <p className="text-xl font-pops antialiased font-normal">
              Keep it up
            </p>
            <Button
              variant="outline"
              className="font-pops text-lg flex gap-1 my-3"
              size="default"
            >
              Connect Console
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
          <div className="bg-highlight rounded-full w-44 h-44 flex justify-center items-center">
            <p className="text-6xl font-pops antialiased font-bold dark:text-neutral-800">
              1/2
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
