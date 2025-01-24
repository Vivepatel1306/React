import { useState } from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrencyConvertor from './hooks/CurrencyConvertor'


function App() {
  let [amount, setAmount] = useState('')
  let [convertedAmount, setConvertedAmount] = useState('')
  let [to, setTo] = useState("inr")
  let [from, setFrom] = useState("usd")

  const currencyInfos = useCurrencyConvertor(from)
  const options = Object.keys(currencyInfos)


  const swap = () => {
    setTo(from)
    setFrom(to)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfos[to])
  }

  return (
    <div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert()
          }}
        >
          <div>
            <InputBox

              label="from"
              amount={amount}

              onAmountChange={(amount) => setAmount(amount)}
              selectCurrency={from}
              currencyInfo={options}
              onCurrencyChange={(currency) => { setFrom(currency) }}

            ></InputBox>
          </div>
          <div>
            <button
              type="button"
              onClick={swap}
            >
              Swap
            </button>
          </div>
          <div>
            <InputBox
              label="to"
              amount={convertedAmount}
              onAmountChange={(amount) => setConvertedAmount(amount)}
              selectCurrency={to}
              currencyInfo={options}
              onCurrencyChange={(currency) => { setTo(currency) }}
              amountDisable
            ></InputBox>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>

    </div>
  )
}

export default App
