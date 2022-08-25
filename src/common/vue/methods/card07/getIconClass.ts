export type TGetIconClass = (className: string, colorName: string) => string

export const getIconClass = (className: string, colorName: string): string => {
  return `ni ${className} ${colorName} text-gradient`
}
