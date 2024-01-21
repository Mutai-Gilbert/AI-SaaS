import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import { ClerkProvider } from "@clerk/nextjs";


const Navbar = () => {
  return (
    <ClerkProvider>
    <div className="flex items-center p-4">
      <Button variant="ghost" size="icon" className="md: hidden">
        <Menu />
      </Button>
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
    </ClerkProvider>
  );
};

export default Navbar;