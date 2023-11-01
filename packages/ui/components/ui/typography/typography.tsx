import { cn } from "../../../lib/utils"
import { FC } from "react"

type AvailableSizes = "extra-small" | "small" | "medium" | "large" | "extra-large"

interface TypographyProps {
  text: string
  size: AvailableSizes
  color: "primary" | "secondary"
  className?: string
}
const sizes: Record<AvailableSizes, string> = {
  "extra-small": "text-xs",
  small: "text-sm",
  medium: "text-base",
  large: "text-lg",
  "extra-large": "text-5xl"
}

const colors = {
  primary: "text-primary",
  secondary: "text-secondary"
}

export const Typography: FC<TypographyProps> = ({ text, size, color, className }) => {
  const classes = cn(`${sizes[size]} ${colors[color]}`, className)
  return <p className={classes}>{text}</p>
}
