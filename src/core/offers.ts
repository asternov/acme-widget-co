export function redWidgetDiscount(items: string[], redPrice: number): number {
  const reds = items.filter(i => i === 'R01').length
  return Math.floor(reds / 2) * (redPrice / 2)
}
