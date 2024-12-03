import Image from "next/image"
import { Card } from "@/components/ui/card"

interface CategoryCardProps {
  title: string
  subtitle: string
  count: string
  countLabel: string
  icon: string
}

export function CategoryCard({ title, subtitle, count, countLabel, icon }: CategoryCardProps) {
  return (
    <Card className="flex items-center gap-4 bg-[#1E2732] p-4">
      <Image
        src={icon}
        alt={title}
        width={48}
        height={48}
        className="rounded-xl"
      />
      <div className="flex-1">
        <h3 className="font-medium text-white">{title}</h3>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
      <div className="text-right">
        <p className="text-xl font-semibold text-white">{count}</p>
        <p className="text-sm text-muted-foreground">{countLabel}</p>
      </div>
    </Card>
  )
}

