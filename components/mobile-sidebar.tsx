"use client";
import { Button } from "@/components/ui/button";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "@/components/sidebar";

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
      <Button variant="ghost" size="icon" className="md: hidden">
      <Menu />
     </Button>
      </SheetTrigger>
      <SheetContent side="left" className="md: hidden">
        < Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;