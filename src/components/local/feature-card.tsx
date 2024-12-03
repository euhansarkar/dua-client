import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  icon: string;
  href: string;
}

export function FeatureCard({
  title,
  icon,
  href,
  className,
  ...props
}: FeatureCardProps) {
  return (
    <Link href={href}>
      <div
        className={cn(
          "flex items-center gap-3 rounded-xl p-4 transition-colors hover:bg-[#2F3B4B]",
          className
        )}
        {...props}
      >
        <Image
          src={icon}
          alt={title}
          width={40}
          height={40}
          className="rounded-xl"
        />
        <span className="text-lg font-medium text-white">{title}</span>
      </div>
    </Link>
  );
}
