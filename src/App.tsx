import { useState } from 'react'
import { Basket } from './core/Basket'
import { products } from './core/products'

const basket = new Basket(products)

export default function App() {
    const [, refresh] = useState(0)

    const add = (code: string) => {
        basket.add(code)
        refresh(x => x + 1)
    }

    const remove = (code: string) => {
        basket.remove(code)
        refresh(x => x + 1)
    }

    const counts = basket.getCounts()

    return (
        <div style={{
            maxWidth: 420,
            margin: '40px auto',
            padding: 20,
            border: '1px solid #ccc',
            borderRadius: 8,
            fontFamily: 'Arial'
        }}>
            <h2>🛒 Acme Widget Co</h2>

            {Object.entries(products).map(([code, p]) => (
                <div
                    key={code}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        marginBottom: 10
                    }}
                >
                    <button
                        onClick={() => add(code)}
                        style={{
                            flex: 1,
                            padding: 10,
                            cursor: 'pointer'
                        }}
                    >
                        Add {code} — ${p.price}
                    </button>

                    <div style={{ width: 30, textAlign: 'center' }}>
                        {counts[code] || 0}
                    </div>

                    <button
                        onClick={() => remove(code)}
                        disabled={!counts[code]}
                        style={{
                            width: 40,
                            padding: 10,
                            cursor: counts[code] ? 'pointer' : 'not-allowed'
                        }}
                    >
                        −
                    </button>
                </div>
            ))}

            <hr />
            <h3>Total: ${basket.total()}</h3>
        </div>
    )
}
