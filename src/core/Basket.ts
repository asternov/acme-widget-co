import { calculateDelivery } from './delivery'
import { redWidgetDiscount } from './offers'

export class Basket {
  private items: string[] = []

  constructor(private catalogue: Record<string, { price: number }>) {}

  add(code: string) {
    if (!this.catalogue[code]) {
      throw new Error('Invalid product code')
    }
    this.items.push(code)
  }

  remove(code: string) {
    const index = this.items.indexOf(code)
    if (index !== -1) {
      this.items.splice(index, 1)
    }
  }

  getCounts(): Record<string, number> {
    return this.items.reduce<Record<string, number>>((acc, code) => {
      acc[code] = (acc[code] || 0) + 1
      return acc
    }, {})
  }

  total(): number {
    const subtotal = this.items.reduce(
        (sum, code) => sum + this.catalogue[code].price,
        0
    )

    const discount = redWidgetDiscount(
        this.items,
        this.catalogue.R01.price
    )

    const delivery = calculateDelivery(subtotal - discount)

    return Number((subtotal - discount + delivery).toFixed(2))
  }
}
