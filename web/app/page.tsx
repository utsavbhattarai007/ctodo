import { Button } from "@/components/ui/button";
import React from "react";
import { Play } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="min-h-[calc(100vh-96px)] w-full flex justify-center items-center">
        <div className="w-4/5 h-fit flex justify-between items-center p-4 gap-16">
          <div className="w-1/2 h-96 flex flex-col gap-8 justify-center">
            <div className="text-4xl font-fira antialiased font-medium leading-snug tracking-tight">
              Your{" "}
              <span className="underline decoration-highlight decoration-[2px] decoration-wavy">
                Cross-platform
              </span>{" "}
              todo app with{" "}
              <span className="underline decoration-sky-400 decoration-[2px] decoration-wavy">
                Cli-support
              </span>{" "}
              which
            </div>
            <div className="flex justify-evenly items-center gap-2">
              <ul className="text-2xl font-fira text-balance gap-2 flex flex-col border-2 rounded-xl px-6 py-4 list-none hover:list-disc list-inside cursor-pointer">
                <li>
                  Create
                  <br />
                </li>
                <li>
                  List
                  <br />
                </li>
                <li>
                  Update
                  <br />
                </li>
                <li>
                  Delete
                  <br />
                </li>
                <li>
                  Sync-to-cloud
                  <br />
                </li>
              </ul>
              <Play className="h-7 w-7" />
              <div className="border-2 rounded-xl font-fira text-3xl px-6 py-3 font-medium cursor-pointer">
                Tasks
              </div>
            </div>
          </div>
          <div className="w-1/2 h-96 border-2"></div>
        </div>
      </div>
    </>
  );
}
