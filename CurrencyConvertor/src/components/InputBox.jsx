import { useId } from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyInfo = [],
    selectCurrency = "usd",
    amountDisable = false

}) {
    const tempoId = useId()

    return(
    <div className= "bg-white p-3 rounded-lg text-sm flex ">
        <div>
            <label htmlFor={tempoId}>{label}</label>
            <input
                type="number"
                id={tempoId}
                value={amount}
                placeholder="Amount"
                disabled={amountDisable}
                onChange={(e) => { onAmountChange && onAmountChange(Number(e.target.value)) }}
            />
        </div>
        <div>
            <p>Currency Type</p>
            <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={amountDisable}
                >

                    {currencyInfo.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}

                </select>
        </div>
    </div>)
}

export default InputBox;