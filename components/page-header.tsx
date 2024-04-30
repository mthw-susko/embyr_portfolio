import React from "react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "./ui/dropdown-menu";

const PageHeader = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-30 backdrop-blur-lg z-10 flex flex-row space-x-4 p-4">
      {/* collapsed drop down */}
      <div className="relative md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="hover:bg-fuchsia-400 hover:text-white"
            >
              Menu
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <a href="/">About Me</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/goals">Goals</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/past-results">Past Results</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/skills-&-values">Skills & Values</a>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* expanded nav bar */}
      <div className="hidden md:block">
        <a href="/">
          <Button
            variant="ghost"
            className="hover:bg-fuchsia-400 hover:text-white"
          >
            About Me
          </Button>
        </a>
        <a href="/goals">
          <Button
            variant="ghost"
            className="hover:bg-fuchsia-400 hover:text-white"
          >
            Goals
          </Button>
        </a>
        <a href="/past-results">
          <Button
            variant="ghost"
            className="hover:bg-fuchsia-400 hover:text-white"
          >
            Past Results
          </Button>
        </a>
        <a href="/skills-&-values">
          <Button
            variant="ghost"
            className="hover:bg-fuchsia-400 hover:text-white"
          >
            Skills & Values
          </Button>
        </a>
      </div>
    </nav>
  );
};

export default PageHeader;
