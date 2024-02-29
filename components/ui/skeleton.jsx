import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}) {
  return (
    <div
      className={cn("bg-red-900 animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
