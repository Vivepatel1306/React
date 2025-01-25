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
    // console.log(options);
  }

  return (
    <div  className="bg-cover bg-center h-full w-full p-10" style={{ margin:"0px", padding:"0px" ,backgroundImage: 'url("https://png.pngtree.com/thumb_back/fh260/background/20230630/pngtree-d-rendering-of-a-glowing-digital-business-interface-showcasing-finance-innovation-image_3694007.jpg")' }}>
     
      <div className='p-10 bg-red-400 w-192 rounded-lg relative'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert()
          }}
        >
          <div>
            <InputBox

              label="From"
              amount={amount}
              onAmountChange={(amount) => setAmount(amount)}
              selectCurrency={from}
              currencyInfo={options}
              onCurrencyChange={(currency) => { setFrom(currency) }}

            ></InputBox>
          </div>
          <div>
            <button
            className='bg-yellow-500 pl-5 pr-5 rounded-lg pt-2  pb-2'
              type="button"
              onClick={swap}
            >
              Swap
            </button>
          </div>
          <div>
            <InputBox
              label="To"
              amount={convertedAmount}
              onAmountChange={(amount) => setConvertedAmount(amount)}
              selectCurrency={to}
              currencyInfo={options}
              onCurrencyChange={(currency) => { setTo(currency) }}
              amountDisable
            ></InputBox>
          </div>
          <button type="submit" className="w-full mt-5 bg-blue-600 text-white px-4 py-3 rounded-lg">
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>

    </div>
  )
}

export default App
