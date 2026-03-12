import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [amount, setAmount] = useState(1)
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('EUR')
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [exchangeRate, setExchangeRate] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [currencies, setCurrencies] = useState([])

  const API_KEY = import.meta.env.VITE_CURRENCY_API_KEY?.trim()
  const isPlaceholderApiKey = API_KEY === 'your_real_currencyapi_key_here'

  const hasValidApiKey = API_KEY && API_KEY !== 'https://currencyapi.com/' && !isPlaceholderApiKey

  const getApiErrorMessage = async (response, fallbackMessage) => {
    try {
      const data = await response.json()
      return data?.message || data?.error?.message || fallbackMessage
    } catch {
      return fallbackMessage
    }
  }

  // Fetch available currencies on component mount
  useEffect(() => {
    const fetchCurrencies = async () => {
      if (!hasValidApiKey) {
        setError('Invalid or missing API key. Set VITE_CURRENCY_API_KEY in .env with your real currencyapi.com key.')
        return
      }

      try {
        setLoading(true)
        setError(null)
        const response = await fetch(
          `https://api.currencyapi.com/v3/currencies?apikey=${API_KEY}`
        )
        if (!response.ok) {
          throw new Error(await getApiErrorMessage(response, 'Failed to fetch currencies'))
        }
        const data = await response.json()
        const currencyList = Object.keys(data.data).sort()
        setCurrencies(currencyList)
      } catch (err) {
        setError('Failed to load currencies: ' + err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchCurrencies()
  }, [])

  // Fetch exchange rate whenever currencies or amount change
  useEffect(() => {
    const fetchExchangeRate = async () => {
      if (!fromCurrency || !toCurrency) return

      if (!hasValidApiKey) {
        setError('Invalid or missing API key. Set VITE_CURRENCY_API_KEY in .env with your real currencyapi.com key.')
        return
      }

      try {
        setLoading(true)
        setError(null)
        const response = await fetch(
          `https://api.currencyapi.com/v3/latest?apikey=${API_KEY}&base_currency=${fromCurrency}&currencies=${toCurrency}`
        )
        if (!response.ok) {
          throw new Error(await getApiErrorMessage(response, 'Failed to fetch exchange rate'))
        }
        const data = await response.json()
        const rate = data.data[toCurrency].value
        setExchangeRate(rate)
        setConvertedAmount((amount * rate).toFixed(2))
      } catch (err) {
        setError('Failed to fetch exchange rate: ' + err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchExchangeRate()
  }, [fromCurrency, toCurrency, amount])

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  return (
    <div className="app-container">
      <div className="converter-card">
        <h1>💱 Currency Converter</h1>
        
        {error && <div className="error-message">{error}</div>}
        
        <div className="converter-section">
          <div className="input-group">
            <label htmlFor="amount">Amount</label>
            <input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
              placeholder="Enter amount"
              min="0"
              step="0.01"
            />
          </div>

          <div className="input-group">
            <label htmlFor="from-currency">From</label>
            <select
              id="from-currency"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              disabled={loading || currencies.length === 0}
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>

          <button className="swap-button" onClick={handleSwapCurrencies} title="Swap currencies">
            ⇄
          </button>

          <div className="input-group">
            <label htmlFor="to-currency">To</label>
            <select
              id="to-currency"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              disabled={loading || currencies.length === 0}
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>

          <div className="input-group result">
            <label>Converted Amount</label>
            <div className="result-value">
              {loading ? (
                <span className="loading">Loading...</span>
              ) : (
                <span>
                  {convertedAmount} {toCurrency}
                </span>
              )}
            </div>
          </div>
        </div>

        {exchangeRate && (
          <div className="exchange-rate-info">
            <p>
              1 {fromCurrency} = {exchangeRate.toFixed(4)} {toCurrency}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
