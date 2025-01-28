import {useId} from 'react'

function InputBox({
    label,
    amount, onAmountChange, currencyOption = [],
    onCurrencyChange, selectCurrency = "usd", amountDisable = false

}) {
    const uniqueId = useId()
    return <div>
        <div>
            <label htmlFor={uniqueId}>{label}</label>
            <input type="number"
                id={uniqueId}
                value={amount}
                onChange={(e) => onAmountChange(Number(e.target.value))}

            />
        </div>
        <div>
            <p>Currency Type</p>
            <select
                value={selectCurrency}
                onChange={(e) => onCurrencyChange(e.target.value)}
                disabled={amountDisable}
            >
                {currencyOption.map((currency) => (
                    <option id={currency} value={currency}>{currency}</option>
                ))
                }
            </select>
        </div>
    </div>
}

export default InputBox;
