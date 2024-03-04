import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface HeadingProps {
  title: string;
  description: string;
}

export const Heading = ({ title, description }: HeadingProps) => {
  return (
    <>
      <div
        className="px-4 lg:px-8 flex items-center gap-x-3 mb-8 mt-3"
        style={{ marginLeft: "5%" }}
      >
        <div>
          <h2 className="text-5xl font-bold text-black">{title}</h2>
          <p className="text-sm text-muted-foreground text-black mt-2">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};
