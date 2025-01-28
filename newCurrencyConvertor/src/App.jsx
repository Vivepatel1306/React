import { useState } from 'react';
// import './App.css';
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyConvertor';

function App() {

  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <div className="space-y-4">
          <InputBox
            label="From"
            amount={amount}
            onAmountChange={(amount) => setAmount(amount)}
            selectCurrency={from}
            onCurrencyChange={(from) => setFrom(from)}
            currencyOption={options}
          />

          <button
            type="button"
            onClick={swap}
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
          >
            Swap
          </button>

          <InputBox
            label="To"
            amount={convertedAmount}
            selectCurrency={to}
            onCurrencyChange={(to) => setTo(to)}
            currencyOption={options}
          />
        </div>
        <button
          type="submit"
          className="mt-4 w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
        >
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </form>
    </div>
  );
}

export default App;
