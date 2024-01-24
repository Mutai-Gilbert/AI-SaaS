"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { LayoutDashboard, MessageSquare, ImageIcon, VideoIcon, Music, Code, Settings } from "lucide-react";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({ 
    weight: "600",
    subsets: ["latin-ext"],
});

const routes = [{
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    color: "text-sky-500",
},
{
    label: "Conversation",
    href: "/conversation",
    icon: MessageSquare,
    color: "text-violet-500",
},
{
    label: "Image Generation",
    href: "/image",
    icon: ImageIcon,
    color: "text-pink-700",
},
{
    label: "Video Generation",
    href: "/video",
    icon: VideoIcon,
    color: "text-orange-700",
},
{
    label: "Music Generation",
    href: "/music",
    icon: Music,
    color: "text-emerald-500",
},
{
    label: "Code Generation",
    href: "/code",
    icon: Code,
    color: "text-green-700",
},
{
    label: "Settings",
    href: "/settings",
    icon: Settings,
}
]
const Sidebar = () => {
    const pathname = usePathname();

    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="relative w-8 h-8 mr-4">
                        <Image fill src="/logo.png" alt="Logo" />
                    </div>
                    <h1 className={cn("text-2xl font-bold")}>Genius</h1>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                            href={route.href}
                            key={route.href}
                            className={cn("text-sm group flex p-3 w-full justify-start font-medium rounded-lg cursor-pointer hover:text-white hover:bg-white/10 transition", 
                            pathname === route.href ? "bg-white/10 text-white" : "text-white/50 hover:text-white/70")}
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)}/>
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};




export default Sidebar;