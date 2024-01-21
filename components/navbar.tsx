import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { ClerkProvider } from "@clerk/nextjs";
import MobileSidebar from "@/components/mobile-sidebar";

const Navbar = () => {
  return (
    <ClerkProvider>
    <div className="flex items-center p-4">
        <MobileSidebar />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
    </ClerkProvider>

  );
};

export default Navbar;