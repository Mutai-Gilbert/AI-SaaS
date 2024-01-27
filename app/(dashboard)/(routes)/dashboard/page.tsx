"use client";
import { useRouter } from "next/navigation";
import { ArrowBigRight, MessageSquare, Music, VideoIcon, ImageIcon, ArrowBigRightIcon, Code } from "lucide-react";
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils";

const tools = [
  {
    label: "Conversation",
    href: "/conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Music Generation",
    href: "/music",
    icon: Music,
    color: "text-emarald-500",
    bgColor: "bg-emarald-500/10",
  },
  {
    label: "Image Generation",
    href: "/image",
    icon: ImageIcon,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    label: "Video Generation",
    href: "/video",
    icon: VideoIcon,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Code Generation",
    href: "/code",
    icon: Code,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  }
]

const DashboardPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with the smartest AI models - Experience the power of AI.
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4"> 
      {tools.map((tool) => (
        <Card 
        onClick={() => router.push(tool.href)}
        key = {tool.href}
        className = "p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer">
          <div className="flex items-center gap-x-4">
            <div className = {cn("p-2 w-fit rounded-md", tool.bgColor)}>
              <tool.icon className={cn("w-8 h-8", tool.color)} />
            </div> 
            <div className="font-semibold">
              {tool.label}
            </div>
          </div>
          <ArrowBigRightIcon className="w-5 h-5"/>
        </Card>
      ))}
      </div>
    </div>
  );
};

export default DashboardPage;
